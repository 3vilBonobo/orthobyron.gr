import styled from 'styled-components';

export const StyledEmergenciesMainSection = styled.div`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 3rem 1rem;
  position: relative;
  top: 180px;
`;

export const StyledEmergenciesTitle = styled.h1`
  align-self: start;
  padding-left: 6rem;
`;

export const StyledEmergenciesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem 6rem;
`;

export const StyledEmergenciesInfo = styled.div`
  text-align: justify;
  padding: 1rem 6rem 0 0;
  max-width: 60%;
`;

export const StyledEmergenciesImage = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 50%;
`;
