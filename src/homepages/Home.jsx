import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Land from './Land'
import { Header } from './Header';
import Footer from './Footer';
Header
const Home = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route path='/' element={<Land />} />
          <Route path='/Aboutus' element={<Land />} />

        </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default Home