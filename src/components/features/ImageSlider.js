/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Features.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Mousewheel } from 'swiper/core';
SwiperCore.use(Mousewheel);

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
                    <SwiperSlide className='feat-items'>
                        <Link to='/blog' className='feat-link'>
                            BLOG
                        </Link>
                    </SwiperSlide>
                </Swiper>       
            </div>
            {/* Image Slider */}
            <Swiper        
            className="imageSwiper"
            mousewheel={true} 
            loop={true}
            speed={800}
            >
                <SwiperSlide>
                    <div className="image-items">
                      <img src="https://static.vecteezy.com/system/resources/previews/000/154/516/original/flat-people-multitasking-vectors.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </div>
                  </SwiperSlide><SwiperSlide>
                    <div className="image-items">
                      <img src="https://img.freepik.com/free-vector/adult-male-multitasking-concept_52683-32632.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620604800" />
                    </div>
                  </SwiperSlide>
            </Swiper>  


        </div>
    );
}

export default FeatureItems;
