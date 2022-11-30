import styled from 'styled-components';

export const StyledDoctorMainSection = styled.div`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4rem 1rem 6rem 1rem;
  position: relative;
  top: 180px;
  @media screen and (min-width: 768px) {
    top: 140px;
    padding: 4rem;
  }
`;

export const StyledDoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const StyledDoctorTitle = styled.h1`
  align-self: flex-start;
  margin-left: 3rem;
  font-size: 2.3rem;
`;

export const StyledDoctorTopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledDoctorBottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledDoctorBottomLeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const StyledDoctorBottomRightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledDoctorName = styled.h2``;

export const StyledDoctorText = styled.p`
  font-size: 1.1rem;
  text-align: justify;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 3rem;
    line-height: 2rem;
  }
`;

export const StyledDoctorImage = styled.img`
  margin: 0;
  width: 400px;
  height: auto;
  @media screen and (min-width: 768px) {
    margin: 3rem 7rem 3rem 3rem;
  }
`;
