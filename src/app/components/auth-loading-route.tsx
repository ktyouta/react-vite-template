import { Loading } from "@/components";
import React, { ReactNode } from "react";
import { IsAuthLoadingContext } from "../providers/login-user-provider";


type PropsType = {
    children: ReactNode;
}

export function AuthLoadingRoute(props: PropsType) {

    const isAuthLoading = IsAuthLoadingContext.useCtx();

    if (isAuthLoading) {
        return (
            <Loading />
        );
    }
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}