import styled from 'styled-components';

export const StyledReviewContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
  max-width: 300px;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 8px 4px rgba(237, 237, 237, 1);
  -moz-box-shadow: 0px 0px 8px 4px rgba(237, 237, 237, 1);
  box-shadow: 0px 0px 8px 4px rgba(237, 237, 237, 1);
  transition: box-shadow 1s;
  :hover {
    -webkit-box-shadow: inset 0px 0px 24px 11px rgba(237, 237, 237, 1);
    -moz-box-shadow: inset 0px 0px 24px 11px rgba(237, 237, 237, 1);
    box-shadow: inset 0px 0px 24px 11px rgba(237, 237, 237, 1);
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const StyledReview = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  text-align: justify;
  overflow-y: auto;
  height: 220px;
  margin-bottom: 1.2rem;
  padding: 0.5rem;
  /* Works on Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.lightGray};

  /* Works on Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.lightBlue};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.lightGray};
  }

  @media screen and (min-width: 768px) {
    line-height: 2.3rem;
    font-weight: 500;
  }
`;

export const StyledReviewStars = styled.div`
  text-align: center;
  padding: 0 0 1rem 0;
`;
export const StyledReviewSource = styled.p`
  text-align: center;
`;
export const StyledReviewName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

// export const StyledClinicsCarouselWrapper = styled.div`
//   max-width: 100%;
//   height: auto;
//   padding: 2rem;
//   @media screen and (min-width: 768px) {
//     padding: 3rem;
//     max-width: 60%;
//   }
// `;

// export const StyledClinicsCarouselTitle = styled.h2`
//   padding: 2rem;
//   text-align: center;
//   color: ${(props) => props.theme.navyBlue};
// `;
