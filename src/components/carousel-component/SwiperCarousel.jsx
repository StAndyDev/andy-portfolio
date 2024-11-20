// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"; // Styles pour la pagination
import { Autoplay } from 'swiper/modules';

import AsyncImage from "../AsyncImage/AsyncImage";
import JavascriptLogo from '../../assets/images/techno/javascript_100px.png';
import PhpLogo from '../../assets/images/techno/php_logo_100px.png';
import JavaLogo from '../../assets/images/techno/java_100px.png';
import DjangoLogo from '../../assets/images/techno/django_100px.png';
import ReactLogo from '../../assets/images/techno/react_100px.png';
import AngularLogo from '../../assets/images/techno/angularjs_100px.png';
import BootstrapLogo from '../../assets/images/techno/bootstrap_100px.png';

function SwiperCarousel() {

  return (
    <Swiper
      className='swiper-carousel'
      modules = {[Autoplay, Pagination]}  //activation des modules
      autoplay = {{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop = {true}
      // navigation={true}

      spaceBetween={10}
      slidesPerView={4}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <AsyncImage imageUrl={JavascriptLogo} alt="javascript logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={PhpLogo} alt="php logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={JavaLogo} alt="java logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={DjangoLogo} alt="django logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={ReactLogo} alt="react logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={AngularLogo} alt="angular logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={BootstrapLogo} alt="bootstrap logo" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCarousel;
