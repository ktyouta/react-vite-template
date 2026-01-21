import { API_PATH } from '@/consts/api-path';
import useMutationWrapper, { errResType } from '@/hooks/use-mutation-wrapper';
import { LoginUserType } from '@/types/login-user-type';

type UseLoginMutationProps = {
    onSuccess: (data: LoginUserType) => void;
    onError: (message: string) => void;
};

export function useLoginMutation(props: UseLoginMutationProps) {

    return useMutationWrapper({
        url: API_PATH.LOGIN,
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