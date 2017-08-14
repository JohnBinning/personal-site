import React from 'react';
import '../../stylesheets/Contact.css';

const Contact = () => {
  return (
    <section className="Contact">
      <form action="https://formspree.io/john.binning17@gmail.com"
      method="POST">
        <input className='contact-input' type="text" name="name" placeholder="Your Name"/>
        <input className='contact-input' type="email" name="_replyto" placeholder="Your Email"/>
        <input className='contact-input' type="textarea" name="text" placeholder="Your Message"/>
        <input className='contact-input' type="submit" value="Send"/>
      </form>
    </section>
  )
};

export default Contact;