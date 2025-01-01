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
import TypeScriptLogo from '../../assets/images/techno/typescript.png';
import JavaLogo from '../../assets/images/techno/java_100px.png';
import DjangoLogo from '../../assets/images/techno/django_100px.png';
import ReactLogo from '../../assets/images/techno/react_100px.png';
import AngularLogo from '../../assets/images/techno/angularjs_100px.png';
import ScikitLearnLogo from '../../assets/images/techno/Scikit_learn.png';
import TensorFlowLogo from '../../assets/images/techno/tensorflow.png';

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
      spaceBetween={10}
      slidesPerView={4}
    >
      <SwiperSlide>
        <AsyncImage imageUrl={TypeScriptLogo} alt="javascript logo" />
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
        <AsyncImage imageUrl={ScikitLearnLogo} alt="angular logo" />
      </SwiperSlide>
      <SwiperSlide>
        <AsyncImage imageUrl={TensorFlowLogo} alt="angular logo" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCarousel;
