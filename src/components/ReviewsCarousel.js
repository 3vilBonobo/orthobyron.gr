import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { reviews } from '../data/data';
import { Carousel } from 'react-responsive-carousel';
import { BsStarFill } from 'react-icons/bs';
import { StyledReviewsCarouselWrapper } from './styles/ReviewCarousel.style';

const ReviewsCarousel = () => {
  return (
    <StyledReviewsCarouselWrapper>
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
            <div key={index}>
              <p>{review.review}</p>

              <div>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <div>
                <p>Πηγή: {review.source}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </StyledReviewsCarouselWrapper>
  );
};

export default ReviewsCarousel;
