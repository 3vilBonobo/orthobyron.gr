import Salon1 from '../../assets/salon1.jpg';
import { intro } from '../../data/data';
import {
  StyledHero,
  StyledHeroTitle,
  StyledHeroImg,
  StyledHeroBtn,
  StyledIntroSection,
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
    </>
  );
};

export default Home;
