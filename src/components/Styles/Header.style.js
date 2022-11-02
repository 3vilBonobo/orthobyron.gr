import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    background-color: rgba(30, 52, 94);
    display: flex;
  }
`;

export const StyledBannerTop = styled.img`
  width: 100%;
`;

export const StyledMidHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: space-around;
`;

export const StyledPhone = styled.p`
  width: 350px;
  text-align: center;
  display: inline-block;
  font-weight: 600;
  padding: 1rem;
  color: #3579a0;
`;
export const StyledCTA = styled(Link)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 100%;
  font-weight: 600;
  padding: 1rem;
  background-color: #3579a0;
  color: #fff;
`;

export const StyledLogo = styled.img`
  width: 60%;
  height: auto;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    width: 20%;
    height: auto;
  }
`;
