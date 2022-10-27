import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

export const StyledNavbarContainer = styled.div`
  background-color: #1e345e;
  width: 100%;
  position: relative;
  font-size: 1rem;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const StyledBurgerIcon = styled(FiMenu)`
  position: absolute;
  color: #fff;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
`;
export const StyledCloseIcon = styled(IoMdClose)`
  position: absolute;
  color: #fff;
  right: 1rem;
  top: 1rem;
  font-size: 2.2rem;
`;

export const StyledNavbarMenu = styled.nav`
  color: #fff;
  padding-top: 3rem;
`;

export const StyledMenuItem = styled.li`
  list-style: none;
  color: #fff;
  &:first-child,
  &:last-child {
    padding: 1rem 0;
  }
  &:hover {
    background-color: #fff;
  }
`;

export const StyledDropdownMenuItem = styled.li`
  list-style: none;
  background-color: #3579a0;
  color: #fff;
  padding: 1rem 0 0.5rem 2rem;
  &:last-child {
    padding-bottom: 1rem;
  }
`;

export const StyledMenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding-left: 1rem;
  display: block;
`;

export const StyledDropdownBtn = styled.button`
  font-size: 1rem;
  background-color: #1e345e;
  width: 100%;
  text-align: left;
  color: #fff;
  padding: 1rem 0 1rem 1rem;
  border: none;
  cursor: pointer;
`;
