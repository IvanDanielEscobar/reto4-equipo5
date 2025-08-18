import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Bebidas from './pages/Bebidas';
import Hamburguesas from './pages/Hamburguesas';
import Papas from './pages/Papas';
import './styles/global.css';



export default function App() {
    useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre_nosotros" element={<SobreNosotros />} />
        <Route path="/bebidas" element={<Bebidas />} />  
        <Route path='/papas' element= {<Papas />} /> 
        <Route path='/hamburguesas' element= {<Hamburguesas />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}
