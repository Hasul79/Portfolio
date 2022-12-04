import React from 'react'
import './testimonials.css';
import AVTR1 from '../../images/avatar1.jpg';
import AVTR2 from '../../images/avatar2.jpg';
import AVTR3 from '../../images/avatar3.jpg';
import AVTR4 from '../../images/avatar4.jpg';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar one" />
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto fugit cumque harum maiores! Nesciunt molestiae ducimus non animi fugit iusto ratione eaque voluptatibus!
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR2} alt="Avatar one" />
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto fugit cumque harum maiores! Nesciunt molestiae ducimus non animi fugit iusto ratione eaque voluptatibus!
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR3} alt="Avatar one" />
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto fugit cumque harum maiores! Nesciunt molestiae ducimus non animi fugit iusto ratione eaque voluptatibus!
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR4} alt="Avatar one" />
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto fugit cumque harum maiores! Nesciunt molestiae ducimus non animi fugit iusto ratione eaque voluptatibus!
            </small>
          </div>
        </article>
      </div>

      </section>
  )
}

export default Testimonials