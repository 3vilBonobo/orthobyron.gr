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
  padding: 3rem;
`;

export const StyledFacebookHome = styled(BsFacebook)`
  font-size: 4rem;
  color: ${(props) => props.theme.white};
`;

export const StyledMailHome = styled(MdMail)`
  font-size: 5rem;
  color: ${(props) => props.theme.white};
`;
export const StyledPhoneHome = styled(BsFillTelephoneFill)`
  font-size: 4rem;
  color: ${(props) => props.theme.white};
`;
