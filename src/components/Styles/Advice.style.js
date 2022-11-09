import styled from 'styled-components';

export const StyledAdviceMainSection = styled.div`
  background-color: #fff;
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4rem;
`;
export const StyledAdviceTitle = styled.h1`
  margin-bottom: 3rem;
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
