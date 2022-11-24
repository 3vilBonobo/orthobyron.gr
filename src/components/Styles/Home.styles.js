import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMain = styled.div`
  width: 100%;
  position: relative;
  top: 140px;
`;
export const StyledHero = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeroTitle = styled(Link)`
  position: absolute;
  top: 7rem;
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  text-shadow: 2px 2px 6px rgba(30, 3, 33, 0.99),
    -4px -3px 7px rgba(30, 3, 33, 0.99);

  @media screen and (min-width: 768px) {
    top: 15rem;
    font-size: 3.5rem;
  }
`;

export const StyledHeroBtn = styled.a`
  overflow: hidden;
  position: absolute;
  color: ${(props) => props.theme.white};
  font-size: 1.8rem;
  padding: 2rem 3rem;
  text-decoration: none;
  border: 3px solid ${(props) => props.theme.white};
  border-radius: 10px;
  text-decoration: none;
  text-shadow: 2px 2px 5px rgba(30, 3, 33, 0.99),
    -4px -3px 5px rgba(30, 3, 33, 0.99);
  box-shadow: 2px 2px 6px rgba(30, 3, 33, 0.99),
    -4px -3px 5px rgba(30, 3, 33, 0.99);
  cursor: pointer;
  &:hover,
  :active {
    background-color: rgba(30, 3, 33, 0.4);
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    @media screen and (min-width: 768px) {
      background-color: rgba(30, 3, 33, 0.2);
    }
  }

  &:after {
    background: ${(props) => props.theme.white};
    content: '';
    height: 200px;
    left: -90px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }
`;

export const StyledHeroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledIntroSection = styled.section`
  background-color: ${(props) => props.theme.lightBlue};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const StyledIntroContainer = styled.div`
  text-align: center;
  font-size: 1.1rem;
  width: 75%;
  line-height: 2.3rem;
  @media screen and (min-width: 768px) {
    max-width: 60%;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const StyledReviewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  color: #1e345e;
`;

export const StyledTreatmentsSection = styled.section`
  background-color: ${(props) => props.theme.white};
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-block: 1rem 3rem;
`;

export const StyledTreatmentsTitle = styled.h2`
  font-size: 2.1rem;
  padding-bottom: 3rem;
  color: ${(props) => props.theme.navyBlue};
`;
export const StyledInfoText = styled.p`
  padding: 2rem 1rem;
  color: ${(props) => props.theme.lightBlue};
  max-width: 70%;
  text-align: center;
  font-size: 1.1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-block: 5rem;
  }
`;
export const StyledCTASection = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledClinicsSection = styled.section`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledClinicsTitle = styled.h2`
  display: block;
  width: 100%;
  text-align: center;
  background-color: ${(props) => props.theme.lightCyan};
  padding: 3rem;
  color: ${(props) => props.theme.navyBlue};
  margin: 2rem 0;
`;

export const StyledClinicsCarousels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledWorkHoursSection = styled.section`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const StyledMapSection = styled.section`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 3rem 1rem;
  }
`;
export const StyledMapWrapper = styled.section`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const StyledPersonnelSection = styled.section`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 1rem;
`;

export const StyledSocialsSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.lightBlue};
`;
