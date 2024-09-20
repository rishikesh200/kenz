import React from 'react'
import ex from './../../assets/land/landtest/extest.png';
import './Landtestslider.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
const Landtestslider = () => {


  return (
    <div>
    <Swiper
    
  
 
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[ Autoplay, Pagination]}
    className="landtestcon"
  >
    <SwiperSlide className='landtestcard'>
        <div className="testcusdet">
            <img src={ex} alt="" />
            <div className="testcustext">
                <h1>STEAVE</h1>
                <p>happy tomer</p>
            </div>
        </div>
        <div className="testdes">Our primary objective is to deliver highly efficient and impactful iron removal and water purification solutions to our valued customers.</div>
        <div className='teststar'>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>5/5</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className='landtestcard'>
        <div className="testcusdet">
            <img src={ex} alt="" />
            <div className="testcustext">
                <h1>HARY</h1>
                <p>happy customer</p>
            </div>
        </div>
        <div className="testdes">Our primary objective is to deliver highly efficient and impactful iron removal and water purification solutions to our valued customers.</div>
        <div className='teststar'>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>5/5</p>
        </div>
    </SwiperSlide>
    <SwiperSlide className='landtestcard'>
        <div className="testcusdet">
            <img src={ex} alt="" />
            <div className="testcustext">
                <h1>SMITH</h1>
                <p>happy customer</p>
            </div>
        </div>
        <div className="testdes">Our primary objective is to deliver highly efficient and impactful iron removal and water purification solutions to our valued customers.</div>
        <div className='teststar'>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>5/5</p>
        </div>
    </SwiperSlide>
</Swiper>
</div>
  )
}

export default Landtestslider