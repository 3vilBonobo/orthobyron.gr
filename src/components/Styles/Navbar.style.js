import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';

export const StyledBurgerIcon = styled(BiMenu)`
  position: absolute;
  display: flex;
  color: ${(props) => props.theme.navyBlue};
  font-size: 3.8rem;
  top: 0.8rem;
  right: 2.5rem;
  z-index: 8;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledCloseIcon = styled(MdClose)`
  position: absolute;
  color: ${(props) => props.theme.white};
  font-size: 2.5rem;
  top: 1.9rem;
  right: 1.9rem;
  margin-right: 1rem;
  z-index: 10;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledNavbarContainer = styled.nav`
  z-index: 9;
  height: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  font-size: 1.4rem;
  list-style: none;
  position: fixed;
  top: 0;
  padding: 1rem 0 1rem 0.5rem;
  left: ${({ sidebar }) => (sidebar ? '0' : '-120%')};
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    position: relative;
    height: fit-content;
    font-size: 1.2rem;
    width: 100%;
    left: 0;
    transition: 0s;
  }
`;

export const StyledMenuItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 80px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    padding-top: 0;
  }
`;

export const StyledMenuArrow = styled(AiFillCaretDown)`
  margin-left: 1rem;
  font-size: 0.97rem;
  padding-top: 0.1rem;
`;

export const StyledLinkAndMenuContainer = styled.ul`
  max-width: 100%;
  @media screen and (min-width: 768px) {
    width: fit-content;
  }
`;

export const StyledMenuLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: block;
  color: ${(props) => props.theme.white};
  padding: 1.3rem 1rem;
  text-align: center;
  transition: 0.3s background-color;
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.lightBlue};
  }
  @media screen and (min-width: 768px) {
    border-radius: 10px;
    padding: 0.7rem 2rem;
    width: auto;
  }
`;

export const StyledNavButton = styled.button`
  font-size: 1.4rem;
  color: ${(props) => props.theme.white};
  width: 100vw;
  text-align: center;
  background-color: ${({ submenu }) => (submenu ? `#3579a0` : 'inherit')};
  border: none;
  cursor: pointer;
  padding: 1.3rem 1rem;
  transition: 0.3s background-color;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.lightBlue};
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    margin-right: 2rem;
    border-radius: 10px 10px 0 0;
    padding: 0.78rem 1rem;
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
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1.2rem;
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.lightBlue};
  transition: 0.3s background-color;
  color: ${(props) => props.theme.white};

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.brightCyan};
  }

  @media screen and (min-width: 768px) {
    padding: 0.5rem 1rem 1rem 0.5rem;
    font-size: 1.12rem;
    &:last-child {
      border-radius: 0 0 10px 10px;
      padding-bottom: 1rem;
    }
  }
`;
export const StyledSubmenuLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
  padding-left: 1rem;
`;
