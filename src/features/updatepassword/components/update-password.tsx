import { Spinner, Textbox } from "@/components";
import { BaseSyntheticEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropsType = {
    errMessage: string,
    clickBack: () => void,
    isLoading: boolean,
    register: UseFormRegister<{
        password: string;
        confirmPassword: string;
    }>,
    errors: FieldErrors<{
        password: string;
        confirmPassword: string;
    }>,
    handleConfirm: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

export function UpdatePassword(props: PropsType) {

    const {
        errMessage,
        clickBack,
        isLoading,
        register,
        errors,
        handleConfirm
    } = { ...props };

    return (
        <div className="w-full bg-[#dcdcdc] min-h-screen box-border pb-[3%] pt-[5%] md:pl-[10%]">
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
                    <Spinner size={40} />
                </div>
            )}
            <div className="box-border w-[382px] mx-auto md:ml-0 md:mr-0 md:w-[550px]">
                <div className="text-[30px] mb-[8%]">
                    パスワード変更
                </div>
                {
                    errMessage &&
                    <p className="text-red-500 text-sm mb-2 text-center font-bold">
                        {errMessage}
                    </p>
                }
                <div className="mb-[8%]">
                    <div>パスワード</div>
                    <Textbox
                        className="w-[98%] h-[33px] px-2 border"
                        type="password"
                        maxLength={30}
                        autoComplete="off"
                        registration={register("password")}
                    />
                    {errors.password?.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                    )}
                </div>
                <div className="mb-[8%]">
                    <div>確認用パスワード</div>
                    <Textbox
                        className="w-[98%] h-[33px] px-2 border"
                        type="password"
                        maxLength={30}
                        autoComplete="off"
                        registration={register("confirmPassword")}
                    />
                    {errors.confirmPassword?.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                    )}
                </div>
                <div className="flex flex-row gap-2 justify-center mt-2">
                    <button
                        type="button"
                        className="bg-black hover:bg-gray-800 text-white min-w-[100px] py-2 px-4 rounded-[20px]"
                        onClick={clickBack}
                    >
                        戻る
                    </button>
                    <button
                        type="button"
                        className="bg-black hover:bg-gray-800 text-white min-w-[100px] py-2 px-4 rounded-[20px]"
                        onClick={handleConfirm}
                    >
                        登録
                    </button>
                </div>
            </div>
        </div>
    );
}