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
  StyledHero,
  StyledHeroTitle,
  StyledHeroImg,
  StyledHeroBtn,
  StyledIntroSection,
  StyledReviewsSection,
  StyledTreatmentsSection,
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
import PersonHome from '../PersonHome';
import SocialMediaHome from '../SocialMediaHome';

const Home = () => {
  return (
    <>
      <StyledHero>
        <StyledHeroTitle>ΟΡΘΟΔΟΝΤΙΚΑ ΙΑΤΡΕΙΑ</StyledHeroTitle>
        <StyledHeroBtn href={`tel:${contact.phone}`}>210 7659556</StyledHeroBtn>
        <StyledHeroImg src={Salon1} alt="" />
      </StyledHero>

      <StyledIntroSection>{intro}</StyledIntroSection>

      <StyledReviewsSection>
        <ReviewsCarousel />
      </StyledReviewsSection>

      <StyledTreatmentsSection>
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
    </>
  );
};

export default Home;
