import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledBurgerIcon,
  StyledCloseIcon,
  StyledMenuItems,
  StyledNavbarContainer,
} from '../styles/Navbar.style';
import { menuItemsData } from '../../data/data';
import MenuItem from './MenuItem';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => {
    setSidebar(!sidebar);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    setSidebar(false);
  }, [pathname]);

  const menuRef = useRef();

  const handleOutsideClicks = (event) => {
    if (
      !sidebar &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setSidebar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClicks);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClicks);
    };
  });

  return (
    <>
      <StyledBurgerIcon onClick={ShowSidebar} />
      <StyledNavbarContainer sidebar={sidebar}>
        <StyledCloseIcon onClick={ShowSidebar} />
        <StyledMenuItems>
          {menuItemsData.map((items, index) => {
            return (
              <MenuItem
                ref={menuRef}
                ShowSidebar={ShowSidebar}
                key={index}
                items={items}
              />
            );
          })}
        </StyledMenuItems>
      </StyledNavbarContainer>
    </>
  );
};

export default Navbar;
