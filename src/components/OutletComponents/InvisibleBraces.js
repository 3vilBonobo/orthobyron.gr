import { treatments } from '../../data/data';
import {
  StyledTreatmentSection,
  StyledTreatmentLeftContainer,
  StyledTreatmentImage,
} from '../styles/Treatments.style';
import photo from '../../assets/invisible.png';
const InvisibleBraces = () => {
  return (
    <StyledTreatmentSection>
      <StyledTreatmentLeftContainer>
        <h1>{treatments[1].name}</h1>
        <p>{treatments[1].description}</p>
      </StyledTreatmentLeftContainer>
      <StyledTreatmentImage src={photo} />
    </StyledTreatmentSection>
  );
};

export default InvisibleBraces;
