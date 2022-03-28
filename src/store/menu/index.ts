import { atom } from 'recoil';
export interface ISubMenuTypes {
  id: string;
  name: string;
  parent: string;
}

export interface IMenuTypes {
  id: string;
  name: string;
  subMenuList: ISubMenuTypes[];
}

const MenuState = atom<IMenuTypes[]>({
  key: 'menuState',
  default: [
    {
      id: 'test',
      name: 'test',
      subMenuList: [],
    },
  ],
});

export default MenuState;
