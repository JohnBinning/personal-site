import React from 'react';
import '../../stylesheets/Contact.css';

const Contact = () => {
  return (
    <section className="Contact">
      <h2 className='location-title'>Contact</h2>
      <form action="https://formspree.io/john.binning17@gmail.com"
      method="POST">
        <label htmlFor='name'>Your name</label>
        <input 
          className='contact-input' 
          type="text" 
          name="name" 
          aria-label='your name'
          placeholder="Jane Doe"
          required/>
        <label htmlFor='email'>Your email</label>
        <input 
          className='contact-input' 
          type="email" 
          name="_replyto"
          aria-label='your email' 
          placeholder="email@example.com"
          required/>
        <label htmlFor='message'>Your message</label>
        <textarea 
          rows="4"
          className='contact-input' 
          type="text" 
          name="message" 
          aria-label='your message'
          placeholder="Your Message"
          required/>
        <button 
          className='contact-input submit-btn' 
          type="submit">
          Send
        </button>
      </form>
    </section>
  )
};

export default Contact;