import { api } from '@/lib/api-client';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';


type PropsType<T> = {
    key: readonly unknown[],
    url: string,
    select: (res: unknown) => T,
    onSuccess?: (data: T) => void,
    onError?: (error: unknown) => void,
    enabled?: boolean,
    options?: Omit<
        UseQueryOptions<unknown, Error, T, readonly unknown[]>,
        'queryKey' | 'queryFn' | 'select' | 'enabled'
    >,
}

const useQueryWrapper = <T>(props: PropsType<T>) => {

    const onSuccessRef = useRef(props.onSuccess);
    const onErrorRef = useRef(props.onError);

    onSuccessRef.current = props.onSuccess;
    onErrorRef.current = props.onError;

    //GET
    const getQuery = async () => {
        const { data } = await api.get(props.url);
        return data;
    }

    const query = useQuery({
        queryKey: props.key,
        queryFn: getQuery,
        select: props.select,
        enabled: props.enabled ?? true,
        ...props.options,
    });

    // 成功時のコールバック処理
    useEffect(() => {
        if (query.isSuccess && query.data !== undefined) {
            onSuccessRef.current?.(query.data);
        }
    }, [query.isSuccess, query.dataUpdatedAt]);

    // エラー時のコールバック処理
    useEffect(() => {
        if (query.isError && query.error) {
            onErrorRef.current?.(query.error);
        }
    }, [query.isError, query.error]);

    return query;
};

export default useQueryWrapper;