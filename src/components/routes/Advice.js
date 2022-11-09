import { patients } from '../../data/data';
import {
  StyledAdviceMainSection,
  StyledAdviceTitle,
  StyledAdviceWrapper,
  StyledAdviceInfo,
  StyledAdviceImage,
} from '../styles/Advice.style';

const Advice = () => {
  return (
    <StyledAdviceMainSection>
      <StyledAdviceTitle
        dangerouslySetInnerHTML={{
          __html: patients.advice.title,
        }}
      ></StyledAdviceTitle>
      <StyledAdviceWrapper>
        <StyledAdviceInfo
          dangerouslySetInnerHTML={{
            __html: patients.advice.info,
          }}
        ></StyledAdviceInfo>
        <StyledAdviceImage src={patients.advice.image} />
      </StyledAdviceWrapper>
    </StyledAdviceMainSection>
  );
};

export default Advice;
