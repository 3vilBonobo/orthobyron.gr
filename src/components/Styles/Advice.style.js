import styled from 'styled-components';

export const StyledAdviceMainSection = styled.div`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 3rem 6rem 3rem;
  position: relative;
  top: 180px;
  @media screen and (min-width: 768px) {
    top: 140px;
  }
`;
export const StyledAdviceTitle = styled.h1`
  padding: 4rem;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const StyledAdviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledAdviceInfo = styled.div``;

export const StyledAdviceImage = styled.img`
  max-width: 400px;
  border-radius: 50%;
`;
