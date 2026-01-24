import { apiPaths } from '@/config/api-paths';
import useMutationWrapper, { errResType } from '@/hooks/use-mutation-wrapper';
import { LoginUserType } from '@/types/login-user-type';

type UseLoginMutationProps = {
    onSuccess: (data: LoginUserType) => void;
    onError: (message: string) => void;
};

export function useLoginMutation(props: UseLoginMutationProps) {

    return useMutationWrapper({
        url: apiPaths.login,
        method: "POST",
        afSuccessFn: (res: unknown) => {
            props.onSuccess(res as LoginUserType);
        },
        afErrorFn: (res: errResType) => {
            const errMessage = res.response.data.message;
            props.onError(errMessage);
        },
    });
};