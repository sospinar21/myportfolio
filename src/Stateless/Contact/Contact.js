import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import { withRouter } from 'react-router'

const Contact = () => {
  return (
    <div>
      <Buttons />
      <div className='contact-wrapper'>
        <div className='contact-top'>
          <div className='left-box'>
            <h2>Contact Me</h2>
          </div>
          <div className='pic-steph'> 
            <div className='black-bgn' />
          </div>

        </div>
        <div className='contact-bottom'>
          <div className='contact-info'>
            <div className='logo'>SK</div>
            <div className='my-info'>
              <h5><b>STEPHANIE OSPINA</b></h5>
              <h5>(786) 343 0956</h5>
              <h5>sospinar21@gmail.com</h5>
              <h5>www.skospina.com</h5>
            </div>            
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.34175248805!2d-122.57784970645399!3d37.75767917379159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1527131840822" allowfullscreen/>
        </div>
      </div>
    </div>
  )
}

const ContactRouter = withRouter(Contact);
export default ContactRouter;