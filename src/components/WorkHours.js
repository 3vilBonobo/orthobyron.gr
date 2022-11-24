import { workHours } from '../data/data';
import {
  StyledWorkHoursContainer,
  StyledWorkHoursTitle,
  StyledWorkHoursWrapper,
  StyledDaysContainer,
  StyledHoursContainer,
  StyledDays,
  StyledHours,
  StyledDay,
} from './styles/WorkHours.style';

export const WorkHours = () => {
  return (
    <StyledWorkHoursContainer>
      <StyledWorkHoursTitle>ΩΡΑΡΙΟ</StyledWorkHoursTitle>
      <StyledWorkHoursWrapper>
        <StyledDaysContainer>
          <StyledDays>
            {workHours.map((item, index) => {
              return <StyledDay key={index}>{item.day}</StyledDay>;
            })}
          </StyledDays>
        </StyledDaysContainer>
        <StyledHoursContainer>
          <StyledHours>
            {workHours.map((item, index) => {
              return <StyledDay key={index}>{item.hour}</StyledDay>;
            })}
          </StyledHours>
        </StyledHoursContainer>
      </StyledWorkHoursWrapper>
    </StyledWorkHoursContainer>
  );
};

export default WorkHours;
