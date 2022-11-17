import {
  StyledMenuArrow,
  StyledMenuLink,
  StyledNavButton,
  StyledLinkAndMenuContainer,
} from '../styles/Navbar.style';

import Submenu from './Submenu';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

const MenuItem = ({ items, showSidebar }) => {
  const [width, setWidth] = useState(0);

  const btnRef = useRef('');

  useLayoutEffect(() => {
    setWidth(btnRef.current.offsetWidth);
  }, []);

  const [submenu, setSubmenu] = useState(false);
  const toggleSubmenu = () => {
    setSubmenu(!submenu);
  };

  const hideSubmenu = () => {
    setSubmenu(false);
  };

  const showSubmenu = () => {
    setSubmenu(true);
  };

  useEffect(() => {
    const closeSubmenu = (e) => {
      let path = e.path || (e.composedPath && e.composedPath());
      if (path) {
        if (path[0] !== btnRef.current) {
          setSubmenu(false);
        }
      } else {
        if (e.composedPath[0] !== btnRef.current) {
          setSubmenu(false);
        }
      }
    };
    document.body.addEventListener('click', closeSubmenu);

    return () => document.body.removeEventListener('click', closeSubmenu);
  }, []);

  return (
    <>
      {items.submenu ? (
        <li>
          <StyledLinkAndMenuContainer>
            <StyledNavButton
              ref={btnRef}
              type="button"
              onClick={toggleSubmenu}
              onMouseEnter={showSubmenu}
              onMouseLeave={hideSubmenu}
              submenu={submenu}
            >
              {items.title}
              <StyledMenuArrow />
            </StyledNavButton>
            <Submenu
              width={width}
              submenu={submenu}
              showSidebar={showSidebar}
              submenus={items.submenu}
              showSubmenu={showSubmenu}
              hideSubmenu={hideSubmenu}
            />
          </StyledLinkAndMenuContainer>
        </li>
      ) : (
        <StyledMenuLink to={items.url} onClick={() => showSidebar()}>
          {items.title}
        </StyledMenuLink>
      )}
    </>
  );
};

export default MenuItem;
