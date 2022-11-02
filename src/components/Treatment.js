import {
  StyledTreatmentContainer,
  StyledTreatmentImage,
  StyledTreatmentTitle,
} from './styles/Treatment.style';

const Treatment = ({ treatments }) => {
  return (
    <StyledTreatmentContainer>
      <StyledTreatmentTitle>{treatments.name}</StyledTreatmentTitle>
      <StyledTreatmentImage src="../assets/metallika-siderakia.jpg" />
    </StyledTreatmentContainer>
  );
};

export default Treatment;
