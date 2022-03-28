import React from 'react';
import { useRecoilState } from 'recoil';
import MenuState from 'store/menu';

const Header = () => {
  const [menuList] = useRecoilState(MenuState);

  return (
    <>
      <header className="">
        <div className="topbar">
          <div className="topbar__content">
            <div>Logo</div>
            <nav>
              <a href="/">menu1</a>
              <a href="/">menu2</a>
              <a href="/">menu3</a>
            </nav>
          </div>
        </div>
        <div className="navigator">
          <div className="navigator__content">
            {menuList.map(menu => {
              return <div key={menu.id}>{menu.name}</div>;
            })}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
