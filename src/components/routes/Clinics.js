import { iatreia, clinicsImages } from '../../data/data';
import ClinicsCarousel from '../ClinicsCarousel';
import { StyledClinicsCarousels } from '../styles/Home.styles';
import {
  StyledClinicsMainSection,
  StyledClinicsTitle,
  StyledClinicsText,
  StyledClinicsInfoWrapper,
  StyledClinicsInfo,
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
      <StyledClinicsInfoWrapper>
        <StyledClinicsInfo
          dangerouslySetInnerHTML={{
            __html: iatreia.byron.info,
          }}
        ></StyledClinicsInfo>
        <StyledClinicsInfo
          dangerouslySetInnerHTML={{
            __html: iatreia.piraeus.info,
          }}
        ></StyledClinicsInfo>
      </StyledClinicsInfoWrapper>
      <StyledClinicsCarousels>
        <ClinicsCarousel clinic={clinicsImages.byron} />
        <ClinicsCarousel clinic={clinicsImages.piraeus} />
      </StyledClinicsCarousels>
    </StyledClinicsMainSection>
  );
};

export default Clinics;
