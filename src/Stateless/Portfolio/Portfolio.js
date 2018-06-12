import React, { Component } from 'react';
import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import ebook from '../../assets/e-book.mp4';
import starWars from '../../assets/starwars copy.mov';
import dashboard from '../../assets/ubs copy.mov';
import { Redux, ReactLogo, Firebase, Scss, Postgres } from '../../assets/logos'

export const eBook = () => {
  return (
    <div>
    <Buttons />
      <div className='portfolio'>
        <div className='dev-logo-container'>
          <Redux />
          <ReactLogo />
          <Firebase />
        </div>
        <section className='e-book'/>
        <section className='e-book-desc'>
          <article className='small-square'>
            <h3>Pocket Book</h3>
            <p>This app was built for students to import their lessons, save notes, links and documents. </p>
            <br/>
            <p> Built with: <b> React, React-Router, Redux and Firebase </b></p>
            <h4>Winner of 2018 Turing code fair</h4>
          </article>
          <article className='big-square'>   
            <video autoPlay muted loop >
              <source src={ebook} type='video/mp4'/>
            </video>
          </article>          
        </section>
      </div>

      <div className='portfolio padding'>
        <div className='dev-logo-container'>
          <Redux />
          <ReactLogo />
          <Scss />
          <Postgres />
        </div>
        <section className='static-comp'>
          <article className='text'> 
            <h3>Movie Tracker</h3>
            <p>Movie Tracker is a <b>React.js/Redux.js</b> app built with router and a Node.js/express back-end. The app allows users to browse recent movies and save them in their dashboards.</p>
            <a className='link' href='https://github.com/sospinar21/movie-tracker' target='blank'>Link to Repo: https://github.com/sospinar21/movie-tracker </a>
          </article>
          <div className='movie-tracker' />     
        </section>
      </div>

      <div className='portfolio padding'>
        <div className='dev-logo-container'>
          <ReactLogo />
          <Scss />
          <Firebase />
        </div>
        <section className='swapi'>
          <article className='swapi-desc'>
            <article className='swapi-vid'>
              <video autoPlay muted loop id='myVideo'>
                <source src={starWars} type='video/mp4'/>
              </video>          
            </article>
            <article>
              <article className='swapi-info'>
                <article className='swapi-text'>
                  <h3>Swapi-Box</h3>
                  <p>This project was built with <b> React/ React-Router, Redux</b> using the Starwars Api</p>
                  <a className='link' href='https://github.com/sospinar21/SWAPI-box' target='blank'>Link to Repo: https://github.com/sospinar21/SWAPI-box </a>
                  
                </article>           
                <article className='swapi-t'> 
                  <p>An individual project for a Star Wars site. User can select a category of trivia they'd like to see, select favorites, and view favorites on a separate screen. </p>
                </article> 
              </article>
            </article>
          </article>
          <article className='swapi-phone' /> 
        </section>
      </div>

      <div className='portfolio padding'>
        <h2 className='ux'> UX and Design </h2>
        <section className='static-comp'>
          <article className='dashb'/>
          <video className='dashboard' autoPlay muted loop id='myVideo'>
            <source src={dashboard} type='video/mp4'/>
          </video>    
        </section>
        <section className='static-comp'>
          <article className='dance-app'/>
        </section>
      </div>

    </div>
  )
}

