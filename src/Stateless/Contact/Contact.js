import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';

const Contact = () => {
  return (
    <div>
      <Buttons />
      <div className='contact-wrapper'>
        <div className='contact-top'>
          <div>
            <h2>Contact Me</h2>
          </div>

        </div>
        <div className='contact-bottom'>
          {/* <div className='black-bgn'/> */}
          <div className='mapouter'>
            <div className='gmap_canvas'>
              <iframe width='2000' height='500'id='gmap_canvas' src='https://maps.google.com/maps?q=denver&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact