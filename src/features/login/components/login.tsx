import { Spinner, Textbox } from '@/components';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type PropsType = {
    errMessage: string,
    isLoading: boolean,
    register: UseFormRegister<{
        userName: string;
        password: string;
    }>,
    errors: FieldErrors<{
        userName: string;
        password: string;
    }>,
    clickLogin: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

export function Login(props: PropsType) {

    const {
        errMessage,
        isLoading,
        register,
        errors,
        clickLogin,
    } = props;

    return (
        <div className="w-full min-h-screen bg-[#dcdcdc] flex items-center justify-center">
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
                    <Spinner size={40} />
                </div>
            )}
            <div className="p-4 w-[500px]">
                <h1 className="text-xl font-bold text-center mb-3">
                    ログイン
                </h1>
                {
                    errMessage &&
                    <p className="text-red-500 text-sm mb-2 text-center font-bold">
                        {errMessage}
                    </p>
                }
                <div className="flex flex-col gap-3">
                    {/* ユーザー名 */}
                    <div>
                        <p className="text-sm font-medium mb-1">ユーザー名</p>
                        <Textbox
                            className={`w-full h-10 px-3 ${errors.userName ? 'border-red-500' : ''}`}
                            autoComplete="off"
                            registration={register("userName")}
                        />
                        {errors.userName?.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>
                        )}
                    </div>
                    {/* パスワード */}
                    <div>
                        <p className="text-sm font-medium mb-1">パスワード</p>
                        <Textbox
                            className={`w-full h-10 px-3 ${errors.password ? 'border-red-500' : ''}`}
                            type="password"
                            autoComplete="off"
                            registration={register("password")}
                        />
                        {errors.password?.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    <div className="flex flex-row gap-2 justify-center mt-2">
                        <button
                            type="button"
                            className="bg-black hover:bg-gray-800 text-white min-w-[100px] py-2 px-4 rounded-[20px]"
                            onClick={() => { }}
                        >
                            戻る
                        </button>
                        <button
                            type="button"
                            className="bg-black hover:bg-gray-800 text-white min-w-[100px] py-2 px-4 rounded-[20px]"
                            onClick={clickLogin}
                        >
                            ログイン
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}