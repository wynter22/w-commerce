import React from 'react';
import 'styles/commerce/skeleton.scss';

const Skeleton = () => {
  return (
    <li className="skeleton-item">
      <div className="skeleton-img"></div>
      <div className="skeleton-info">
        <p className="skeleton-info-name" />
        <p className="skeleton-info-email" />
      </div>
    </li>
  );
};

export default Skeleton;
