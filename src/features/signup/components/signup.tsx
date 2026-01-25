import { Select, Spinner, Textbox } from "@/components";
import { DAY_LIST, MONTH_LIST } from "@/constants/date-options";
import { BaseSyntheticEvent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropsType = {
    errMessage: string,
    yearCoomboList: {
        label: string;
        value: string;
    }[],
    clickBack: () => void,
    isLoading: boolean,
    register: UseFormRegister<{
        userName: string;
        birthday: {
            year: string;
            month: string;
            day: string;
        };
        password: string;
        confirmPassword: string;
    }>,
    errors: FieldErrors<{
        userName: string;
        birthday: {
            year: string;
            month: string;
            day: string;
        };
        password: string;
        confirmPassword: string;
    }>,
    handleConfirm: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

export function Siginup(props: PropsType) {

    const {
        errMessage,
        yearCoomboList,
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
                    アカウント作成
                </div>
                {
                    errMessage &&
                    <p className="text-red-500 text-sm mb-2 text-center font-bold">
                        {errMessage}
                    </p>
                }
                <div className="mb-[8%]">
                    <div>ユーザー名(3～30文字)</div>
                    <Textbox
                        className="w-[98%] h-[33px] px-2 border"
                        type="text"
                        maxLength={30}
                        placeholder="UserName"
                        autoComplete="off"
                        registration={register("userName")}
                    />
                    {errors.userName?.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>
                    )}
                </div>
                <div className="mb-[8%]">
                    <div>生年月日</div>
                    <div className="flex items-center justify-center gap-1">
                        <Select
                            options={yearCoomboList}
                            className="w-[68%] h-[39px] border"
                            {...register("birthday.year")}
                        />
                        <div className="mr-[2px] shrink-0">年</div>
                        <Select
                            options={MONTH_LIST}
                            className="w-[68%] h-[39px] border"
                            {...register("birthday.month")}
                        />
                        <div className="mr-[2px] shrink-0">月</div>
                        <Select
                            options={DAY_LIST}
                            className="w-[68%] h-[39px] border"
                            {...register("birthday.day")}
                        />
                        <span className="shrink-0">日</span>
                    </div>
                    {errors.birthday?.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.birthday.message}</p>
                    )}
                </div>
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