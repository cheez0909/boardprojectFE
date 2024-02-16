import Header from '../../outlines/admin/Header';
import Footer from '../../outlines/admin/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
