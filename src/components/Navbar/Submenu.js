import { StyledSubmenu, StyledSubmenuLink } from '../styles/Navbar.style';
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
        <li key={index} className="menu-items">
          <StyledSubmenuLink to={submenu.url} onClick={() => showSidebar()}>
            {submenu.title}
          </StyledSubmenuLink>
        </li>
      ))}
    </StyledSubmenu>
  );
};

export default Submenu;
