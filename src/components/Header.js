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
  StyledMidHeader,
  StyledPhone,
  StyledCTA,
  StyledLogo,
  StyledNavbarSection,
} from './styles/Header.style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <StyledBanner>
        <StyledBannerLink href={BannerPdf} target="_blank" rel="noreferrer">
          <StyledBannerTop src={BannerTop} alt="EFKA Banner" />
        </StyledBannerLink>
      </StyledBanner>

      <StyledMidHeader>
        <StyledPhone href={`tel:${contact.phone}`}>{contact.phone}</StyledPhone>
        <StyledCTA to="contact">ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</StyledCTA>
        <Link to="/">
          <StyledLogo src={Logo} alt="logo" />
        </Link>
        <StyledNavbarSection>
          <Navbar />
        </StyledNavbarSection>
      </StyledMidHeader>
    </StyledHeader>
  );
};

export default Header;
