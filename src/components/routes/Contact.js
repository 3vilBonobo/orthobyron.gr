import Form from '../Form';
import { iatreia } from '../../data/data';
import {
  StyledContactMainSection,
  StyledContactTitle,
  StyledContactContainer,
  StyledContactInfo,
  StyledContactInfoWrapper,
  StyledContactInfoTitle,
  StyledContactClinicsInfo,
} from '../styles/Contact.style';

const Contact = () => {
  return (
    <StyledContactMainSection>
      <StyledContactTitle>Επικοινωνία</StyledContactTitle>
      <StyledContactContainer>
        <Form />
        <StyledContactInfo>
          <StyledContactInfoTitle>Στοιχεία Επικοινωνίας</StyledContactInfoTitle>

          <StyledContactInfoWrapper>
            <StyledContactClinicsInfo
              dangerouslySetInnerHTML={{
                __html: iatreia.byron.info,
              }}
            ></StyledContactClinicsInfo>
            <StyledContactClinicsInfo
              dangerouslySetInnerHTML={{
                __html: iatreia.piraeus.info,
              }}
            ></StyledContactClinicsInfo>
          </StyledContactInfoWrapper>
        </StyledContactInfo>
      </StyledContactContainer>
    </StyledContactMainSection>
  );
};

export default Contact;
