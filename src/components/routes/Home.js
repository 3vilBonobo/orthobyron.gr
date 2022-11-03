import Salon1 from '../../assets/salon1.jpg';
import Treatment from '../Treatment';
import { intro, addresses } from '../../data/data';
import ReviewsCarousel from '../ReviewsCarousel';
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
  StyledWorkHoursSection,
  StyledMapSection,
  StyledMapWrapper,
} from '../styles/Home.styles';

const Home = () => {
  return (
    <>
      <StyledHero>
        <StyledHeroTitle>ΟΡΘΟΔΟΝΤΙΚΑ ΙΑΤΡΕΙΑ</StyledHeroTitle>
        <StyledHeroBtn to="contact">210 7659556</StyledHeroBtn>
        <StyledHeroImg src={Salon1} alt="" />
      </StyledHero>

      <StyledIntroSection>{intro}</StyledIntroSection>

      <StyledReviewsSection>
        <ReviewsCarousel />
      </StyledReviewsSection>

      <StyledTreatmentsSection>
        <Treatment />
      </StyledTreatmentsSection>
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
