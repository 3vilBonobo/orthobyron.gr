import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTreatmentsMainSection = styled.div`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 4rem;
  position: relative;
  top: 180px;
`;

export const StyledTreatmentsMainTitle = styled.h1`
  margin-bottom: 2rem;
  align-self: flex-start;
`;

export const StyledTreatmentsMainInfo = styled.p``;

export const StyledTreatmentMainTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StyledTreatmentMainInfoBox = styled.p``;

export const StyledTreatmentsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-top: 2rem;
  }
`;

export const StyledTreatmentsMainLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.darkBlue};
  border: 3px solid ${(props) => props.theme.darkBlue};
  border-radius: 10px;
`;

export const StyledTreatmentSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
`;

export const StyledTreatmentLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const StyledTreatmentImage = styled.img`
  border-radius: 50%;
  max-width: 400px;
  height: auto;
`;
