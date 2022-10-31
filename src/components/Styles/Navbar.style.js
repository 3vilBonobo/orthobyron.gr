import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

export const StyledBurgerIcon = styled(BiMenu)`
  position: absolute;
  color: #3579a0;
  font-size: 3rem;
  top: 8.3rem;
  right: 3rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(30, 52, 94);
  color: #ffffff;
  font-size: 1.2rem;
  list-style: none;
  position: fixed;
  top: 0;
  padding: 3rem 0 2rem 0.5rem;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 0.5s;
  @media screen and (min-width: 768px) {
    width: 60%;
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

export const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  &:hover {
    background-color: hsl(202, 38%, 37%);
  }
  @media screen and (min-width: 768px) {
    margin-right: 2rem;
  }
`;

export const StyledNavButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  width: 100%;
  text-align: left;
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem 0.5rem 0.5rem;

  &:hover {
    background-color: hsl(202, 38%, 37%);
  }
  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    text-align: center;
  }
`;

export const StyledSubmenu = styled.ul`
  list-style: none;
  display: ${({ submenu }) => (submenu ? 'flex' : 'none')};
  flex-direction: column;
  @media screen and (min-width: 768px) {
    position: absolute;
    min-width: 170px;
  }
`;

export const StyledSubmenuLink = styled(Link)`
  padding: 0.5rem 1rem 0.5rem 3rem;
  font-size: 1.12rem;
  display: block;
  width: 100%;
  text-decoration: none;
  background-color: #3579a0;
  color: #fff;
  &:hover {
    background-color: hsl(202, 38%, 37%);
  }
  @media screen and (min-width: 768px) {
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
`;
