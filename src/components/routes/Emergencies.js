import { patients } from '../../data/data';
import {
  StyledEmergenciesMainSection,
  StyledEmergenciesTitle,
  StyledEmergenciesContainer,
  StyledEmergenciesInfo,
  StyledEmergenciesImage,
} from '../styles/Emergencies.style';

const Emergencies = () => {
  return (
    <StyledEmergenciesMainSection>
      <StyledEmergenciesTitle>
        {patients.emergencies.title}
      </StyledEmergenciesTitle>
      <StyledEmergenciesContainer>
        <StyledEmergenciesInfo
          dangerouslySetInnerHTML={{
            __html: patients.emergencies.info,
          }}
        ></StyledEmergenciesInfo>
        <StyledEmergenciesImage src={patients.emergencies.image} />
      </StyledEmergenciesContainer>
    </StyledEmergenciesMainSection>
  );
};

export default Emergencies;
