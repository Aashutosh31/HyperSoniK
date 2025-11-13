import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Header/Navbar"
import HeroSection from "./components/Home/HeroSection"
import ProductsPage from "./components/Products/ProductsPage"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default App
