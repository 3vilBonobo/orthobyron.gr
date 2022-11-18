import React from 'react';
import Navbar from './Navbar/Navbar';
import BannerTop from '../assets/orizontio2.jpg';
import BannerPdf from '../assets/bannerPdf.pdf';
import Logo from '../assets/logo.png';
import { contact } from '../data/data';
import {
  StyledHeader,
  StyledBanner,
  StyledBannerTop,
  StyledBannerLink,
  StyledTopHeaderSection,
  StyledContactHeaderSection,
  StyledBottomHeaderSection,
  StyledPhone,
  StyledEmail,
  StyledCTA,
  StyledLogo,
  StyledNavbarSection,
} from './styles/Header.style';
import { Link } from 'react-router-dom';

const Header = ({ isVisible }) => {
  return (
    <StyledHeader>
      {isVisible && (
        <StyledTopHeaderSection>
          <StyledBanner>
            <StyledBannerLink href={BannerPdf} target="_blank" rel="noreferrer">
              <StyledBannerTop src={BannerTop} alt="EFKA Banner" />
            </StyledBannerLink>
          </StyledBanner>

          <StyledContactHeaderSection>
            <StyledPhone href={`tel:${contact.phone}`}>
              {`Τηλ: ${contact.phone}`}
            </StyledPhone>
            <StyledEmail href={`mailto:${contact.mail}`}>
              {`email: ${contact.mail}`}
            </StyledEmail>
            <StyledCTA to="contact">ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</StyledCTA>
          </StyledContactHeaderSection>
        </StyledTopHeaderSection>
      )}
      <StyledBottomHeaderSection>
        <Link to="/">
          <StyledLogo src={Logo} alt="logo" />
        </Link>
        <StyledNavbarSection>
          <Navbar />
        </StyledNavbarSection>
      </StyledBottomHeaderSection>
    </StyledHeader>
  );
};

export default Header;
