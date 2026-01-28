import { apiPaths } from "@/config/api-paths";
import { MESSAGES } from "@/constants/messages";
import useQueryWrapper from "@/hooks/use-query-wrapper";
import { createApiResponseSchema } from "@/lib/api-response";
import { LoginUserSchema, LoginUserType } from "@/types/login-user-type";
import { createCtx } from "@/utils/create-ctx";
import { ReactNode, useState } from "react";
import { authKeys } from "../api/query-key";

const AuthResponseSchema = createApiResponseSchema(LoginUserSchema);

// ログインユーザー情報
export const LoginUserContext = createCtx<LoginUserType | null>();
// ログインユーザー情報(setter)
export const SetLoginUserContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserType | null>>>();
// 認証チェック中フラグ
export const IsAuthLoadingContext = createCtx<boolean>();

type PropsType = {
    children: ReactNode;
}

export function LoginUserProvider(props: PropsType) {

    // ログインユーザー情報
    const [loginUser, setLoginUser] = useState<LoginUserType | null>(null);
    // 認証チェック中フラグ
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    // 認証チェック
    useQueryWrapper({
        url: apiPaths.auth,
        key: authKeys,
        select: (res) => {
            const result = AuthResponseSchema.safeParse(res);
            if (!result.success) {
                console.error(MESSAGES.API_VALIDATION_ERROR, result.error);
                throw new Error(MESSAGES.GENERIC_ERROR);
            }
            return result.data.data;
        },
        onSuccess: (data) => {
            setLoginUser(data);
            setIsAuthLoading(false);
        },
        onError: () => {
            setIsAuthLoading(false);
        },
    });

    return (
        <IsAuthLoadingContext.Provider value={isAuthLoading}>
            <LoginUserContext.Provider value={loginUser}>
                <SetLoginUserContext.Provider value={setLoginUser}>
                    {props.children}
                </SetLoginUserContext.Provider>
            </LoginUserContext.Provider>
        </IsAuthLoadingContext.Provider>
    );
}