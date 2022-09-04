import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


function Contact() {
 

  return (
   <section id="contact">
    <h5 className='contact__h5'>Get In Touch</h5>
    <h2 className='contact__h2'>Contact Us</h2>
    <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
            <MdOutlineMail  className='contact__icon'/>
            <h4>Email</h4>
            <h5>kckr0115@gmail.com</h5>
            <a href="mailto:kckr0115@gmail.com" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option">
            <RiMessengerLine  className='contact__icon'/>
            <h4>Messanger</h4>
            <h5>Kunal chauhan</h5>
            <a href="https://m.me/thakur.kunal.71868/" target="_blank">Send a Message</a>
            </article>

            <article className="contact__option contact__option-end">
            <BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-8791-412-532</h5>
            <a href="https://api.whatsapp.com/send?phone=+918791412532" target="_blank">Send a Message</a>
            </article>
        </div>

        <form >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" placeholder='Your Messege' rows="7"></textarea>
          <button type='submit' className='contact__btn btn-primary' >Send Message</button>
        </form>
    </div>
   </section>
  )
}

export default Contact
