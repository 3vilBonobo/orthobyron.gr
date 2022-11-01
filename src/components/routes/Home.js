import Salon1 from '../../assets/salon1.jpg';
import { intro, reviews } from '../../data/data';
import { BsStarFill } from 'react-icons/bs';
import {
  StyledHero,
  StyledHeroTitle,
  StyledHeroImg,
  StyledHeroBtn,
  StyledIntroSection,
  StyledReviewsSection,
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
        {/* I must include carousel functionality here */}

        <p>{reviews[0].review}</p>
        <div>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <div>
          <p>Πηγή: {reviews[0].source}</p>
        </div>
      </StyledReviewsSection>
    </>
  );
};

export default Home;
