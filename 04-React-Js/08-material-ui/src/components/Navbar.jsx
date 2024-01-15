import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/product'>Products</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/login'>login</Link></li>
    </ul>
    </>
  )
}

export default Navbar