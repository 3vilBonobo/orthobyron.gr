import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledAppointmentBtn = styled(Link)`
  text-decoration: none;
  background-color: #3579a0;
  padding: 1.8rem 2rem;
  border-radius: 10px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.5s background-color;
  margin-block: 1rem 3rem;
  &:hover {
    background-color: #3399ff;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 600;
    padding-inline: 2.5rem;
  }
`;
