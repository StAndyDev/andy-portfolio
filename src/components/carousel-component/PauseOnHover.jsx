import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import AsyncImage from "../AsyncImage/AsyncImage";
import JavascriptLogo from '../../assets/images/techno/javascript_100px.png';
import PhpLogo from '../../assets/images/techno/php_logo_100px.png';
import JavaLogo from '../../assets/images/techno/java_100px.png';
import DjangoLogo from '../../assets/images/techno/django_100px.png';
import ReactLogo from '../../assets/images/techno/react_100px.png';
import AngularLogo from '../../assets/images/techno/angularjs_100px.png';
import BootstrapLogo from '../../assets/images/techno/bootstrap_100px.png';


function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div>
          <AsyncImage imageUrl={JavascriptLogo} alt="javascript logo" />
        </div>
        <div>
          <AsyncImage imageUrl={PhpLogo} alt="php logo" />
        </div>
        <div>
          <AsyncImage imageUrl={JavaLogo} alt="java logo" />
        </div>
        <div>
          <AsyncImage imageUrl={DjangoLogo} alt="django logo" />
        </div>
        <div>
          <AsyncImage imageUrl={ReactLogo} alt="react logo" />
        </div>
        <div>
          <AsyncImage imageUrl={AngularLogo} alt="angular logo" />
        </div>
        <div>
          <AsyncImage imageUrl={BootstrapLogo} alt="bootstrap logo" />
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
