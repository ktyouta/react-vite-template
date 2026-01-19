import { LoginUserType } from "@/types/LoginUserType";
import { createCtx } from "@/utils/create-ctx";
import { ReactNode, useState } from "react";

// ログインユーザー情報
export const LoginUserContext = createCtx<LoginUserType | undefined>();
// ログインユーザー情報(setter)
export const SetLoginUserContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserType | undefined>>>();
// 認証チェック中フラグ
export const IsAuthLoadingContext = createCtx<boolean>();

type PropsType = {
    children: ReactNode;
}

export function LoginUserProvider(props: PropsType) {

    // ログインユーザー情報
    const [loginUser, setLoginUser] = useState<LoginUserType>();
    // 認証チェック中フラグ
    const [isAuthLoading, setIsAuthLoading] = useState(true);

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