// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import {
  StyledBurgerIcon,
  StyledCloseIcon,
  StyledMenuItems,
  StyledNavbarContainer,
} from '../styles/Navbar.style';
import { menuItemsData } from '../../data/data';
import MenuItem from './MenuItem';
import { useState } from 'react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => {
    setSidebar(!sidebar);
  };
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   setSidebar(false);
  // }, [pathname]);

  return (
    <>
      <StyledBurgerIcon onClick={ShowSidebar} />
      <StyledNavbarContainer sidebar={sidebar}>
        <StyledCloseIcon onClick={ShowSidebar} />
        <StyledMenuItems>
          {menuItemsData.map((items, index) => {
            return (
              <MenuItem ShowSidebar={ShowSidebar} key={index} items={items} />
            );
          })}
        </StyledMenuItems>
      </StyledNavbarContainer>
    </>
  );
};

export default Navbar;
