import React, { Component } from 'react';
import {
  StyledClinicsCarouselWrapper,
  StyledClinicsCarouselTitle,
  StyledClinicsCarouselImageWrapper,
  StyledClinicsCarouselImage,
} from '../components/styles/ClinicsCarousel.style';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

export default class ClinicsCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      draggable: true,
    };
    return (
      <StyledClinicsCarouselWrapper>
        <StyledClinicsCarouselTitle>
          {this.props.clinic.title}
        </StyledClinicsCarouselTitle>
        <Slider {...settings}>
          {this.props.clinic.images.map((item, index) => {
            return (
              <StyledClinicsCarouselImageWrapper key={index}>
                <StyledClinicsCarouselImage src={item} alt="" />
              </StyledClinicsCarouselImageWrapper>
            );
          })}
        </Slider>
      </StyledClinicsCarouselWrapper>
    );
  }
}
