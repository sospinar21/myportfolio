import React, { Component } from 'react';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import ebook from '../../assets/e-book.mp4';
import starWars from '../../assets/starwars copy.mov';
import dashboard from '../../assets/ubs copy.mov';

export const eBook = () => {
  return (
    <div>
      <Buttons />
      <div className='portfolio'>
        <section className='e-book'/>
        <section className='e-book-desc'>
          <article className='small-square'>
            <h3>Pocket Book</h3>
            <p>A place to store notes, snippets and links</p>
            <p>First place Code Fair</p>
          </article>
          <article className='big-square'>   
            <video autoPlay muted loop >
              <source src={ebook} type="video/mp4"/>
            </video>
          </article>          
        </section>
      </div>
      <li className='lastProject arrow'><a>Last</a></li>
      <NavLink to='/portfolio/swapi' className='nextProject arrow'><a>Next</a></NavLink>
    </div>
  )
}

export const swapi = () => {
  return (
    <div>
      <Buttons />
      <div className='portfolio'>
        <section className='swapi'>
          <article className='swapi-desc'>
            <article className='swapi-pic'>
              <video autoPlay muted loop id="myVideo">
                <source src={starWars} type="video/mp4"/>
              </video>          

            </article>
            <article className='swapi-video'>
              <article className='swapi-text'/>           
            </article>
            <article className='swapi-vid'/> 
          </article>
        </section>
      </div>
      <NavLink to='/portfolio/ebook' className='lastProject arrow'><a>Last</a></NavLink>
      <NavLink to='/portfolio/static' className='nextProject arrow'><a>Next</a></NavLink>
    </div>
  )
}

export const staticComp = () => {
  return (
    <div>
      <Buttons />
      <div className='portfolio'>
        <section className='static-comp'>
          <article className='dance-app'/>
          <article className='text'/>
        </section>
        <section className='static-comp'>
          <article className='text'/>
          <video className='dashboard' autoPlay muted loop id="myVideo">
            <source src={dashboard} type="video/mp4"/>
          </video>  
        </section>
      </div>
      <NavLink to='/portfolio/swapi' className='lastProject arrow'><a>Last</a></NavLink>
      <li className='nextProject arrow'><a>Next</a></li>
    </div>
  )
}

