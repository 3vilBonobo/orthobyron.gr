import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.darkBlue};
  position: relative;
  top: 130px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledFooterTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledFooterStartSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;
export const StyledFooterLinkLogo = styled(Link)``;

export const StyledFooterLogo = styled.img``;

export const StyledFooterHours = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.white};
`;

export const StyledFooterAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledFooterAddress = styled.div`
  color: ${(props) => props.theme.white};
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 0.5rem;
  line-height: 1.7rem;
`;

export const StyledFooterAddressTitle = styled.h3`
  padding-bottom: 1rem;
`;
export const StyledFooterAddressText = styled.p``;
export const StyledFooterAddressPhone = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.brightCyan};
`;
export const StyledFooterAddressEmail = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.brightCyan};
`;

export const StyledFooterSocial = styled.div``;

export const StyledFooterLinkBanner = styled.a`
  text-decoration: none;
`;
export const StyledFooterBanner = styled.img``;

export const StyledFooterSeparator = styled.hr`
  border: 0.5px solid ${(props) => props.theme.navyBlue};
  width: 100%;
`;

export const StyledAttribution = styled.div`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;

export const StyledAttrLinks = styled.a`
  color: ${(props) => props.theme.brightCyan};
  text-decoration: none;
`;
