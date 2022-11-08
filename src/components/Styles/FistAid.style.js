import styled from 'styled-components';

export const StyledFirstAidMainSection = styled.div`
  background-color: #fff;
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 3rem 10rem;
  }
`;

export const StyledFirstAidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledFirstAidInfo = styled.div`
  padding: 1rem;
`;
export const StyledFirstAidImage = styled.img`
  border-radius: 50%;
`;
