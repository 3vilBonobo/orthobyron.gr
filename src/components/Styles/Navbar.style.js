import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';

export const StyledBurgerIcon = styled(BiMenu)`
  position: absolute;
  display: flex;
  color: #2d6586;
  font-size: 3.8rem;
  top: 0.8rem;
  right: 3.5rem;
  z-index: 8;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledCloseIcon = styled(MdClose)`
  position: absolute;
  color: #fff;
  font-size: 2rem;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledNavbarContainer = styled.nav`
  z-index: 9;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(30, 52, 94);
  color: #ffffff;
  font-size: 1.2rem;
  list-style: none;
  position: fixed;
  top: 0;
  padding: 1rem 0 1rem 0.5rem;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    position: relative;
    height: fit-content;
    width: 100%;
    left: 0;
    transition: 0s;
  }
`;

export const StyledMenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
  }
`;
export const StyledMenuArrow = styled(AiFillCaretDown)`
  margin-left: 1rem;
  font-size: 0.97rem;
  padding-top: 0.1rem;
`;

export const StyledLinkAndMenuContainer = styled.ul`
  width: fit-content;
`;

export const StyledMenuLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: #fff;
  padding: 0.7rem 2rem;
  transition: 0.3s background-color;
  &:hover {
    background-color: #3579a0;
  }
  @media screen and (min-width: 768px) {
    border-radius: 10px;
  }
`;

export const StyledNavButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  width: 100%;
  text-align: left;
  background-color: ${({ submenu }) => (submenu ? '#3579a0' : 'inherit')};
  border: none;
  cursor: pointer;
  padding: 0.78rem 1rem;
  transition: 0.3s background-color;

  &:hover {
    background-color: #3579a0;
  }
  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    text-align: center;
    border-radius: 10px 10px 0 0;
  }
`;

export const StyledSubmenu = styled.ul`
  list-style: none;
  display: ${({ submenu }) => (submenu ? 'flex' : 'none')};
  flex-direction: column;

  @media screen and (min-width: 768px) {
    position: absolute;
    width: ${({ width }) => `${width}px`};
  }
`;
export const StyledSubmenuItem = styled.li`
  padding: 0.5rem 1rem 0.5rem 3rem;
  font-size: 1.12rem;
  display: block;
  width: 100%;
  background-color: #3579a0;
  transition: 0.3s background-color;
  color: #fff;

  &:hover {
    background-color: #3399ff;
  }

  @media screen and (min-width: 768px) {
    padding: 0.5rem 1rem 1rem 0.5rem;

    &:last-child {
      border-radius: 0 0 10px 10px;
      padding-bottom: 1rem;
    }
  }
`;
export const StyledSubmenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding-left: 1rem;
`;
