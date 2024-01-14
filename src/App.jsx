import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav/nav";
import { Hero } from "./components/hero/hero";
import { Products } from "./components/products/products";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="#" element={<Hero />} />
        </Routes>
        <Hero />
        <Products />
      </BrowserRouter>
    </>
  );
}

export default App;
