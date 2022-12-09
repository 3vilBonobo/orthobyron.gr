import styled from 'styled-components';

export const StyledContactMainSection = styled.div`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4rem 2rem;
  position: relative;
  top: 180px;
  padding-block: 1.5rem 3.5rem;
  @media screen and (min-width: 768px) {
    padding-inline: 10rem;
    top: 140px;
  }
`;

export const StyledContactTitle = styled.h1`
  align-self: center;

  @media screen and (min-width: 768px) {
    align-self: start;
    padding-left: 6rem;
  }
`;

export const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
export const StyledContactInfoTitle = styled.h2`
  padding-block: 1rem 3rem;
`;
export const StyledContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledContactClinicsInfo = styled.div`
  max-width: 360px;
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 1rem;
`;
