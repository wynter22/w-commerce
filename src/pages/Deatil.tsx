import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props: any) => {
  const { productId } = useParams();
  return (
    <>
      <div>
        <h3>detail</h3>
        <span>{productId}</span>
      </div>
    </>
  );
};

export default Detail;
