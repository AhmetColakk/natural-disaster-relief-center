import { lazy } from 'react';

// project imports
import Loadable from '@/ui-component/Loadable';

// login option 3 routing
const Home = Loadable(lazy(() => import('@/views/home/index')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const PublicRoutes = {
  path: '/',

  children: [
    {
      element: <Home />,
    },
  ],
};

export default PublicRoutes;
