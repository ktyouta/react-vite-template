import { Errors, Loading } from '@/components';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type PropsType = {
    children: ReactNode;
}

export function PageSuspense(props: PropsType) {
    return (
        <ErrorBoundary
            FallbackComponent={Errors}
        >
            <Suspense
                fallback={<Loading />}
            >
                {props.children}
            </Suspense>
        </ErrorBoundary>
    );
}
