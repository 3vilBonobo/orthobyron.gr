import {
  StyledFooter,
  StyledFooterTopSection,
  StyledFooterStartSection,
  StyledFooterLinkLogo,
  StyledFooterLogo,
  StyledFooterHours,
  StyledFooterAddressContainer,
  StyledFooterAddress,
  StyledFooterSocial,
  StyledFooterLinkBanner,
  StyledFooterBanner,
  StyledFooterSeparator,
  StyledFooterAddressTitle,
  StyledFooterAddressText,
  StyledFooterAddressPhone,
  StyledFooterAddressEmail,
} from './styles/Footer.style';
import WorkHours from '../components/WorkHours';
import Attribution from './Attribution';
import Logo from '../assets/logo.png';
import Banner from '../assets/espaEKT.jpg';
import BannerPdf from '../assets/bannerPdf.pdf';
import { addresses } from '../data/data';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTopSection>
        <StyledFooterStartSection>
          <StyledFooterLinkLogo>
            <StyledFooterLogo src={Logo} />
          </StyledFooterLinkLogo>
          <StyledFooterLinkBanner
            href={BannerPdf}
            target="_blank"
            rel="noreferrer"
          >
            <StyledFooterBanner src={Banner} />
          </StyledFooterLinkBanner>
        </StyledFooterStartSection>
        <StyledFooterHours>
          <WorkHours />
        </StyledFooterHours>
        <StyledFooterAddressContainer>
          {addresses.map((item, index) => {
            return (
              <StyledFooterAddress key={index}>
                <StyledFooterAddressTitle>
                  {item.title}
                </StyledFooterAddressTitle>
                <StyledFooterAddressText>
                  {item.address}
                </StyledFooterAddressText>
                <StyledFooterAddressPhone href={`tel:${item.phone}`}>
                  {item.phone}
                </StyledFooterAddressPhone>
                <StyledFooterAddressEmail href={`mailto:${item.email}`}>
                  {item.email}
                </StyledFooterAddressEmail>
              </StyledFooterAddress>
            );
          })}
        </StyledFooterAddressContainer>
        <StyledFooterSocial></StyledFooterSocial>
      </StyledFooterTopSection>
      <StyledFooterSeparator />
      <Attribution />
    </StyledFooter>
  );
};

export default Footer;
