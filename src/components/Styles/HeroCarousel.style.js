import styled from 'styled-components';

export const StyledHeroCarouselWrapper = styled.div`
  width: 100%;
  padding: 3.5rem 1rem;
`;

export const StyledHeroCarouselImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeroCarouselImage = styled.img`
  max-width: 400px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 900px;
    height: auto;
  }
`;
