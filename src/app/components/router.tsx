import { NotFound } from '@/components/pages/notfound/not-found';
import { paths } from '@/config/paths';
import { HomeContainer } from '@/features/home/components/home/home-container';
import { LoginContainer } from '@/features/login/components/login-container';
import { MyPage } from '@/features/mypage/components/mypage/mypage';
import { SampleContainer } from '@/features/sample/components/sample/sample-container';
import { SiginupContainer } from '@/features/signup/components/signup-container';
import { ReactNode } from 'react';
import { useRoutes } from 'react-router-dom';
import { AuthLoadingRoute } from './auth-loading-route';
import { GuestRoute } from './guest-route';
import { ProtectedRoute } from './protected-route';


const routerList: { path: string, element: ReactNode }[] = [
    {
        path: paths.home.path,
        element: <HomeContainer />
    },
    {
        path: paths.sample.path,
        element: <SampleContainer />
    },
    {
        path: paths.mypage.path,
        element: (
            <ProtectedRoute>
                <MyPage />
            </ProtectedRoute>
        )
    },
    {
        path: paths.login.path,
        element: (
            <GuestRoute>
                <LoginContainer />
            </GuestRoute>
        )
    },
    {
        path: paths.signup.path,
        element: (
            <GuestRoute>
                <SiginupContainer />
            </GuestRoute>
        )
    },
    {
        path: `*`,
        element: <NotFound />
    }
];

export const AppRouter = () => {

    const router = useRoutes(routerList.map((e) => {
        return {
            ...e,
            element: (
                <AuthLoadingRoute>
                    {e.element}
                </AuthLoadingRoute>
            )
        }
    }));

    return router;
};