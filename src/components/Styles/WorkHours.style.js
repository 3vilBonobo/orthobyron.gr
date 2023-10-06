import styled from 'styled-components';

export const StyledWorkHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const StyledWorkHoursTitle = styled.h3``;

export const StyledWorkHoursWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  background-color: transparent;
  padding: 1rem 3rem;
  @media screen and (min-width: 768px) {
  }
`;

export const StyledDaysContainer = styled.div``;
export const StyledDays = styled.ul`
  list-style: none;
  text-align: left;
  color: inherit;
`;
export const StyledDay = styled.li`
  padding: 0.5rem;
`;

export const StyledHoursContainer = styled.div``;
export const StyledHours = styled.ul`
  list-style: none;
  color: inherit;
`;
export const StyledHour = styled.li`
  padding: 0.5rem;
`;
