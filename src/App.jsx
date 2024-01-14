import './App.css';
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Preguntas from './components/Preguntas/Preguntas'

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Routes>
            <Route path='/' element={<Hero />} />
          </Routes>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<About />} />
          </Routes>
        </main>

        <footer>
          <Routes>
            <Route path='/' element={<Preguntas />} />
          </Routes>
        </footer>
      </BrowserRouter>

    </>
  );
}

export default App
