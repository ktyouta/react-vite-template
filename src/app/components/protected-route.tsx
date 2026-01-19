import { Loading } from "@/components";
import { paths } from "@/config/paths";
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { IsAuthLoadingContext, LoginUserContext } from "../providers/login-user-provider";

type PropsType = {
    children: ReactNode;
}

export function ProtectedRoute(props: PropsType) {

    const isAuthLoading = IsAuthLoadingContext.useCtx();
    const loginUser = LoginUserContext.useCtx();

    if (isAuthLoading) {
        return (
            <Loading />
        );
    }

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

