import IntroVideo from '../../assets/orthobyron-vid.mp4';
import Treatment from '../Treatment';
import {
  contact,
  intro,
  addresses,
  heroImages,
  clinicsImages,
} from '../../data/data';
import HeroCarousel from '../HeroCarousel';
import ReviewsCarousel from '../ReviewsCarousel';
import CTAButton from '../CTAButton';
import { StyledAppointmentBtn } from '../styles/CTAButton.styles';
import YoutubeEmbed from '../YoutubeEmbed';
import ClinicsCarousel from '../ClinicsCarousel';
import WorkHours from '../WorkHours';
import Map from '../Map';
import {
  StyledMain,
  StyledHero,
  StyledHeroTitle,
  StyledHeroBtn,
  StyledIntroSection,
  StyledIntroContainer,
  StyledReviewsSection,
  StyledTreatmentsSection,
  StyledTreatmentsTitle,
  StyledInfoText,
  StyledCTASection,
  StyledVideoSection,
  StyledClinicsSection,
  StyledClinicsTitle,
  StyledClinicsCarousels,
  StyledWorkHoursSection,
  StyledMapSection,
  StyledMapHomeTitle,
  StyledMapWrapper,
  StyledPersonnelSection,
  StyledSocialsSection,
} from '../styles/Home.styles';
import PersonHome from '../PersonHome';
import SocialMediaHome from '../SocialMediaHome';

const Home = () => {
  return (
    <StyledMain>
      <StyledHero>
        <HeroCarousel clinic={heroImages} />
        <StyledHeroTitle to={'/clinics'}>ΟΡΘΟΔΟΝΤΙΚΑ ΙΑΤΡΕΙΑ</StyledHeroTitle>
        <StyledHeroBtn href={`tel:${contact.phone}`}>210 7659556</StyledHeroBtn>
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
      <StyledVideoSection>
        <YoutubeEmbed embedId="bQEEh-zqTGI" />
        <YoutubeEmbed embedId="LC5_1dMmPoY" />
      </StyledVideoSection>
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
        <StyledMapHomeTitle>ΔΙΕΥΘΥΝΣΗ</StyledMapHomeTitle>

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
