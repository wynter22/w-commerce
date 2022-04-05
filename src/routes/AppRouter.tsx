import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import Detail from 'pages/Deatil';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/:productId" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
