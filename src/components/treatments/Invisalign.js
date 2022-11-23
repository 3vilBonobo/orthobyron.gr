import { treatments } from '../../data/data';
import { StyledTreatmentSection } from '../styles/Treatments.style';

const Invisalign = () => {
  return (
    <StyledTreatmentSection>
      <h1>{treatments[3].name}</h1>
      <p>{treatments[3].description}</p>
    </StyledTreatmentSection>
  );
};

export default Invisalign;
