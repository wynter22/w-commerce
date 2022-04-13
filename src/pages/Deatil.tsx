import React from 'react';
import { useParams } from 'react-router-dom';
import 'styles/commerce/detail.scss';

const Detail = (props: any) => {
  const { productId } = useParams();

  return (
    <>
      <div className="content_wrap">
        <div>
          <div>
            <span>{`navigator > navigator > navigator`}</span>
          </div>
          <img
            src="http://via.placeholder.com/600x600"
            width={600}
            height={600}
          />
          <div>
            <div>partner</div>
            <div>상품명</div>
            <div>리뷰 평점</div>
            <div>가격</div>
            <div>혜택</div>
            <div>배송</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
