import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import SobreNosotros from './pages/SobreNosotros';
import Bebidas from './pages/Bebidas';



export default function App() {
    useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
              <div >
                <h1>¡Bienvenido a Gold Burguer!</h1>
                </div>
            } />
        <Route path="/sobre_nosotros" element={<SobreNosotros />} />
        <Route path="/bebidas" element={<Bebidas />} />   
      </Routes>
      <Footer />
    </Router>
  );
}
