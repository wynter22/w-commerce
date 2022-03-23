import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            Value
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
