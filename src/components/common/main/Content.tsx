import React, { useEffect, useState } from 'react';
import Skeleton from 'components/common/Skeleton';
import 'styles/commerce/content.scss';

const Content = () => {
  const [isLoading, setLoading] = useState(false);
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setContents([{ text: 'test', price: '1000원', imgUrl: '' }]);
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="content_wrap">
        <div className="content">
          <div>
            <span>Title</span>
            <hr />
          </div>
          <div className="content_item">
            <ul>
              {isLoading
                ? contents.map((item, i) => (
                    <li className="prod_item" key={i}>
                      <div className="prod_img">
                        <img
                          src="https://picsum.photos/seed/picsum/241/241"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="prod_info">
                        <p className="prod_title">{item.text}</p>
                        <p className="prod_price">{item.price}</p>
                      </div>
                    </li>
                  ))
                : new Array(12).fill(1).map((_, i) => {
                    return (
                      <li className="prod_item skeleton" key={`skeleton_${i}`}>
                        <div className="prod_img"></div>
                        <div className="prod_info">
                          <p className="prod_title" />
                          <p className="prod_price" />
                        </div>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
      {/* <ContentComment /> */}
    </>
  );
};

export default Content;
