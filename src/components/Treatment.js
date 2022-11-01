import { treatments } from '../data/data';
import {
  StyledTreatmentContainer,
  StyledTreatmentImage,
  StyledTreatmentTitle,
} from './styles/Treatment.style';

const Treatment = () => {
  return (
    <StyledTreatmentContainer>
      <StyledTreatmentTitle></StyledTreatmentTitle>
      <StyledTreatmentImage src={require()} />
    </StyledTreatmentContainer>
  );
};

export default Treatment;
