import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';

import './App.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;