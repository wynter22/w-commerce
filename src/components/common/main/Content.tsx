import React from 'react';
import { ReactComponent as MainImage } from 'assets/img/main.svg';
import MainContent from 'components/main/MainContent';

const Content = () => {
  console.log('test');
  return (
    <>
      <main className="main-container">
        <MainImage />
        <MainContent />
      </main>
    </>
  );
};

export default Content;
