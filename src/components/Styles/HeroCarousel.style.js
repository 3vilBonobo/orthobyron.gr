import styled from 'styled-components';

export const StyledHeroCarouselWrapper = styled.div`
  width: 100%;
`;

export const StyledHeroCarouselImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeroCarouselSlide = styled.div`
  background-image: url('${(props) => props.props}');
  width: 100%;
  height: 80vh;
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
  }
`;
