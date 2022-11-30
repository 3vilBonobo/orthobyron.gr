import styled from 'styled-components';

export const StyledFaqMainSection = styled.div`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4rem;
  position: relative;
  top: 180px;
  @media screen and (min-width: 768px) {
    top: 140px;
  }
`;

export const StyledFaqTitle = styled.h1`
  margin-bottom: 3rem;
  align-self: flex-start;
`;

export const StyledFaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 600px;
  }
`;

export const StyledFaqInfo = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
`;

export const StyledFaqImageContainer = styled.div`
  height: 100%;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
`;

export const StyledFaqImage = styled.img`
  max-width: 400px;
  border-radius: 50%;
`;
