import styled from 'styled-components';

export const StyledReviewsCarouselContainer = styled.div`
  width: 90%;
  height: auto;
  padding: 2rem;
  @media screen and (min-width: 768px) {
    padding: 3rem;
    max-width: 60%;
  }
`;
export const StyledReviewsCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledReviewsCarouselReview = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  line-height: 2.3rem;
  font-weight: 500;
`;
export const StyledReviewsCarouselSource = styled.p`
  padding-bottom: 2rem;
`;
export const StyledReviewsCarouselName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1.7rem;
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
`;
