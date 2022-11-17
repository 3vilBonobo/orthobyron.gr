import {
  StyledSubmenu,
  StyledSubmenuItem,
  StyledSubmenuLink,
} from '../styles/Navbar.style';
const Submenu = ({
  submenus,
  submenu,
  showSidebar,
  showSubmenu,
  hideSubmenu,
  width,
}) => {
  return (
    <StyledSubmenu
      width={width}
      submenu={submenu}
      onMouseEnter={() => showSubmenu()}
      onMouseLeave={() => hideSubmenu()}
    >
      {submenus.map((submenu, index) => (
        <StyledSubmenuItem key={index} className="menu-items">
          <StyledSubmenuLink to={submenu.url} onClick={() => showSidebar()}>
            {submenu.title}
          </StyledSubmenuLink>
        </StyledSubmenuItem>
      ))}
    </StyledSubmenu>
  );
};

export default Submenu;
