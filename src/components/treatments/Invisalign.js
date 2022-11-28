import { treatments } from '../../data/data';
import {
  StyledTreatmentSection,
  StyledTreatmentLeftContainer,
  StyledTreatmentImage,
} from '../styles/Treatments.style';
import photo from '../../assets/invisalign.jpg';
const Invisalign = () => {
  return (
    <StyledTreatmentSection>
      <StyledTreatmentLeftContainer>
        <h1>{treatments[3].name}</h1>
        <p>{treatments[3].description}</p>
      </StyledTreatmentLeftContainer>
      <StyledTreatmentImage src={photo} />
    </StyledTreatmentSection>
  );
};

export default Invisalign;
