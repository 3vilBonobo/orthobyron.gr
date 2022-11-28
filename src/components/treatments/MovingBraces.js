import { treatments } from '../../data/data';
import {
  StyledTreatmentSection,
  StyledTreatmentLeftContainer,
  StyledTreatmentImage,
} from '../styles/Treatments.style';
import photo from '../../assets/moving.jpg';
const MovingBraces = () => {
  return (
    <StyledTreatmentSection>
      <StyledTreatmentLeftContainer>
        <h1>{treatments[4].name}</h1>
        <p>{treatments[4].description}</p>
      </StyledTreatmentLeftContainer>
      <StyledTreatmentImage src={photo} />
    </StyledTreatmentSection>
  );
};

export default MovingBraces;
