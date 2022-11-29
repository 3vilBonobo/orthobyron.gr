import { treatments } from '../../data/data';
import {
  StyledTreatmentOutletSection,
  StyledTreatmentOutletLeftContainer,
  StyledTreatmentOutletImage,
} from '../styles/Treatments.style';
import photo from '../../assets/metal.jpg';

const MetalBraces = () => {
  return (
    <StyledTreatmentOutletSection>
      <StyledTreatmentOutletLeftContainer>
        <h1>{treatments[0].name}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: treatments[0].description,
          }}
        ></p>
      </StyledTreatmentOutletLeftContainer>
      <StyledTreatmentOutletImage src={photo} />
    </StyledTreatmentOutletSection>
  );
};

export default MetalBraces;
