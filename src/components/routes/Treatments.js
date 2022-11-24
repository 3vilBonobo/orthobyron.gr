import { Outlet } from 'react-router-dom';
import { treatmentsGeneral } from '../../data/data';

import {
  StyledTreatmentsMainSection,
  StyledTreatmentsMainTitle,
  StyledTreatmentsMainInfo,
  StyledTreatmentsMainContainer,
} from '../styles/Treatments.style';

const Treatments = () => {
  return (
    <StyledTreatmentsMainSection>
      <StyledTreatmentsMainTitle>
        {treatmentsGeneral.name}
      </StyledTreatmentsMainTitle>
      <StyledTreatmentsMainInfo>
        {treatmentsGeneral.description}
      </StyledTreatmentsMainInfo>
      <StyledTreatmentsMainContainer></StyledTreatmentsMainContainer>
      <Outlet />
    </StyledTreatmentsMainSection>
  );
};

export default Treatments;
