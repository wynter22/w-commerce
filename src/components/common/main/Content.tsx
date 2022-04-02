import React, { useEffect, useState } from 'react';
import Skeleton from 'components/common/Skeleton';
import 'styles/commerce/content.scss';

const Content = () => {
  const [isLoading, setLoading] = useState(false);
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    setContents([{ text: 'test', price: '1000원', imgUrl: '' }]);
    setLoading(false);
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
              {isLoading ? (
                <>
                  {contents.map(item => (
                    <>
                      <img src={item.imgUrl} alt="" />
                    </>
                  ))}
                </>
              ) : (
                new Array(12).fill(1).map((_, i) => {
                  return <Skeleton key={i} />;
                })
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* <ContentComment /> */}
    </>
  );
};

export default Content;
