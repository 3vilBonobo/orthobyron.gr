import { personnel } from '../../data/data';
import {
  StyledDoctorMainSection,
  StyledDoctorTitle,
  StyledDoctorContainer,
  StyledDoctorTopSection,
  StyledDoctorBottomSection,
  StyledDoctorText,
  StyledDoctorName,
  StyledDoctorImage,
} from '../styles/Doctor.style';
const Doctor = () => {
  return (
    <StyledDoctorMainSection>
      <StyledDoctorTitle>Ο Ιατρός</StyledDoctorTitle>
      <StyledDoctorContainer></StyledDoctorContainer>
      <StyledDoctorName>{personnel.person1.name}</StyledDoctorName>
      <StyledDoctorTopSection>
        <StyledDoctorText>{personnel.person1.info1}</StyledDoctorText>
        <StyledDoctorImage src={personnel.person1.image2} />
      </StyledDoctorTopSection>
      <StyledDoctorBottomSection>
        <StyledDoctorText>{personnel.person1.info2}</StyledDoctorText>
      </StyledDoctorBottomSection>
    </StyledDoctorMainSection>
  );
};

export default Doctor;
