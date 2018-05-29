import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <header>    
      <ul className='menu'>
        <Link to='/' exact={true} className='nav'>HOME</Link>
        <Link to='/portfolio' className='nav'>PORTFOLIO</Link>
        <Link to='/resume' className='nav'>RESUME</Link>
        <Link to='/contact'className='nav'>CONTACT</Link>            
      </ul>
    </header>
  )
}

export default Buttons