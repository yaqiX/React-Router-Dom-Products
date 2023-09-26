import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>The Big Header for Testing if Rendered</h1> {/* Added header for testing */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
