import {
  StyledMenuArrow,
  StyledMenuLink,
  StyledNavButton,
} from '../styles/Navbar.style';

import Submenu from './Submenu';
import { useState, useEffect, useRef } from 'react';

const MenuItem = ({ items, showSidebar }) => {
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

  const btnRef = useRef();

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
          <ul>
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
              submenu={submenu}
              showSidebar={showSidebar}
              submenus={items.submenu}
              showSubmenu={showSubmenu}
              hideSubmenu={hideSubmenu}
            />
          </ul>
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
