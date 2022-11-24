import styled from 'styled-components';

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
  margin-bottom: 3rem;
  align-self: flex-start;
`;

export const StyledTreatmentsMainInfo = styled.p``;

export const StyledTreatmentsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTreatmentSection = styled.div`
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
