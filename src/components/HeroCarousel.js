import React, { Component } from 'react';
import {
  StyledHeroCarouselWrapper,
  StyledHeroCarouselImageWrapper,
  StyledHeroCarouselSlide,
} from '../components/styles/HeroCarousel.style';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import { heroImages } from '../data/data';

export default class HeroCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,

      arrows: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      draggable: true,
    };
    return (
      <StyledHeroCarouselWrapper>
        <Slider {...settings}>
          {heroImages.map((item, index) => {
            return (
              <StyledHeroCarouselImageWrapper key={index}>
                <StyledHeroCarouselSlide props={item} alt="" />
              </StyledHeroCarouselImageWrapper>
            );
          })}
        </Slider>
      </StyledHeroCarouselWrapper>
    );
  }
}
