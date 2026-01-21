import { api } from '@/lib/api-client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

type MethodType = "GET" | "POST";

type PropsType<TData, RData, PData> = {
    url: string,
    callback?: (data: TData) => RData,
    afSuccessFn?: (data: RData) => void,
    afErrorFn?: (error: unknown) => void,
    method?: MethodType,
    postData?: PData,
}

const useQueryWrapper = <
    TData = unknown,
    RData = TData,
    PData extends {} = {},
>(props: PropsType<TData, RData, PData>) => {

    const afSuccessFnRef = useRef(props.afSuccessFn);
    const afErrorFnRef = useRef(props.afErrorFn);
    const callbackRef = useRef(props.callback);

    afSuccessFnRef.current = props.afSuccessFn;
    afErrorFnRef.current = props.afErrorFn;
    callbackRef.current = props.callback;

    // 成功時のコールバック実行済みフラグ
    const hasCalledSuccessRef = useRef(false);

    //GET
    const getQuery = async () => {
        const { data } = await api.get(props.url);
        return data;
    }

    //POST
    const postQuery = async () => {
        const { data } = await api.post(props.url, props.postData ?? {});
        return data;
    }

    //HTTPメソッドのリスト
    const queryList = {
        GET: getQuery,
        POST: postQuery,
    }

    const query = useQuery<TData>({
        queryKey: [props.url],
        queryFn: props.method ? queryList[props.method] : queryList["GET"],
        enabled: !!props.url,
    });

    // 成功時のコールバック処理
    useEffect(() => {
        if (query.isSuccess && query.data !== undefined && !hasCalledSuccessRef.current) {
            hasCalledSuccessRef.current = true;
            const transformedData = callbackRef.current ? callbackRef.current(query.data) : query.data as unknown as RData;
            afSuccessFnRef.current?.(transformedData);
        }

        if (!query.isSuccess) {
            hasCalledSuccessRef.current = false;
        }
    }, [query.isSuccess, query.data]);

    // エラー時のコールバック処理
    useEffect(() => {
        if (query.isError && query.error) {
            afErrorFnRef.current?.(query.error);
        }
    }, [query.isError, query.error]);

    return query;
};

export default useQueryWrapper;