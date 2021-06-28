/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Features.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/components/navigation/navigation.min.css"
import 'swiper/swiper.scss';
import SwiperCore, { Mousewheel, Navigation } from 'swiper/core';
SwiperCore.use([Mousewheel, Navigation]);


function FeatureItems() {
  return (
    <div className='feat-container'>   
      <div className='feat-wrapper'>
        <Swiper
        className="itemSwiper"    
        direction={'horizontal'} 
        slidesPerView={'auto'} 
        spaceBetween={150} 
        mousewheel={true} 
        loop={true}
        speed={800}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >       
          <SwiperSlide className='feat-items'>
            <Link to='/blog' className='feat-link'>
                PROJECTS
            </Link>
          </SwiperSlide>
          <SwiperSlide className='feat-items'>
            <Link to='/workexp' className='feat-link'>
                WORK EXPERIENCE
            </Link>
          </SwiperSlide>
          <SwiperSlide className='feat-items'>
            <Link to='/skills' className='feat-link'>
                SKILLS
            </Link> 
          </SwiperSlide>
          <SwiperSlide className='feat-items'>
            <Link to='/testimonials' className='feat-link'>
                TESTIMONIALS
            </Link>
          </SwiperSlide>
          <SwiperSlide className='feat-items'>
            <Link to='/awards' className='feat-link'>
                AWARDS
            </Link>
          </SwiperSlide>
        </Swiper>       
      </div>
      {/* Image Slider */}
      <div className='image-slider'>
        <Swiper        
        className="imageSwiper"
        cssMode={true}
        navigation={true}
        mousewheel={true}
        hashNavigation={true}
        // speed={800}
        >
          <SwiperSlide>
              <img className="slider-img" data-hash="1" src="https://static.vecteezy.com/system/resources/previews/000/154/516/original/flat-people-multitasking-vectors.jpg" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="slider-img" data-hash="2" src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="slider-img" data-hash="3" src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="slider-img" data-hash="4" src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
              <img className="slider-img" data-hash="5" src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
        </Swiper>  
      </div>
    </div>
  );
}

export default FeatureItems;
