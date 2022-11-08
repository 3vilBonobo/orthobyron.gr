import { StyledAgeGroupsMainSection } from '../styles/AgeGroups.style';
import { ageGroups } from '../../data/data';
import AgeGroup from '../AgeGroup';

const AgeGroups = () => {
  return (
    <StyledAgeGroupsMainSection>
      <h1>Ηλικιακές Ομάδες</h1>

      {ageGroups.map((item, index) => {
        return <AgeGroup key={index} ageGroup={item} />;
      })}
    </StyledAgeGroupsMainSection>
  );
};

export default AgeGroups;
