import { iatreia, clinicsImages } from '../../data/data';
import ClinicsCarousel from '../ClinicsCarousel';
import { StyledClinicsCarousels } from '../styles/Home.styles';
import {
  StyledClinicsMainSection,
  StyledClinicsTitle,
  StyledClinicsText,
} from '../styles/Clinics.style';

const Clinics = () => {
  return (
    <StyledClinicsMainSection>
      <StyledClinicsTitle>Τα Ιατρεία μας</StyledClinicsTitle>
      <StyledClinicsText
        dangerouslySetInnerHTML={{
          __html: iatreia.general,
        }}
      ></StyledClinicsText>
      <StyledClinicsCarousels>
        <ClinicsCarousel clinic={clinicsImages.byron} />
        <ClinicsCarousel clinic={clinicsImages.piraeus} />
      </StyledClinicsCarousels>
    </StyledClinicsMainSection>
  );
};

export default Clinics;
