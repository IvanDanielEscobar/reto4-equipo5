import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import SobreNosotros from './pages/SobreNosotros';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SobreNosotros />} />
      </Routes>
      <Footer />
    </Router>
  );
}
