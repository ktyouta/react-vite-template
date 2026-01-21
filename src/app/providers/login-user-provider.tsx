import { API_PATH } from "@/consts/api-path";
import useQueryWrapper from "@/hooks/use-query-wrapper";
import { LoginUserType } from "@/types/login-user-type";
import { createCtx } from "@/utils/create-ctx";
import { ReactNode, useState } from "react";

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
    useQueryWrapper(
        {
            url: API_PATH.AUTH,
            afSuccessFn: (res: LoginUserType) => {
                setLoginUser(res);
                setIsAuthLoading(false);
            },
            afErrorFn: (err) => {
                setIsAuthLoading(false);
            }
        }
    );

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