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
  padding: 1rem;
  position: relative;
  top: 180px;
`;

export const StyledContactTitle = styled.h1`
  align-self: start;
  padding-left: 6rem;
`;

export const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
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
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
export const StyledContactClinicsInfo = styled.div`
  max-width: 360px;
  font-size: 1.1rem;
  line-height: 2rem;
  padding: 1rem;
`;
