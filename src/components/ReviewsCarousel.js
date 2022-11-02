import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { reviews } from '../data/data';
import { Carousel } from 'react-responsive-carousel';
import { BsStarFill } from 'react-icons/bs';
import { StyledReviewsCarouselWrapper } from './styles/ReviewCarousel.style';

const ReviewsCarousel = () => {
  return (
    <StyledReviewsCarouselWrapper>
      <Carousel
        autoPlay
        stopOnHover
        infiniteLoop
        showIndicators={false}
        showArrows
      >
        {reviews.map((review, index) => {
          return (
            <div>
              <p>{reviews[index].review}</p>

              <div>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <div>
                <p>Πηγή: {reviews[index].source}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </StyledReviewsCarouselWrapper>
  );
};

export default ReviewsCarousel;
