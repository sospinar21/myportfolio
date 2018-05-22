import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import MyMapComponent from '../Google/Google';
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
          <MyMapComponent isMarkerShown />
          <div className='contact-info'>
            <div className='logo'>SK</div>
            <div className='my-info'>
              <h5><b>STEPHANIE OSPINA</b></h5>
              <h5>(786) 343 0956</h5>
              <h5>sospinar21@gmail.com</h5>
              <h5>www.skospina.com</h5>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactRouter = withRouter(Contact);
export default ContactRouter;