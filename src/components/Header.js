import React from 'react';
import Navbar from './Navbar/Navbar';
import BannerTop from '../assets/orizontio2.jpg';
import BannerPdf from '../assets/bannerPdf.pdf';
import Logo from '../assets/logo.png';
import { contact } from '../data/data';
import {
  StyledHeader,
  StyledBannerTop,
  StyledMidHeader,
  StyledPhone,
  StyledCTA,
  StyledLogo,
} from './styles/Header.style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <a href={BannerPdf} target="_blank" rel="noreferrer">
        <StyledBannerTop src={BannerTop} alt="EFKA Banner" />
      </a>
      <StyledMidHeader>
        <StyledPhone href={`tel:${contact.phone}`}>{contact.phone}</StyledPhone>
        <StyledCTA to="contact">ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ</StyledCTA>
      </StyledMidHeader>
      <Link to="/">
        <StyledLogo src={Logo} alt="logo" />
      </Link>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
