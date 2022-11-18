import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { reviews } from '../data/data';
import { Carousel } from 'react-responsive-carousel';
import { BsStarFill } from 'react-icons/bs';
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
        stopOnHover
        infiniteLoop
        showIndicators={false}
        showArrows
        transitionTime={1500}
        showThumbs={false}
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
