import React from 'react'
import './testimonials.css';
import avt1 from '../../images/avatar1.jpg';
import avt2 from '../../images/avatar2.jpg';
import avt3 from '../../images/avatar3.jpg';
import avt4 from '../../images/avatar4.jpg';

import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [

  {
    avatar: avt1,
    name: "Tina Snow",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam, necessitatibus dignissimos voluptatibus voluptatum aspernatur repellat excepturi corporis eius saepe molestias minima tenetur assumenda voluptates neque laudantium reprehenderit rerum consequatur?'
  },
  {
    avatar: avt2,
    name: "Tina Snow",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam, necessitatibus dignissimos voluptatibus voluptatum aspernatur repellat excepturi corporis eius saepe molestias minima tenetur assumenda voluptates neque laudantium reprehenderit rerum consequatur?'
  },
  {
    avatar: avt3,
    name: "Tina Snow",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam, necessitatibus dignissimos voluptatibus voluptatum aspernatur repellat excepturi corporis eius saepe molestias minima tenetur assumenda voluptates neque laudantium reprehenderit rerum consequatur?'
  },
  {
    avatar: avt4,
    name: "Tina Snow",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam, necessitatibus dignissimos voluptatibus voluptatum aspernatur repellat excepturi corporis eius saepe molestias minima tenetur assumenda voluptates neque laudantium reprehenderit rerum consequatur?'
  }
]




const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
        data.map(({avatar, name, review}, index) => {
         return (
          <SwiperSlide key={index} className='testimonial'>
         <div className='client_avatar'>
            <img src={avatar}  />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>
        </SwiperSlide>
         )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials