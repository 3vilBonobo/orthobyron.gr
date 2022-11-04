import styled from 'styled-components';

export const StyledHero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeroTitle = styled.h1`
  font-size: 3.5rem;
  position: absolute;
  top: 15rem;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(30, 3, 33, 0.99),
    -4px -3px 7px rgba(30, 3, 33, 0.99);
`;

export const StyledHeroBtn = styled.a`
  position: absolute;
  font-size: 2rem;
  background-color: rgba(30, 3, 33, 0.2);
  color: white;
  padding: 2rem;
  text-decoration: none;
  border: 3px solid white;
  border-radius: 10px;
  text-shadow: 2px 2px 5px rgba(30, 3, 33, 0.99),
    -4px -3px 5px rgba(30, 3, 33, 0.99);
  box-shadow: 2px 2px 6px rgba(30, 3, 33, 0.99),
    -4px -3px 5px rgba(30, 3, 33, 0.99);
  cursor: pointer;

  &:hover {
    background-color: rgba(30, 3, 33, 0.4);
  }
`;

export const StyledHeroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledIntroSection = styled.section`
  background-color: #3579a0;
  color: #fff;
  font-size: 1.5rem;
  font-style: italic;
  text-align: center;
`;

export const StyledReviewsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #1e345e;
`;

export const StyledTreatmentsSection = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
export const StyledInfoText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #3579a0;
`;
export const StyledCTASection = styled.section`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledClinicsSection = styled.section`
  background-color: #fff;
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
  background-color: #cae3f0;
  padding: 3rem;
  color: #3579a0;
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledMapSection = styled.section`
  background-color: #e4e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const StyledMapWrapper = styled.section`
  background-color: #e4e8f0;
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
  background-color: #e4e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledSocialsSection = styled.section`
  width: 100%;
  background-color: #3579a0;
`;
