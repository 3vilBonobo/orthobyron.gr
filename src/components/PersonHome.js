import { personnel } from '../data/data';
import {
  StyledPersonHomeContainer,
  StyledPersonHomeLeftWrapper,
  StyledPersonImage,
  StyledPersonName,
  StyledPersonProfession,
  StyledPersonHomeRightWrapper,
  StyledPersonHomeText,
} from '../components/styles/PersonHome.style';
import { StyledPersonHomeBtn } from '../components/styles/CTAButton.styles';
import CTAButton from '../components/CTAButton';

const PersonHome = () => {
  return (
    //Map through data when extra people are added
    <StyledPersonHomeContainer>
      <StyledPersonHomeLeftWrapper to={'/doctor'}>
        <StyledPersonImage src={personnel.person1.image} />
        <StyledPersonName>{personnel.person1.name}</StyledPersonName>
        <StyledPersonProfession>
          {personnel.person1.profession}
        </StyledPersonProfession>
      </StyledPersonHomeLeftWrapper>
      <StyledPersonHomeRightWrapper>
        <StyledPersonHomeText
          dangerouslySetInnerHTML={{
            __html: personnel.person1.summary,
          }}
        ></StyledPersonHomeText>
        <StyledPersonHomeBtn to={'/doctor'}>
          <CTAButton text={'ΠΕΡΙΣΣΟΤΕΡΑ'} />
        </StyledPersonHomeBtn>
      </StyledPersonHomeRightWrapper>
    </StyledPersonHomeContainer>
  );
};

export default PersonHome;
