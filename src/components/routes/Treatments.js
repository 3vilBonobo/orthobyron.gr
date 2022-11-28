import { Outlet, useLocation } from 'react-router-dom';
import { treatmentsGeneral, treatments } from '../../data/data';

import {
  StyledTreatmentsMainSection,
  StyledTreatmentsMainTitle,
  StyledTreatmentsMainInfo,
  StyledTreatmentsMainContainer,
  StyledTreatmentsMainLink,
} from '../styles/Treatments.style';

const Treatments = () => {
  const location = useLocation();
  return (
    <StyledTreatmentsMainSection>
      <StyledTreatmentsMainTitle>
        {treatmentsGeneral.name}
      </StyledTreatmentsMainTitle>
      <StyledTreatmentsMainInfo>
        {treatmentsGeneral.description}
      </StyledTreatmentsMainInfo>
      <StyledTreatmentsMainContainer>
        {treatments.map((item, index) => {
          return (
            <StyledTreatmentsMainLink
              to={item.url2}
              key={index}
              state={{ background: location }}
            >
              {item.name}
            </StyledTreatmentsMainLink>
          );
        })}
      </StyledTreatmentsMainContainer>
      <Outlet />
    </StyledTreatmentsMainSection>
  );
};

export default Treatments;
