import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Carousel {...settings}>
      <Wrap> <a href="/#"> 
        <img src="images/slider-badag.jpg" alt="Onward-2020" />
      </a> </Wrap>

      <Wrap> <a href="/#"> 
        <img src="images/slider-scale.jpg" alt="WandaVision" />
      </a> </Wrap>

      <Wrap> <a href="/#"> 
        <img src="images/slider-just-beyond.jfif" alt="just-beyond" />
      </a> </Wrap>

      <Wrap> <a href="/#"> 
        <img src="images/slider-black-widow.jfif" alt="black-widow" />
      </a> </Wrap>

      <Wrap> <a href="/#"> 
        <img src="images/slider-criminal-minds.jfif" alt="criminal-minds" />
      </a> </Wrap>

      <Wrap> <a href="/#"> 
        <img src="images/slider-what-if.jfif" alt="What-If" />
      </a> </Wrap>

      <Wrap> <a href="/#"> 
        <img src="images/slider-only-murders.jfif" alt="only-murders" />
      </a> </Wrap>
      
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  
  & > button {
    opacity: 0;
    heigth: 100%;
    width: 5vw;
    z-index: 1;

  }

  &:hover button{
    opacity: 1;
    transition: 0.2s ease 0s;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before{
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 4px;

  a {
    position: relative;
    padding: 8px;
    border-radius: 4px;
    display: block;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
      height: 100%;
      width: 100%;
    }

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
      padding: 0;
      transition-duration: 300ms;
    }

  }

`

export default ImgSlider
