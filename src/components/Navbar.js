import { useState } from 'react';
import { menuItems } from '../data/data';
import MenuItems from './MenuItems';
import {
  StyledNavbarContainer,
  StyledBurgerIcon,
  StyledNavbarMenu,
  StyledCloseIcon,
} from './Styles/Navbar.style';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <StyledBurgerIcon onClick={showSidebar} />
      <StyledNavbarContainer sidebar={sidebar}>
        <StyledCloseIcon onClick={showSidebar} />
        <StyledNavbarMenu className="menus">
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </StyledNavbarMenu>
      </StyledNavbarContainer>
    </div>
  );
};

export default Navbar;
