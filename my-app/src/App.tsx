import React, { FC, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './UseRoutes';
import { Context } from './Context';


const App: FC = () => {
  const routes = useRoutes();
  const [second, setsecond] = useState(0);
  function update() {
    setsecond((second) => second + 1);
  }
  useEffect(() => {
    const intervald = setInterval(() => {
      update();
    }, 1000);
    return () => clearTimeout(intervald);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Context.Provider value={second}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
