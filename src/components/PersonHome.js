import { personnel } from '../data/data';
import {
  StyledPersonHomeWrapper,
  StyledPersonImage,
  StyledPersonName,
  StyledPersonProfession,
} from '../components/styles/PersonHome.style';

const PersonHome = () => {
  return (
    //I will need to map through data when I have extra people

    <StyledPersonHomeWrapper to={'/doctor'}>
      <StyledPersonImage src={personnel.person1.image} />
      <StyledPersonName>{personnel.person1.name}</StyledPersonName>
      <StyledPersonProfession>
        {personnel.person1.profession}
      </StyledPersonProfession>
    </StyledPersonHomeWrapper>
  );
};

export default PersonHome;
