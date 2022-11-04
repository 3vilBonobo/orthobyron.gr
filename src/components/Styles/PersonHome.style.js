import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPersonHomeWrapper = styled(Link)`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const StyledPersonImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: auto;
`;

export const StyledPersonName = styled.h3`
  padding: 1rem;
`;

export const StyledPersonProfession = styled.p``;
