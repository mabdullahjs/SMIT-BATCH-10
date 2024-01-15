import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from '../../screens/Home'
import Product from '../../screens/Product'
import Navbar from '../../components/Navbar'
import Register from '../../screens/Register'
import Login from '../../screens/Login'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig