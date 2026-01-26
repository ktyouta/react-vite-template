import { apiPaths } from '@/config/api-paths';
import useMutationWrapper, { errResType } from '@/hooks/use-mutation-wrapper';
import { LoginUserType } from '@/types/login-user-type';

type PropsType = {
    onSuccess: (data: LoginUserType) => void;
    onError: (message: string) => void;
};

export function useUpdateUserMutation(props: PropsType) {

    return useMutationWrapper({
        url: apiPaths.updateUser,
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