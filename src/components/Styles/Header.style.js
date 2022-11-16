import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    background-color: rgba(30, 52, 94);
  }
`;
export const StyledBanner = styled.div`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 50%;
    min-width: 400px;
    align-self: flex-start;
  }
`;

export const StyledBannerLink = styled.a`
  text-decoration: none;
`;

export const StyledBannerTop = styled.img`
  width: 100%;
`;

export const StyledTopHeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledContactHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const StyledBottomHeaderSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;
`;

export const StyledPhone = styled.a`
  width: 350px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  padding: 1rem;
  color: #3579a0;
  @media screen and (min-width: 768px) {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const StyledEmail = styled.a`
  width: 350px;
  text-align: center;
  display: none;
  font-weight: 600;
  text-decoration: none;
  padding: 1rem;
  color: #3579a0;

  @media screen and (min-width: 768px) {
    display: flex;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const StyledCTA = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  padding: 1.2rem 1.2rem 2.4rem 1.2rem;
  background-color: #3579a0;
  color: #fff;
  &:hover {
    background-color: #3399ff;
  }
  @media screen and (min-width: 768px) {
    height: 3rem;
    align-self: center;
    width: 250px;
    border-radius: 10px;
  }
`;

export const StyledLogo = styled.img`
  width: 60%;
  min-width: 250px;
  height: auto;

  @media screen and (min-width: 768px) {
    top: 0;
    width: 100%;
    height: auto;
  }
`;

export const StyledNavbarSection = styled.div`
  grid-area: navbar;
`;
