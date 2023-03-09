import { iatreia, clinicsImages } from '../../data/data';
import ClinicsCarousel from '../ClinicsCarousel';
import {
  StyledClinicsMainSection,
  StyledClinicsTitle,
  StyledClinicsText,
  StyledClinicsInfoWrapper,
  StyledClinicsInfo,
  StyledClinicsCarouselSection,
} from '../styles/Clinics.style';
import { StyledClinicsCarouselWrapper } from '../styles/ClinicsCarousel.style';
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
      <StyledClinicsCarouselSection>
        <StyledClinicsCarouselWrapper>
          <ClinicsCarousel clinic={clinicsImages.byron} />
          <ClinicsCarousel clinic={clinicsImages.piraeus} />
        </StyledClinicsCarouselWrapper>
      </StyledClinicsCarouselSection>
    </StyledClinicsMainSection>
  );
};

export default Clinics;
