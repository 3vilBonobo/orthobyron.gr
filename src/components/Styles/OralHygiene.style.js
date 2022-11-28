import styled from 'styled-components';

export const StyledOralHygieneMainSection = styled.div`
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
  padding: 7rem 1rem 6rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 3rem 10rem;
  }
`;

export const StyledOralHygieneTitle = styled.h1`
  align-self: flex-start;
  margin-bottom: 3rem;
`;

export const StyledOralHygieneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledOralHygieneInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledOralHygieneTextTop = styled.p``;
export const StyledOralHygieneImage = styled.img`
  max-width: 400px;
  border-radius: 50%;
`;

export const StyledOralHygieneInfoBottom = styled.div`
  margin-bottom: 1rem;
`;
export const StyledOralHygieneTextBottom = styled.p``;
