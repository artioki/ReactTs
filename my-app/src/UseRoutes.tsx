import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PageItem from './pages/PageItem';
import PageNewest from './pages/PageNewest';

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<PageNewest />} />
        <Route path=":id" element={<PageItem />} />
        <Route path="timer" element={<div>timer</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
