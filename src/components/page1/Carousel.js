import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        //   dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

function Carousel() {
  return (
    <Caro>
        {/* <h2>Swipe To Slide</h2> */}
        <Slider {...settings}>
        <InsideCaro>
            <Link to='/math'><IMG src="images/mat.png" alt="" /><SubjName>Mathematics</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/english'><IMG src="images/eng.png" alt="" /><SubjName>English</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/math'><IMG src="images/mat.png" alt="" /><SubjName>Mathematics</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/english'><IMG src="images/eng.png" alt="" /><SubjName>English</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/math'><IMG src="images/mat.png" alt="" /><SubjName>Mathematics</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/english'><IMG src="images/eng.png" alt="" /><SubjName>English</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/math'><IMG src="images/mat.png" alt="" /><SubjName>Mathematics</SubjName></Link>
          </InsideCaro>
          <InsideCaro>
            <Link to='/english'><IMG src="images/eng.png" alt="" /><SubjName>English</SubjName></Link>
          </InsideCaro>
        </Slider>
    </Caro>
  
  )
}

export default Carousel

const Caro = styled.div`
    padding: 40px;
    background-color: #CA4E79;
    .slick-slide > div {
     margin: 0 10px;
   }
   .slick-list {
    margin: 0 -10px;
    }
`;
const InsideCaro = styled.div`
   min-height: 290px;
    position: relative;
    text-align: center;
    width: 100%;
`;
const IMG = styled.img`
    width: 100%;
    height: 290px;
    text-align: center;
    align-items: center;
    vertical-align:middle;

    &:hover {
   transform: scale(1.01);
 }
`;
const SubjName= styled.div`
    background-color: #231955;
    color: white;
    position: absolute;
    text-align: center;
    width: 100%;
    border: 0.2px solid black;
    border-radius: 2px;
   
   bottom: 0px;
`;
