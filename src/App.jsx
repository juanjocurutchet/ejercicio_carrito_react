import React from 'react'
import NavBar from './components/NavBar'
import ProductsList from './components/ProductsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'
import ShoppingCartProvider from './contexts/ShoppingCartContext'
import Footer from './components/Footer'
import Slide from './components/Slide'



function App() {
  
  return (

    <ShoppingCartProvider> 

    <BrowserRouter>
    
      <NavBar />
      <Slide />
      <Routes>

      <Route path='/' element={<ProductsList/>} />
      <Route path='/cart' element={<ShoppingCart />} />

      </Routes>
      <Footer />
    
    </BrowserRouter>

    </ShoppingCartProvider>
  )
}

export default App
