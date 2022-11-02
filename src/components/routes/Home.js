import Salon1 from '../../assets/salon1.jpg';
import Treatment from '../Treatment';
import { intro, treatments } from '../../data/data';
import ReviewsCarousel from '../ReviewsCarousel';
import {
  StyledHero,
  StyledHeroTitle,
  StyledHeroImg,
  StyledHeroBtn,
  StyledIntroSection,
  StyledReviewsSection,
  StyledTreatmentsSection,
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
        {treatments.map((item, index) => {
          return <Treatment key={index} treatments={item} />;
        })}
      </StyledTreatmentsSection>
    </>
  );
};

export default Home;
