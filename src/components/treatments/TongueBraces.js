import { treatments } from '../../data/data';
import {
  StyledTreatmentSection,
  StyledTreatmentLeftContainer,
  StyledTreatmentImage,
} from '../styles/Treatments.style';
import photo from '../../assets/tongue.jpg';
const TongueBraces = () => {
  return (
    <StyledTreatmentSection>
      <StyledTreatmentLeftContainer>
        <h1>{treatments[2].name}</h1>
        <p>{treatments[2].description}</p>
      </StyledTreatmentLeftContainer>
      <StyledTreatmentImage src={photo} />
    </StyledTreatmentSection>
  );
};

export default TongueBraces;
