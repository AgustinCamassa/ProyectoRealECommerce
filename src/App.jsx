import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav/nav";
import { Hero } from "./components/hero/hero";
import { Products } from "./components/products/products";
import "./App.css";
import "./index.css";

import Footer from "./components/footer/Footer";
import Preguntas from "./components/Preguntas/Preguntas";
import About from "./components/about/about";
import { TextProvider } from "./components/products/textContent/textContent";

function App() {
  return (
    <>
      <TextProvider>
        <BrowserRouter>
          <header>
            <Navbar />
            <Routes>
              <Route path="#" element={<Hero />} />
            </Routes>
          </header>

          <main>
            <Hero />
            <About />
            <Products />
            <Preguntas />
          </main>

          <Footer />
        </BrowserRouter>
      </TextProvider>
    </>
  );
}

export default App;
