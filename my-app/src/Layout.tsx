import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout = () => {
  return (
    <>
      <Header />
        <div className="content">
            <div className='container bg-light pb-2'>
              <Outlet />
            </div>
          </div>
      <Footer />
    </>
  );
};
export default Layout;
