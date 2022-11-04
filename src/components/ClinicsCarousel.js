import {
  StyledClinicsCarouselWrapper,
  StyledClinicsCarouselTitle,
} from './styles/Carousels.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ClinicsCarousel = ({ clinic }) => {
  return (
    <StyledClinicsCarouselWrapper>
      <StyledClinicsCarouselTitle>{clinic.title}</StyledClinicsCarouselTitle>
      <Carousel
        stopOnHover
        infiniteLoop
        showArrows
        transitionTime={1500}
        showThumbs={false}
      >
        {clinic.images.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}

        <div>
          <img className="image" src={clinic[0]} alt="" />
        </div>
      </Carousel>
    </StyledClinicsCarouselWrapper>
  );
};

export default ClinicsCarousel;
