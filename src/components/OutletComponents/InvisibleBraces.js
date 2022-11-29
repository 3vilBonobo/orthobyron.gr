import { treatments } from '../../data/data';
import {
  StyledTreatmentOutletSection,
  StyledTreatmentOutletLeftContainer,
  StyledTreatmentOutletImage,
} from '../styles/Treatments.style';
import photo from '../../assets/invisible.png';
const InvisibleBraces = () => {
  return (
    <StyledTreatmentOutletSection>
      <StyledTreatmentOutletLeftContainer>
        <h1>{treatments[1].name}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: treatments[1].description,
          }}
        ></p>
      </StyledTreatmentOutletLeftContainer>
      <StyledTreatmentOutletImage src={photo} />
    </StyledTreatmentOutletSection>
  );
};

export default InvisibleBraces;
