import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul className='flex justify-evenly mt-2'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='about'>About</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
            <li>
              <Link to='product'>Product</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar