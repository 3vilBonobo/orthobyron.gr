import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTreatmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 85%;
  }
`;

export const StyledTreatmentImage = styled.img`
  max-width: 100%;
  height: fit-content;
  opacity: 0.4;
  transition: transform 0.5s;
`;
export const StyledTreatmentBox = styled(Link)`
  display: inline-block;
  position: relative;
  width: 360px;
  height: 240px;
  text-align: center;
  margin: 1rem;
  text-decoration: none;
  overflow: hidden;
  &:hover ${StyledTreatmentImage} {
    opacity: 0.8;
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    width: 380px;
    height: 250px;
    margin: 1.5rem;
    border-radius: 10px;
  }
`;

export const StyledOverlay = styled.img`
  position: absolute;
  width: 100%;
  height: fit-content;
`;
export const StyledTreatmentTitle = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 2rem;
  z-index: 2;
`;
