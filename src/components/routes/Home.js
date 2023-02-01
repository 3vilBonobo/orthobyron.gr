import Salon1 from '../../assets/salon1.jpg';
import Treatment from '../Treatment';
import { contact, intro, addresses, clinicsImages } from '../../data/data';
import ReviewsCarousel from '../ReviewsCarousel';
import CTAButton from '../CTAButton';
import { StyledAppointmentBtn } from '../styles/CTAButton.styles';
import ClinicsCarousel from '../ClinicsCarousel';
import WorkHours from '../WorkHours';
import Map from '../Map';
import {
  StyledMain,
  StyledHero,
  StyledHeroTitle,
  StyledHeroImg,
  StyledHeroBtn,
  StyledIntroSection,
  StyledIntroContainer,
  StyledReviewsSection,
  StyledTreatmentsSection,
  StyledTreatmentsTitle,
  StyledInfoText,
  StyledCTASection,
  StyledClinicsSection,
  StyledClinicsTitle,
  StyledClinicsCarousels,
  StyledWorkHoursSection,
  StyledMapSection,
  StyledMapWrapper,
  StyledPersonnelSection,
  StyledSocialsSection,
} from '../styles/Home.styles';
import { StyledSVGContainer } from '../styles/logoSVG.style';
import PersonHome from '../PersonHome';
import SocialMediaHome from '../SocialMediaHome';
import { motion } from 'framer-motion';

const Home = () => {
  const logoVariants = {};

  return (
    <StyledMain>
      <StyledHero>
        <StyledSVGContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            viewBox="0 0 142 142"
            fill="#fff"
            stroke="gray"
            stroke-width="0.3px"
          >
            <path d="M122.576 66.978c.034-.456.068-.914.068-1.371 0-1.066-.117-2.308-.345-3.337-.503-2.264-1.467-4.451-3.104-6.137-.643-.663-1.589-1.021-2.137-1.765-.266-.36.837.326 1.233.537.896.479 1.847 1.186 2.513 1.946 2.505 2.856 2.68 6.611 1.772 10.127Z" />
            <path d="M22.298 58.708c-.381.254-.762.509-1.123.791-.839.657-1.745 1.515-2.414 2.329-1.473 1.791-2.601 3.898-2.921 6.226-.126.915.176 1.881-.072 2.771-.12.431-.259-.861-.337-1.302-.176-1.001-.205-2.186-.017-3.179.706-3.732 3.555-6.184 6.884-7.636Z" />
            <path d="M18.241 65.02s17.848 14.076 41.573 13.205l.145 6.385.798 1.306 5.442.072.87-1.306-.217-6.239h3.845l.145 6.094.798 1.524h5.369l.871-1.451-.073-6.24s26.668-2.578 42.558-18.138c0 0-23.217 14.695-42.734 13.969l-.145-8.198-.726-1.016-5.151-.073-.726.726-.217 8.852h-3.918l-.145-8.852-1.016-.798h-5.079l-.58.798-.145 8.779s-12.556 3.114-41.542-9.399Z" />
            <path d="M112.305 40.62s-2.61-7.902-11.853-11.599c0 0-9.243-1.45-14.789 3.89 0 0-7.661 9.352-24.916 6.065 0 0 8.378 5.646 24.275-.382.986-.374 3.96-1.954 5.149-3.147 0 0 4.412-3.419 10.631-2.017 0 0 5.735 2.055 7.48 10.086.958 4.41.714 10.623-2.345 19.288l4.93-.822s3.698-9.654 1.438-21.362Z" />
            <path d="M31.374 74.512s3.081 14.79 12.735 33.071c0 0 8.217 15.406 16.022 14.173 0 0 3.081 1.233 2.465-5.546 0 0-2.102-21.063 6.984-22.8 0 0 3.891-.448 5.752 10.887 0 0 1.063 5.733-.109 14.365 0 0-1.609 5.908 7.286 2.466 0 0 8.227-4.783 16.445-23.815 0 0 5.956-16.228 9.654-26.293l-3.903.822s-8.083 24.561-15.393 34.762c0 0-6.586 10.537-9.872 11.77 0 0-1.101-15.904-2.95-20.628 0 0-2.611-7.54-7.188-6.777 0 0-4.095-.992-7.515 7.866 0 0-1.982 2.357-1.885 19.756 0 0-8.024.713-16.856-21.882 0 0-7.564-17.678-7.358-20.759l-4.314-1.438Z" />
            <path d="M74.715 44.933c-16.523 5.478-22.936-16.605-38-18.111 0 0-10.271.241-11.709 10.922 0 0-2.259 7.6-.411 18.076 0 0 2.671 11.092 4.109 11.503l3.697.822s-7.395-16.228-2.465-28.347c0 0 4.314-12.53 14.173-4.519 0 0 8.011 6.984 12.325 8.833 0 0 10.476 6.778 18.281.821Z" />
          </svg>
        </StyledSVGContainer>

        <StyledHeroTitle to={'/clinics'}>ΟΡΘΟΔΟΝΤΙΚΑ ΙΑΤΡΕΙΑ</StyledHeroTitle>
        <StyledHeroBtn href={`tel:${contact.phone}`}>210 7659556</StyledHeroBtn>
        <StyledHeroImg src={Salon1} alt="" />
      </StyledHero>

      <StyledIntroSection>
        <StyledIntroContainer>{intro}</StyledIntroContainer>
      </StyledIntroSection>

      <StyledReviewsSection>
        <ReviewsCarousel />
      </StyledReviewsSection>

      <StyledTreatmentsSection>
        <StyledTreatmentsTitle>ΘΕΡΑΠΕΙΕΣ</StyledTreatmentsTitle>
        <Treatment />
      </StyledTreatmentsSection>
      <StyledCTASection>
        <StyledInfoText>
          Τα ιατρεία μας προσφέρουν τις υπηρεσίες τους σε ενήλικες και παιδιά
        </StyledInfoText>

        <StyledAppointmentBtn to={'/contact'}>
          <CTAButton text={'ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ'} />
        </StyledAppointmentBtn>
      </StyledCTASection>
      <StyledClinicsSection>
        <StyledClinicsTitle>ΤΑ ΙΑΤΡΕΙΑ ΜΑΣ</StyledClinicsTitle>
        <StyledClinicsCarousels>
          <ClinicsCarousel clinic={clinicsImages.byron} />
          <ClinicsCarousel clinic={clinicsImages.piraeus} />
        </StyledClinicsCarousels>
      </StyledClinicsSection>

      <StyledPersonnelSection>
        <PersonHome />
      </StyledPersonnelSection>
      <StyledSocialsSection>
        <SocialMediaHome />
      </StyledSocialsSection>

      <StyledWorkHoursSection>
        <WorkHours />
      </StyledWorkHoursSection>

      <StyledMapSection>
        <h2>ΔΙΕΥΘΥΝΣΗ</h2>
        <StyledMapWrapper>
          {addresses.map((item, index) => {
            return <Map addresses={item} key={index} />;
          })}
        </StyledMapWrapper>
      </StyledMapSection>
    </StyledMain>
  );
};

export default Home;
