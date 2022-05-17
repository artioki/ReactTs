import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageItem from './pages/PageItem';
import PageNewest from './pages/PageNewest';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="newest/:page" element={<PageNewest />} />
        <Route path="post/:id" element={<PageItem />} />
        <Route path="*" element={<Navigate to="/newest/1" />} />
      </Route>
    </Routes>
  );
};
