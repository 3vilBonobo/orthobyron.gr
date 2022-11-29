import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTreatmentsMainSection = styled.div`
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
    padding: 3rem 5rem;
    top: 140px;
  }
`;
export const StyledTreatmentsTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StyledTreatmentsBottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledTreatmentsMainTitle = styled.h1`
  margin: 0 5rem 2rem 10rem;
`;

export const StyledTreatmentsMainInfo = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding-inline: 2rem;
  }
`;

export const StyledTreatmentInfoBox = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  background-color: ${(props) => props.theme.lightBlue};
  border: 3px solid ${(props) => props.theme.navyBlue};
  border-radius: 10px 0 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  width: 320px;
  margin-right: 2rem;
  padding: 1rem 2rem;
`;

export const StyledTreatmentsLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 8rem;
`;
export const StyledTreatmentsMainLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.darkBlue};
  border: 4px solid ${(props) => props.theme.darkBlue};
  border-radius: 10px;
  min-width: 330px;
  margin-bottom: 5px;
`;
export const StyledTreatmentsOutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 3rem;
    align-items: flex-start;
    min-height: 500px;
  }
`;
export const StyledTreatmentOutletSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  height: 500px;
`;

export const StyledTreatmentOutletLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const StyledTreatmentOutletImage = styled.img`
  border-radius: 50%;
  max-width: 400px;
  height: auto;
`;
