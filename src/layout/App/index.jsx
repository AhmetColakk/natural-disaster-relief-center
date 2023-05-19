import { Outlet } from 'react-router-dom';
import NavigationScroll from '../NavigationScroll';

const AppLayout = () => {
  return (
    <>
      <NavigationScroll>
        <Outlet />
      </NavigationScroll>
    </>
  );
};

export default AppLayout;
