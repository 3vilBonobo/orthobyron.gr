import {
  StyledClinicsCarouselWrapper,
  StyledClinicsCarouselTitle,
} from './styles/Carousels.style';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { FaDotCircle } from 'react-icons/fa';

const ClinicsCarousel = ({ clinic }) => {
  return (
    <StyledClinicsCarouselWrapper>
      <StyledClinicsCarouselTitle>{clinic.title}</StyledClinicsCarouselTitle>
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showStatus={false}
        transitionTime={1500}
        showThumbs={false}
        swipeable={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            margin: 5,
            color: '#fff',
            cursor: 'pointer',
          };
          const style = isSelected
            ? { ...defStyle, color: ' #006666' }
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
              <FaDotCircle />
            </span>
          );
        }}
      >
        {clinic.images.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </StyledClinicsCarouselWrapper>
  );
};

export default ClinicsCarousel;
