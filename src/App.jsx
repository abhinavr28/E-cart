import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import WishList from './Pages/WishList'
import Cart from './Pages/Cart'
import Home from './Pages/Home'



function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
      
      <Footer/>
    </>
  )
}

export default App
