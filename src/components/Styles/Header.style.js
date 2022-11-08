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
    width: 40%;
  }
`;

export const StyledBannerLink = styled.a`
  text-decoration: none;
`;

export const StyledBannerTop = styled.img`
  width: 100%;
`;

export const StyledMidHeader = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    'phone phone cta cta'
    'logo logo logo navbar';
  width: 100%;
  color: #fff;
  @media screen and (min-width: 768px) {
    grid-template-areas:
      'logo logo logo phone'
      'logo navbar navbar cta';
  }
`;

export const StyledPhone = styled.a`
  grid-area: phone;
  width: 350px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  padding: 1rem;
  color: #3579a0;
`;
export const StyledCTA = styled(Link)`
  grid-area: cta;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-weight: 600;
  padding: 1rem;
  background-color: #3579a0;
  color: #fff;
  @media screen and (min-width: 768px) {
    height: 3rem;
    align-self: center;
    width: 250px;
  }
`;

export const StyledLogo = styled.img`
  grid-area: logo;
  width: 60%;
  height: auto;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    width: 60%;
    height: auto;
  }
`;

export const StyledNavbarSection = styled.div`
  grid-area: navbar;
`;
