import {
  StyledDropdownBtn,
  StyledMenuItem,
  StyledMenuLink,
} from './Styles/Navbar.style';
import Dropdown from './Dropdown';

const MenuItems = ({ items }) => {
  return (
    <StyledMenuItem className="menu-items">
      {items.submenu ? (
        <>
          <StyledDropdownBtn type="button">{items.title}</StyledDropdownBtn>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <StyledMenuLink href={items.url}>{items.title}</StyledMenuLink>
      )}
    </StyledMenuItem>
  );
};
export default MenuItems;
