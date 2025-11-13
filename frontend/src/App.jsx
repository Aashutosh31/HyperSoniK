import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Header/Navbar.jsx'
import HeroSection from './components/Home/HeroSection.jsx';  
import ProductsPage from './components/Products/ProductsPage.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path="/products" element={<ProductsPage  />}/>
      </Routes>
    </Router>
  )
}
export default App;