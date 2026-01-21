import { paths } from "@/config/paths";
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LoginUserContext } from "../providers/login-user-provider";

type PropsType = {
    children: ReactNode;
}

export function ProtectedRoute(props: PropsType) {

    // ログインユーザー情報
    const loginUser = LoginUserContext.useCtx();

    if (!loginUser) {
        return (
            <Navigate
                to={paths.login.path}
                replace
            />
        );
    }

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

