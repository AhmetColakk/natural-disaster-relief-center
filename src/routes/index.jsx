// import { useRoutes } from 'react-router-dom';

// // routes
// import MainRoutes from './MainRoutes';
// import AuthenticationRoutes from './AuthenticationRoutes';
// import PublicRoutes from './PublicRoutes';

// // ==============================|| ROUTING RENDER ||============================== //

// export default function ThemeRoutes() {
//   return useRoutes([MainRoutes, AuthenticationRoutes, PublicRoutes]);
// }
import { lazy } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Loadable from '@/ui-component/Loadable';
import MainLayout from '@/layout/MainLayout';
import LandingLayout from '@/layout/Landing';

import NotFound from '../views/NotFound';
import MinimalLayout from '@/layout/MinimalLayout';

import LandingPage from '../views/Landing';
import About from '../views/landing/About';
import Contact from '../views/landing/Contact';
// login option 3 routing
const AuthLogin3 = Loadable(
  lazy(() => import('@/views/pages/authentication/authentication3/Login3')),
);
const AuthRegister3 = Loadable(
  lazy(() => import('@/views/pages/authentication/authentication3/Register3')),
);
// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import('@/views/dashboard/Default')),
);
const UtilsTypography = Loadable(
  lazy(() => import('@/views/utilities/Typography')),
);
const UtilsColor = Loadable(lazy(() => import('@/views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('@/views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(
  lazy(() => import('@/views/utilities/MaterialIcons')),
);
const UtilsTablerIcons = Loadable(
  lazy(() => import('@/views/utilities/TablerIcons')),
);

// sample page routing
const SamplePage = Loadable(lazy(() => import('@/views/sample-page')));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<NotFound />}>
      <Route index element={<LandingPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/dashboard' element={<MainLayout />}>
        <Route index element={<DashboardDefault />} />
        <Route path='colors' element={<UtilsColor />} />
        <Route path='shadows' element={<UtilsShadow />} />
        <Route path='icons' element={<UtilsMaterialIcons />} />
        <Route path='tabler-icons' element={<UtilsTablerIcons />} />
        <Route path='typography' element={<UtilsTypography />} />
        <Route path='sample-page' element={<SamplePage />} />
      </Route>
      <Route path='auth' element={<MinimalLayout />}>
        <Route path='login' element={<AuthLogin3 />} />
        <Route path='register' element={<AuthRegister3 />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
