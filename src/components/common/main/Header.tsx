import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import MenuState from 'store/menu';
import InputText from 'components/atoms/InputText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';

import 'styles/commerce/swiper.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuList] = useRecoilState(MenuState);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <header className="">
        <div className="topbar">
          <div className="topbar__content">
            <div className="topbar__content-left">
              <a href="/">LOGO</a>
              <div>
                <nav>
                  <a href="/">menu1</a>
                  <a href="/">menu2</a>
                  <a href="/">menu3</a>
                </nav>
              </div>
            </div>
            <div className="topbar__content-right">
              <div>
                <InputText value={searchValue} updateValue={setSearchValue} />
              </div>
              <div>
                <Link to="login">로그인</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navigator">
          <div className="navigator__content">
            <div className="navigator__content-left">
              {menuList.map(menu => {
                return (
                  <a href="/" key={menu.id}>
                    {menu.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ height: '400px' }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{ disableOnInteraction: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {new Array(4).fill(1).map((_, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={`https://picsum.photos/1500/300?random=${idx}`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>
    </>
  );
};

export default Header;
