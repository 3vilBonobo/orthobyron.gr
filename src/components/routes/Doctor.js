import { personnel } from '../../data/data';
import {
  StyledDoctorMainSection,
  StyledDoctorTitle,
  StyledDoctorContainer,
  StyledDoctorTopSection,
  StyledDoctorBottomSection,
  StyledDoctorBottomLeftContainer,
  StyledDoctorBottomRightContainer,
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
        <StyledDoctorText
          dangerouslySetInnerHTML={{
            __html: personnel.person1.info1,
          }}
        ></StyledDoctorText>
        <StyledDoctorImage src={personnel.person1.image2} />
      </StyledDoctorTopSection>
      <StyledDoctorBottomSection>
        <StyledDoctorBottomLeftContainer>
          <StyledDoctorText
            dangerouslySetInnerHTML={{
              __html: personnel.person1.info2,
            }}
          ></StyledDoctorText>
          <StyledDoctorImage src={personnel.person1.image3} />
        </StyledDoctorBottomLeftContainer>
        <StyledDoctorBottomRightContainer>
          <StyledDoctorText
            dangerouslySetInnerHTML={{
              __html: personnel.person1.info3,
            }}
          ></StyledDoctorText>
          <StyledDoctorText
            dangerouslySetInnerHTML={{
              __html: personnel.person1.info4,
            }}
          ></StyledDoctorText>
        </StyledDoctorBottomRightContainer>
      </StyledDoctorBottomSection>
    </StyledDoctorMainSection>
  );
};

export default Doctor;
