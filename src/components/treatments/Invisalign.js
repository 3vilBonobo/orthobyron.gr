import { treatments } from '../../data/data';
import {
  StyledTreatmentSection,
  StyledTreatmentLeftContainer,
  StyledTreatmentImage,
} from '../styles/Treatments.style';
import photo from '../../assets/invisalign.jpg';
import { useNavigate } from 'react-router-dom';
const Invisalign = () => {
  const navigate = useNavigate();
  return (
    <StyledTreatmentSection>
      <StyledTreatmentLeftContainer>
        <h1>{treatments[3].name}</h1>
        <p>{treatments[3].description}</p>
        <button onClick={() => navigate(-1)}>Close</button>
      </StyledTreatmentLeftContainer>
      <StyledTreatmentImage src={photo} />
    </StyledTreatmentSection>
  );
};

export default Invisalign;
