import React from 'react';

const Skeleton = () => {
  return (
    <li className="prod_item skeleton">
      <div className="prod_img"></div>
      <div className="prod_info">
        <p className="prod_title" />
        <p className="prod_price" />
      </div>
    </li>
  );
};

export default Skeleton;
