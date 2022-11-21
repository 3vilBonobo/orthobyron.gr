import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  @media screen and (min-width: 768px) {
    background-color: rgba(30, 52, 94);
  }
`;

export const StyledBanner = styled.div`
  width: 100%;
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
  min-width: 200px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  padding: 1rem;
  color: #3579a0;
  @media screen and (min-width: 768px) {
    max-width: 350px;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    transition: 0.5s background-color;
    width: fit-content;
    padding-inline: 2rem;
    border-radius: 10px;
    margin-left: 2rem;
    &:hover {
      background-color: #3579a0;
    }
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
    display: inline-block;
    width: fit-content;
    text-align: center;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    transition: 0.5s background-color;
    border-radius: 10px;
    padding-inline: 2rem;
    &:hover {
      background-color: #3579a0;
    }
  }
`;

export const StyledCTA = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  padding: 1.2rem;
  background-color: #3579a0;
  color: #fff;
  transition: 0.5s background-color;

  &:hover {
    background-color: #3399ff;
  }
  @media screen and (min-width: 768px) {
    height: 3rem;
    align-self: center;
    width: 250px;
    border-radius: 10px;
    padding: 1.2rem 1.2rem 2.4rem 1.2rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  height: fit-content;
`;
