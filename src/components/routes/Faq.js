import { patients } from '../../data/data';
import FaqAccordion from '../FaqAccordion';
import {
  StyledFaqMainSection,
  StyledFaqTitle,
  StyledFaqContainer,
  StyledFaqInfo,
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
        <StyledFaqImage src={patients.faq.image} />
      </StyledFaqContainer>
    </StyledFaqMainSection>
  );
};

export default Faq;
