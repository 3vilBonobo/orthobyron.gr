import {
  StyledTreatmentContainer,
  StyledTreatmentBox,
  StyledTreatmentImage,
  StyledTreatmentTitle,
} from './styles/Treatment.style';
import { treatments } from '../data/data';

const Treatment = () => {
  return (
    <StyledTreatmentContainer>
      {treatments.map((item, index) => {
        return (
          <StyledTreatmentBox key={index} to={item.url}>
            <StyledTreatmentTitle>{item.name}</StyledTreatmentTitle>
            <StyledTreatmentImage src={item.image} />
          </StyledTreatmentBox>
        );
      })}
    </StyledTreatmentContainer>
  );
};

export default Treatment;
