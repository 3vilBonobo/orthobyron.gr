import styled from 'styled-components';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

export const StyledSocialsHomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StyledSocialLink = styled.a`
  text-decoration: none;
  padding: 1.5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

export const StyledFacebookHome = styled(BsFacebook)`
  color: ${(props) => props.theme.white};
  transition: color ease-in-out 0.5s;
  font-size: 3rem;
  :hover,
  :active,
  :focus {
    color: ${(props) => props.theme.darkBlue};
    transition: color ease-in-out 0.5s;
  }
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const StyledMailHome = styled(MdMail)`
  color: ${(props) => props.theme.white};
  font-size: 4rem;
  transition: color ease-in-out 0.5s;
  font-size: 3rem;
  :hover,
  :active,
  :focus {
    color: ${(props) => props.theme.darkBlue};
    transition: color ease-in-out 0.4s;
  }
  @media screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;
export const StyledPhoneHome = styled(BsFillTelephoneFill)`
  color: ${(props) => props.theme.white};
  font-size: 3rem;
  transition: color ease-in-out 0.4s;
  font-size: 3rem;
  :hover,
  :active,
  :focus {
    color: ${(props) => props.theme.darkBlue};
    transition: color ease-in-out 0.4s;
  }
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;
