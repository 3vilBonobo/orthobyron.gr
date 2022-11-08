import { patients } from '../../data/data';
import {
  StyledOralHygieneMainSection,
  StyledOralHygieneTitle,
  StyledOralHygieneWrapper,
  StyledOralHygieneImage,
  StyledOralHygieneInfoTop,
  StyledOralHygieneInfoBottom,
  StyledOralHygieneTextTop,
  StyledOralHygieneTextBottom,
} from '../styles/OralHygiene.style';

const OralHygiene = () => {
  return (
    <StyledOralHygieneMainSection>
      <StyledOralHygieneTitle>
        {patients.oralHygiene.title}
      </StyledOralHygieneTitle>
      <StyledOralHygieneWrapper>
        <StyledOralHygieneInfoTop>
          <StyledOralHygieneTextTop
            dangerouslySetInnerHTML={{
              __html: patients.oralHygiene.info_1,
            }}
          ></StyledOralHygieneTextTop>
          <StyledOralHygieneImage src={patients.oralHygiene.image} />
        </StyledOralHygieneInfoTop>
        <StyledOralHygieneInfoBottom>
          <StyledOralHygieneTextBottom
            dangerouslySetInnerHTML={{
              __html: patients.oralHygiene.info_2,
            }}
          ></StyledOralHygieneTextBottom>
        </StyledOralHygieneInfoBottom>
      </StyledOralHygieneWrapper>

      <p>{patients.oralHygiene.info}</p>
    </StyledOralHygieneMainSection>
  );
};

export default OralHygiene;
