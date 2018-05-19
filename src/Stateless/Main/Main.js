
import React from 'react'
import './Main.css'
import Buttons from '../Buttons/Buttons'

const Main = () => {
  const TxtRotate = (el, toRotate, period) => {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    tick();
    this.isDeleting = false;
  };

  const tick = () => {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      tick();
    }, delta);
  };

  const animation = () => {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

  };

  window.onload = animation;
  window.onclick = animation;
  
  return (
    <div>
      <section className='firstSection' id='intro'>
        <div className='pic' />
        <div className='wrapper'>
          <div className='myInfo'>
            <h4>About Me.</h4>
            <p><b>A software developer</b> looking to help drive technical strategy, product development and go to market, and to help customers leverage said products to further their business goals.</p>   
          </div>    
          <h1>Stephanie Ospina</h1>
          <h2>
            <span
              className='txt-rotate'
              data-period='2000'
              data-rotate='[ "Full Stack Developer", "Web Designer", "Artist" ]'/>
          </h2>
          <ul className='social'>
            <li className='linkedin'/>
            <li className='github'/>
            <li className='email'/>  
          </ul>
        </div>
      </section>
      <Buttons />  
    </div>    
  )
}

export default Main