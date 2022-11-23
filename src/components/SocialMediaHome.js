import { contact } from '../data/data';
import {
  StyledSocialsHomeWrapper,
  StyledSocialLink,
  StyledFacebookHome,
  StyledMailHome,
  StyledPhoneHome,
} from './styles/SocialMedia.style';

const SocialMediaHome = () => {
  return (
    <StyledSocialsHomeWrapper>
      <StyledSocialLink href={contact.facebook} target="_blank">
        <StyledFacebookHome />
      </StyledSocialLink>
      <StyledSocialLink href={`mailto:${contact.mail}`} target="_blank">
        <StyledMailHome />
      </StyledSocialLink>
      <StyledSocialLink href={`tel:${contact.phone}`} target="_blank">
        <StyledPhoneHome />
      </StyledSocialLink>
    </StyledSocialsHomeWrapper>
  );
};

export default SocialMediaHome;
