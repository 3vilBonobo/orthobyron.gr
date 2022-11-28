import styled from 'styled-components';

export const StyledClinicsMainSection = styled.section`
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
  padding-block: 1.5rem 3.5rem;
  @media screen and (min-width: 768px) {
    padding-inline: 10rem;
    top: 140px;
  }
`;

export const StyledClinicsTitle = styled.h1`
  font-size: 2rem;
  align-self: flex-start;
  padding: 3rem;
`;

export const StyledClinicsText = styled.div`
  padding: 0 2rem 2rem 2rem;
`;

export const StyledClinicsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledClinicsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 500px;
  padding-inline: 2rem;
  margin-bottom: 2rem;
  line-height: 2rem;
`;
