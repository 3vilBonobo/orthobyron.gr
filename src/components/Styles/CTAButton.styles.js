import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledAppointmentBtn = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.lightBlue};
  padding: 1.8rem 2rem;
  border-radius: 10px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.5s background-color;
  margin-block: 1rem 2rem;
  &:hover {
    background-color: ${(props) => props.theme.brightCyan};
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 600;
    padding-inline: 2.5rem;
  }
`;

export const StyledPersonHomeBtn = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.lightBlue};
  padding: 1.2rem 1.5rem;
  border-radius: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.5s background-color;
  margin-block: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.brightCyan};
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-inline: 1.8rem;
  }
`;
