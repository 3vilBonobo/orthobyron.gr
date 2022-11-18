import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { reviews } from '../data/data';
import { Carousel } from 'react-responsive-carousel';
import { BsStarFill } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import {
  StyledReviewsCarouselWrapper,
  StyledReviewsCarouselContainer,
  StyledReviewsCarouselReview,
  StyledReviewsCarouselName,
  StyledReviewsCarouselSource,
} from './styles/Carousels.style';

const ReviewsCarousel = () => {
  return (
    <StyledReviewsCarouselContainer>
      <Carousel
        showArrows
        autoPlay
        showStatus={false}
        transitionTime={2000}
        showThumbs={false}
        swipeable={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            margin: 5,
            color: '#b3b3b3',
            cursor: 'pointer',
          };
          const style = isSelected
            ? { ...defStyle, color: ' #595959' }
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              <FaCircle />
            </span>
          );
        }}
      >
        {reviews.map((review, index) => {
          return (
            <StyledReviewsCarouselWrapper key={index}>
              <StyledReviewsCarouselReview
                dangerouslySetInnerHTML={{
                  __html: review.review,
                }}
              ></StyledReviewsCarouselReview>

              <div>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <div>
                <StyledReviewsCarouselName>
                  {review.name}
                </StyledReviewsCarouselName>
                <StyledReviewsCarouselSource>
                  Πηγή: {review.source}
                </StyledReviewsCarouselSource>
              </div>
            </StyledReviewsCarouselWrapper>
          );
        })}
      </Carousel>
    </StyledReviewsCarouselContainer>
  );
};

export default ReviewsCarousel;
