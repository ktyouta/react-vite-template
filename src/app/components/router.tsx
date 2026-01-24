import { NotFound } from '@/components/pages/notfound/not-found';
import { paths } from '@/config/paths';
import { HomeContainer } from '@/features/home/components/home/home-container';
import { LoginContainer } from '@/features/login/components/login-container';
import { MyPage } from '@/features/mypage/components/mypage/mypage';
import { SampleContainer } from '@/features/sample/components/sample/sample-container';
import { useRoutes } from 'react-router-dom';
import { AuthLoadingRoute } from './auth-loading-route';
import { ProtectedRoute } from './protected-route';


const routerList = [
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
        element: <LoginContainer />
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