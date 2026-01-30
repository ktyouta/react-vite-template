import { apiPaths } from "@/config/api-paths";
import { useQueryWrapper } from "@/hooks/use-query-wrapper";
import { LoginUserType } from "@/types/login-user-type";
import { veryfyKeys } from "./query-key";

type PropsType = {
    select: (res: unknown) => LoginUserType,
    onSuccess?: (data: LoginUserType) => void,
    onError?: (error: unknown) => void,
}

export function veryfy(props: PropsType) {

    // 認証チェック
    return useQueryWrapper({
        url: apiPaths.verify,
        key: veryfyKeys.all,
        select: props.select,
        onSuccess: props.onSuccess,
        onError: props.onError,
    });
}