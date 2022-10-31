import { StyledMenuLink, StyledNavButton } from '../styles/Navbar.style';
import Submenu from './Submenu';
import { useState } from 'react';

const MenuItem = ({ items, showSidebar }) => {
  const [submenu, setSubmenu] = useState(false);
  const showSubmenu = () => {
    setSubmenu(!submenu);
  };

  return (
    <>
      {items.submenu ? (
        <li>
          <ul>
            <StyledNavButton type="button" onClick={showSubmenu}>
              {items.title}
            </StyledNavButton>
            <Submenu
              submenu={submenu}
              showSidebar={showSidebar}
              submenus={items.submenu}
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
