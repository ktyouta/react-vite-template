import { LoginUserType } from "@/types/LoginUserType";
import { createCtx } from "@/utils/create-ctx";
import { ReactNode, useState } from "react";

// ログインユーザー情報
export const LoginUserContext = createCtx<LoginUserType | undefined>();
// ログインユーザー情報(setter)
export const SetLoginUserContext = createCtx<React.Dispatch<React.SetStateAction<LoginUserType | undefined>>>();

type PropsType = {
    chilren: ReactNode;
}

export function LoginUserProvider(props: PropsType) {

    // ログインユーザー情報
    const [loginUser, setLoginUser] = useState<LoginUserType>();

    return (
        <LoginUserContext.Provider value={loginUser}>
            <SetLoginUserContext.Provider value={setLoginUser}>
                {props.chilren}
            </SetLoginUserContext.Provider>
        </LoginUserContext.Provider>
    );
}