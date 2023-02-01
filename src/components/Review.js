import {
  StyledReviewContainer,
  StyledReview,
  StyledReviewStars,
  StyledReviewSource,
  StyledReviewName,
} from './styles/Reviews.style';

const Review = ({ item }) => {
  return (
    <StyledReviewContainer>
      <StyledReview>{item.review}</StyledReview>
      <StyledReviewStars>🟊🟊🟊🟊🟊</StyledReviewStars>
      <StyledReviewName>{item.name}</StyledReviewName>
      <StyledReviewSource>{item.source}</StyledReviewSource>
    </StyledReviewContainer>
  );
};

export default Review;
