import styled from 'styled-components';

export const StyledFirstAidMainSection = styled.div`
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
  padding: 4rem 1rem 5rem 1rem;
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
  padding: 3rem 1rem;
`;
export const StyledFirstAidImage = styled.img`
  border-radius: 50%;
  width: 100%;
`;
