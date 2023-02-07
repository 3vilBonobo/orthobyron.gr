import styled from 'styled-components';

export const StyledClinicsCarouselWrapper = styled.div`
  width: 40%;
`;

export const StyledClinicsCarouselTitle = styled.h3`
  font-weight: 600;
  text-align: center;
  padding: 3rem;
`;

export const StyledClinicsCarouselImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledClinicsCarouselImage = styled.img`
  max-width: 300px;
  height: auto;
  @media screen and (min-width: 768px) {
    max-width: 550px;
  }
`;
