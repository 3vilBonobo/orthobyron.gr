import styled from 'styled-components';

export const StyledReviewsCarouselContainer = styled.div`
  width: 90%;
  height: auto;
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 6rem;
  @media screen and (min-width: 768px) {
    padding: 3rem;
    max-width: 60%;
  }
`;
export const StyledReviewsCarouselWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledReviewsCarouselReview = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  padding: 1rem;
  max-width: 70%;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 2.3rem;
    font-weight: 500;
    max-width: 100%;
  }
`;
export const StyledReviewsCarouselSource = styled.p`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;
export const StyledReviewsCarouselName = styled.p`
  font-size: 1rem;
  padding: 1.7rem;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StyledClinicsCarouselWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  @media screen and (min-width: 768px) {
    padding: 3rem;
    max-width: 60%;
  }
`;

export const StyledClinicsCarouselTitle = styled.h2`
  padding: 2rem;
  text-align: center;
  color: #2d6586;
`;
