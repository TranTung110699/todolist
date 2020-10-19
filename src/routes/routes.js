import RootLayout from '../layouts';
import Home from '../components/home';
import routes from '../constants/routes';
import JobList from "../components/job-list";

export default [
    {
        component: RootLayout,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: routes.job,
                component: JobList,
            },
            // {
            //     path: `${routes.getNewDetail}:niid`,
            //     component: NewDetail,
            // },
        ],
    },
];
