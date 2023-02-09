import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMain = styled.div`
  /* max-width: 100%; */
  position: relative;
  top: 180px;
  @media screen and (min-width: 768px) {
    top: 130px;
  }
`;
export const StyledHero = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledOverlay = styled.div`
  background: -moz-linear-gradient(
    251deg,
    rgba(194, 226, 244, 1) 0%,
    rgba(194, 226, 244, 1) 1%,
    rgba(36, 30, 78, 1) 99%,
    rgba(35, 28, 77, 1) 100%
  );
  background: -webkit-linear-gradient(
    251deg,
    rgba(194, 226, 244, 1) 0%,
    rgba(194, 226, 244, 1) 1%,
    rgba(36, 30, 78, 1) 99%,
    rgba(35, 28, 77, 1) 100%
  );
  background: -o-linear-gradient(
    251deg,
    rgba(194, 226, 244, 1) 0%,
    rgba(194, 226, 244, 1) 1%,
    rgba(36, 30, 78, 1) 99%,
    rgba(35, 28, 77, 1) 100%
  );
  background: -ms-linear-gradient(
    251deg,
    rgba(194, 226, 244, 1) 0%,
    rgba(194, 226, 244, 1) 1%,
    rgba(36, 30, 78, 1) 99%,
    rgba(35, 28, 77, 1) 100%
  );
  background: linear-gradient(
    199deg,
    rgba(194, 226, 244, 1) 0%,
    rgba(194, 226, 244, 1) 1%,
    rgba(36, 30, 78, 1) 99%,
    rgba(35, 28, 77, 1) 100%
  );
  opacity: 0.5;
  position: absolute;
  top: -100px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  opacity: 1;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    top: 11rem;
    font-size: 4rem;
  }
`;

export const StyledHeroBtn = styled.a`
  overflow: hidden;
  position: absolute;
  top: 15rem;
  color: ${(props) => props.theme.white};
  font-size: 1.7rem;
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
    z-index: 2;
  }
  @media screen and (min-width: 768px) {
    top: 20rem;
  }
`;

export const StyledHeroVideo = styled.video`
  width: 100%;
  height: 80vh;
  object-fit: none;
  position: relative;
  top: -100px;
  @media screen and (min-width: 768px) {
    object-fit: cover;
    height: auto;
  }
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
  width: 90%;
  line-height: 2.3rem;
  @media screen and (min-width: 768px) {
    max-width: 60%;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const StyledReviewsSection = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  color: #1e345e;
  padding: 5rem 1.2rem;
  @media screen and (min-width: 768px) {
    padding: 5rem 10rem;
  }
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
  max-width: 90%;
  text-align: center;
  font-size: 1.1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 500;
    padding-block: 5rem;
  }
`;
export const StyledCTASection = styled.section`
  max-width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledVideoSection = styled.section`
  max-width: 100%;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  padding: 3rem 0.5rem;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 3rem;
  }
`;

export const StyledClinicsSection = styled.section`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledPersonnelSection = styled.section`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 3rem 1rem;
`;

export const StyledSocialsSection = styled.section`
  max-width: 100%;
  background-color: ${(props) => props.theme.lightBlue};
`;

export const StyledWorkHoursSection = styled.section`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 2.5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const StyledMapSection = styled.section`
  background-color: ${(props) => props.theme.lightGrey};
  color: ${(props) => props.theme.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 3rem 1rem 7rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const StyledMapHomeTitle = styled.h2`
  padding-bottom: 2rem;
`;

export const StyledMapWrapper = styled.section`
  background-color: ${(props) => props.theme.lightGrey};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
