import styled from 'styled-components';

export const StyledClinicsMainSection = styled.section`
  background-color: #fff;
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    padding-inline: 10rem;
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
