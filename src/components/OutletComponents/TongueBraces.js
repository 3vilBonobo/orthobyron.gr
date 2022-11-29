import { treatments } from '../../data/data';
import {
  StyledTreatmentOutletSection,
  StyledTreatmentOutletLeftContainer,
  StyledTreatmentOutletImage,
} from '../styles/Treatments.style';
import photo from '../../assets/tongue.jpg';
const TongueBraces = () => {
  return (
    <StyledTreatmentOutletSection>
      <StyledTreatmentOutletLeftContainer>
        <h1>{treatments[2].name}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: treatments[2].description,
          }}
        ></p>
      </StyledTreatmentOutletLeftContainer>
      <StyledTreatmentOutletImage src={photo} />
    </StyledTreatmentOutletSection>
  );
};

export default TongueBraces;
