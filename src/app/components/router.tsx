import { NotFound } from '@/components/pages/notfound/not-found';
import { paths } from '@/config/paths';
import { HomeContainer } from '@/features/home/components/home/home-container';
import { LoginContainer } from '@/features/login/components/login-container';
import { MyPage } from '@/features/mypage/components/mypage/mypage';
import { SampleContainer } from '@/features/sample/components/sample/sample-container';
import { SignupContainer } from '@/features/signup/components/signup-container';
import { UpdatePasswordContainer } from '@/features/updatepassword/components/update-password-container';
import { UpdateUserContainer } from '@/features/updateuser/components/update-user-container';
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
        path: paths.siginup.path,
        element: (
            <GuestRoute>
                <SignupContainer />
            </GuestRoute>
        )
    },
    {
        path: paths.updateUser.path,
        element: (
            <ProtectedRoute>
                <UpdateUserContainer />
            </ProtectedRoute>
        )
    },
    {
        path: paths.updatePassword.path,
        element: (
            <ProtectedRoute>
                <UpdatePasswordContainer />
            </ProtectedRoute>
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