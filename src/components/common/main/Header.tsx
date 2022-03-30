import InputText from 'components/atoms/InputText';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import MenuState from 'store/menu';

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
                <button type="button">로그인</button>
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
      </header>
    </>
  );
};

export default Header;
