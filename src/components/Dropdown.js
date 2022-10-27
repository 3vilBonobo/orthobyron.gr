import { StyledDropdownMenuItem, StyledMenuLink } from './Styles/Navbar.style';

const Dropdown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <StyledDropdownMenuItem key={index} className="menu-items">
          <StyledMenuLink href={submenu.url}>{submenu.title}</StyledMenuLink>
        </StyledDropdownMenuItem>
      ))}
    </ul>
  );
};

export default Dropdown;
