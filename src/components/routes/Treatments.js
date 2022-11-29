import { Outlet } from 'react-router-dom';
import { treatmentsGeneral, treatments } from '../../data/data';

import {
  StyledTreatmentsMainSection,
  StyledTreatmentsTopContainer,
  StyledTreatmentsBottomContainer,
  StyledTreatmentsLinkContainer,
  StyledTreatmentsMainTitle,
  StyledTreatmentsMainInfo,
  StyledTreatmentInfoBox,
  StyledTreatmentsOutletContainer,
  StyledTreatmentsMainLink,
} from '../styles/Treatments.style';

const Treatments = () => {
  return (
    <StyledTreatmentsMainSection>
      <StyledTreatmentsTopContainer>
        <StyledTreatmentsMainTitle>
          {treatmentsGeneral.name}
        </StyledTreatmentsMainTitle>
        <StyledTreatmentsMainInfo>
          {treatmentsGeneral.description.map((item, index) => {
            return (
              <StyledTreatmentInfoBox key={index}>
                {item}
              </StyledTreatmentInfoBox>
            );
          })}
        </StyledTreatmentsMainInfo>
      </StyledTreatmentsTopContainer>

      <StyledTreatmentsBottomContainer>
        <StyledTreatmentsLinkContainer>
          {treatments.map((item, index) => {
            return (
              <StyledTreatmentsMainLink to={item.url2} key={index}>
                {item.name}
              </StyledTreatmentsMainLink>
            );
          })}
        </StyledTreatmentsLinkContainer>

        <StyledTreatmentsOutletContainer>
          <Outlet />
        </StyledTreatmentsOutletContainer>
      </StyledTreatmentsBottomContainer>
    </StyledTreatmentsMainSection>
  );
};

export default Treatments;
