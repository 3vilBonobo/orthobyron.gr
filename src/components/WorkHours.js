import { workHours } from '../data/data';
import {
  StyledWorkHoursWrapper,
  StyledDaysContainer,
  StyledHoursContainer,
  StyledDays,
  StyledHours,
  StyledDay,
  StyledHour,
} from './styles/WorkHours.style';

export const WorkHours = () => {
  return (
    <>
      <h3>ΩΡΑΡΙΟ</h3>
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
    </>
  );
};

export default WorkHours;
