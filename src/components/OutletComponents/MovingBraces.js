import { treatments } from '../../data/data';
import {
  StyledTreatmentOutletSection,
  StyledTreatmentOutletLeftContainer,
  StyledTreatmentOutletImage,
} from '../styles/Treatments.style';
import photo from '../../assets/moving.jpg';
const MovingBraces = () => {
  return (
    <StyledTreatmentOutletSection>
      <StyledTreatmentOutletLeftContainer>
        <h1>{treatments[4].name}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: treatments[4].description,
          }}
        ></p>
      </StyledTreatmentOutletLeftContainer>
      <StyledTreatmentOutletImage src={photo} />
    </StyledTreatmentOutletSection>
  );
};

export default MovingBraces;
