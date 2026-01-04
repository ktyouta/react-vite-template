import { paths } from '@/config/paths';
import { HomeContainer } from '@/features/home/components/home/home-container';
import { SampleContainer } from '@/features/sample/components/sample/sample-container';
import { useRoutes } from 'react-router-dom';


export const appRouter = [
    {
        path: paths.home.path,
        element: <HomeContainer />
    },
    {
        path: paths.sample.path,
        element: <SampleContainer />
    },
]

export const AppRouter = () => {

    const router = useRoutes(appRouter);

    return router;
};