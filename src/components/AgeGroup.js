import {
  StyledAgeGroupContainer,
  StyledAgeGroupImage,
  StyledAgeGroupInfo,
  StyledAgeGroupTitle,
  StyledAgeGroupSubtitle,
  StyledAgeGroupText,
} from './styles/AgeGroups.style';

const AgeGroup = ({ ageGroup }) => {
  return (
    <StyledAgeGroupContainer>
      <StyledAgeGroupImage src={ageGroup.image} />
      <StyledAgeGroupInfo>
        <StyledAgeGroupTitle
          dangerouslySetInnerHTML={{
            __html: ageGroup.title,
          }}
        ></StyledAgeGroupTitle>
        <StyledAgeGroupSubtitle
          dangerouslySetInnerHTML={{
            __html: ageGroup.subtitle,
          }}
        ></StyledAgeGroupSubtitle>
        <StyledAgeGroupText
          dangerouslySetInnerHTML={{
            __html: ageGroup.info,
          }}
        ></StyledAgeGroupText>
      </StyledAgeGroupInfo>
    </StyledAgeGroupContainer>
  );
};

export default AgeGroup;
