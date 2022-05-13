import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './UseRoutes';

const App: FC = () => {
  const routes = useRoutes();
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
