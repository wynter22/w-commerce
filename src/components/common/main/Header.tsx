import React from 'react';
import { useRecoilState } from 'recoil';
import MenuState from 'store/menu';

const Header = () => {
  const [menuList] = useRecoilState(MenuState);

  return (
    <>
      <header className="">
        {menuList.map(menu => (
          <div key={menu.id}>{menu.name}</div>
        ))}
      </header>
    </>
  );
};

export default Header;
