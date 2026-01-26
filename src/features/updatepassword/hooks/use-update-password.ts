import { SetLoginUserContext } from '@/app/providers/login-user-provider';
import { paths } from '@/config/paths';
import { LoginUserType } from '@/types/login-user-type';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useUpdatePasswordMutation } from '../api/update-password';
import { UpdatePasswordRequestType } from '../types/update-password-request-type';
import { useUpdatePasswordForm } from './use-update-password.form';


export function useUpdatePassword() {

    // ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserContext.useCtx();
    // フォーム
    const { register, handleSubmit, formState: { errors }, reset } = useUpdatePasswordForm();
    // 登録リクエスト
    const postMutation = useUpdatePasswordMutation({
        // 正常終了後の処理
        onSuccess: (res: unknown) => {
            setLoginUserInfo(res as LoginUserType);
            navigate(paths.home.path);
        },
        // 失敗後の処理
        onError: (message: string) => {

            //エラーメッセージを表示
            setErrMessage(message);

            reset({
                password: ``,
                confirmPassword: ``,
            });
        },
    });

    /**
     * パスワード更新実行
     */
    const handleConfirm = handleSubmit((data) => {

        const body: UpdatePasswordRequestType = {
            password: data.password,
            confirmPassword: data.confirmPassword
        };

        // 登録リクエスト呼び出し
        postMutation.mutate(body);
    });

    /**
     * 戻るボタン押下
     */
    function clickBack() {
        navigate(paths.login.path);
    }

    return {
        errMessage,
        clickBack,
        isLoading: postMutation.isPending,
        register,
        errors,
        handleConfirm,
    }
}