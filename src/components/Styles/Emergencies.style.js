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
  position: relative;
  top: 180px;
  padding: 4rem 1rem 5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 5rem 1rem;
    top: 140px;
  }
`;

export const StyledEmergenciesTitle = styled.h1`
  text-align: center;

  @media screen and (min-width: 768px) {
    align-self: start;
    padding-left: 6rem;
  }
`;

export const StyledEmergenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 3rem 6rem;
    flex-direction: row;
  }
`;

export const StyledEmergenciesInfo = styled.div`
  text-align: justify;
  max-width: 100%;
  padding: 2rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 1rem 6rem 0 0;
    max-width: 60%;
  }
`;

export const StyledEmergenciesImage = styled.img`
  height: auto;
  border-radius: 50%;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;
