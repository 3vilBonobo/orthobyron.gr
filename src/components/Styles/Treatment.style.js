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
    max-width: 80%;
  }
`;
export const StyledTreatmentBox = styled(Link)`
  display: block;
  background-color: darkblue;
  position: relative;
  width: 300px;
  text-align: center;
  margin: 1rem;
  @media screen and (min-width: 768px) {
    margin: 1.5rem;
  }
`;
export const StyledTreatmentImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const StyledTreatmentTitle = styled.h2`
  text-transform: uppercase;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 2rem;
  z-index: 2;
`;
