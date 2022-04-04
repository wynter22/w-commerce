import React, { useEffect, useState } from 'react';
import 'styles/commerce/content.scss';
import { Link } from 'react-router-dom';

const Content = () => {
  const [isLoading, setLoading] = useState(false);
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setContents([
        { id: 10001, text: 'test', price: '1000원', imgUrl: '' },
        { id: 10002, text: 'test', price: '1000원', imgUrl: '' },
        { id: 10003, text: 'test', price: '1000원', imgUrl: '' },
      ]);
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
                      <Link to={`product/${item.id}`}>
                        <div className="prod_img">
                          <img
                            src="https://picsum.photos/seed/picsum/241/241"
                            alt=""
                          />
                        </div>
                        <div className="prod_info">
                          <p className="prod_title">{item.text}</p>
                          <p className="prod_price">{item.price}</p>
                        </div>
                      </Link>
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
