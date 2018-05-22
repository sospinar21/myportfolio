import React from 'react'
import { NavLink } from 'react-router-dom'

const Buttons = () => {
  return (
    <header>    
      <ul className='menu'>
        <NavLink to='/' exact={true} className='nav'>HOME</NavLink>
        <NavLink to='/portfolio/ebook' className='nav'>PORTFOLIO</NavLink>
        <NavLink to='/resume' className='nav'>RESUME</NavLink>
        <NavLink to='/contact'className='nav'>CONTACT</NavLink>            
      </ul>
    </header>
  )
}

export default Buttons