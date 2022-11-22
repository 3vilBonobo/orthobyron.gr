import styled from 'styled-components';

export const StyledFaqMainSection = styled.div`
  background-color: #fff;
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

export const StyledFaqTitle = styled.h1`
  margin-bottom: 3rem;
  align-self: flex-start;
`;

export const StyledFaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledFaqInfo = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

export const StyledFaqImage = styled.img`
  max-width: 400px;
  border-radius: 50%;
`;
