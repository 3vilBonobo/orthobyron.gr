import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledPersonHomeContainer = styled.div`
  color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledPersonHomeLeftWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const StyledPersonHomeRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const StyledPersonImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: auto;
`;

export const StyledPersonName = styled.h3`
  padding: 1rem;
  color: ${(props) => props.theme.darkBlue};
  transition: 0.5s color;
  &:hover,
  &:active {
    color: ${(props) => props.theme.navyBlue};
  }
`;

export const StyledPersonProfession = styled.p`
  color: ${(props) => props.theme.darkBlue};
  transition: 0.5s color;
  &:hover,
  &:active {
    color: ${(props) => props.theme.navyBlue};
  }
`;

export const StyledPersonHomeText = styled.p`
  padding: 1rem;
  text-align: justify;
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
`;
