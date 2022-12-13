import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_27ztplk', 'template_yifjgzg', form.current, 'iAbM6DRWswzaeu4Jw')
          e.target.reset()
      }; 
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            
            <div className="container contact_container">
                <div className="contact_options">
                   <article className="contact_option">
                   <MdOutlineMail className='contact_option_icon'/>
                    <h4>Email</h4>
                    <h5>hasmikminasyan.1979@gmail.com</h5>
                    <a href="mailto:hasmikminasyan.1979@gmail.com" target="_blank">Send a message</a>
                    </article> 

                    <article className="contact_option">
                   <RiMessengerLine className='contact_option_icon'/>
                    <h4>Messenger</h4>
                    <h5>hasmik.minasyan</h5>
                    <a href="https://m.me/hasmik.minasyan.g" target="_blank">Send a message</a>
                    </article> 

                    <article className="contact_option">
                   <BsWhatsapp className='contact_option_icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+123456789</h5>
                    <a href="https://api.whatsapp.com/send?phone+37477074377"  target="_blank">Send a message</a>
                    </article> 
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="text" name="email" placeholder='Your Email' required/>
                    <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact