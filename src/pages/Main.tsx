import React from 'react';
import Header from 'components/common/main/Header';
import Content from 'components/common/main/Content';
import 'styles/commerce/main.scss';

const Main = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Main;
