import { treatments } from '../../data/data';
import {
  StyledTreatmentOutletSection,
  StyledTreatmentOutletLeftContainer,
  StyledTreatmentOutletImage,
} from '../styles/Treatments.style';
import photo from '../../assets/invisalign.jpg';

const Invisalign = () => {
  return (
    <StyledTreatmentOutletSection>
      <StyledTreatmentOutletLeftContainer>
        <h1>{treatments[3].name}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: treatments[3].description,
          }}
        ></p>
      </StyledTreatmentOutletLeftContainer>
      <StyledTreatmentOutletImage src={photo} />
    </StyledTreatmentOutletSection>
  );
};

export default Invisalign;
