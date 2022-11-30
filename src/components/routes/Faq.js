import { patients } from '../../data/data';
import FaqAccordion from '../FaqAccordion';
import {
  StyledFaqMainSection,
  StyledFaqTitle,
  StyledFaqContainer,
  StyledFaqInfo,
  StyledFaqImageContainer,
  StyledFaqImage,
} from '../styles/Faq.style';

const Faq = () => {
  return (
    <StyledFaqMainSection>
      <StyledFaqTitle>Συχνές Ερωτήσεις</StyledFaqTitle>
      <StyledFaqContainer>
        <StyledFaqInfo>
          <FaqAccordion patients={patients} />
        </StyledFaqInfo>
        <StyledFaqImageContainer></StyledFaqImageContainer>
        <StyledFaqImage src={patients.faq.image} />
      </StyledFaqContainer>
    </StyledFaqMainSection>
  );
};

export default Faq;
