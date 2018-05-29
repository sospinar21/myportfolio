
import React from 'react'
import './Main.css'
import Buttons from '../Buttons/Buttons'
import {NavLink} from 'react-router-dom'

const Main = () => {
  
  return (
    <div>
      <div className='main-container'>
        <section className='firstSection' id='intro'>
          <div className='wrapper'/>
          <div className='info-container'>
            <div className='myInfo'>
              <h1>Stephanie Ospina</h1>
              <p>Business oriented, tech driven <b>software developer</b> with a passion for designing and building solutions that make life easier for businesses and consumers.</p>   
            </div>    
            <ul className='social'>
              <a href='https://www.linkedin.com/in/stephanieospina10/' target='blank'><li className='linkedin'/></a>
              <a href='https://github.com/sospinar21' target='blank'><li className='github'/></a>
              <NavLink to='contact'><li className='email'/></NavLink>
              
            </ul>
          </div>
        </section>
        <section className='pic-container'>
          <NavLink to= './portfolio' className='pic1'>
            <div className='wrapper2'/>            
          </NavLink>
          <NavLink to= './portfolio' className='pic2'>
            <div className='wrapper2'/>            
          </NavLink>
          <NavLink to= './portfolio' className='pic3'>
            <div className='wrapper2'/>        
          </NavLink>
        
        </section>
      </div>
      <Buttons />  
    </div>    
  )
}

export default Main