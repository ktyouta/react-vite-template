import { NotFound } from '@/components/pages/notfound/not-found';
import { paths } from '@/config/paths';
import { lazy, ReactNode } from 'react';
import { useRoutes } from 'react-router-dom';
import { GuestRoute } from './guest-route';
import { PageSuspense } from './page-suspense';
import { ProtectedRoute } from './protected-route';

// lazy import（コード分割）
const HomeContainer = lazy(() => import('@/features/home/components/home/home-container').then(m => ({ default: m.HomeContainer })));
const SampleContainer = lazy(() => import('@/features/sample/components/sample/sample-container').then(m => ({ default: m.SampleContainer })));
const MyPage = lazy(() => import('@/features/mypage/components/mypage/mypage').then(m => ({ default: m.MyPage })));
const LoginContainer = lazy(() => import('@/features/login/components/login-container').then(m => ({ default: m.LoginContainer })));
const SignupContainer = lazy(() => import('@/features/signup/components/signup-container').then(m => ({ default: m.SignupContainer })));
const UpdateUserContainer = lazy(() => import('@/features/updateuser/components/update-user-container').then(m => ({ default: m.UpdateUserContainer })));
const UpdatePasswordContainer = lazy(() => import('@/features/updatepassword/components/update-password-container').then(m => ({ default: m.UpdatePasswordContainer })));


const routerList: { path: string, element: ReactNode }[] = [
    {
        path: paths.home.path,
        element: (
            <PageSuspense>
                <HomeContainer />
            </PageSuspense>
        )
    },
    {
        path: paths.sample.path,
        element: (
            <PageSuspense>
                <SampleContainer />
            </PageSuspense>
        )
    },
    {
        path: paths.mypage.path,
        element: (
            <ProtectedRoute>
                <PageSuspense>
                    <MyPage />
                </PageSuspense>
            </ProtectedRoute>
        )
    },
    {
        path: paths.login.path,
        element: (
            <GuestRoute>
                <PageSuspense>
                    <LoginContainer />
                </PageSuspense>
            </GuestRoute>
        )
    },
    {
        path: paths.siginup.path,
        element: (
            <GuestRoute>
                <PageSuspense>
                    <SignupContainer />
                </PageSuspense>
            </GuestRoute>
        )
    },
    {
        path: paths.updateUser.path,
        element: (
            <ProtectedRoute>
                <PageSuspense>
                    <UpdateUserContainer />
                </PageSuspense>
            </ProtectedRoute>
        )
    },
    {
        path: paths.updatePassword.path,
        element: (
            <ProtectedRoute>
                <PageSuspense>
                    <UpdatePasswordContainer />
                </PageSuspense>
            </ProtectedRoute>
        )
    },
    {
        path: `*`,
        element: <NotFound />
    }
];

export const AppRouter = () => {
    const router = useRoutes(routerList);
    return router;
};
