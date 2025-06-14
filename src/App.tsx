import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Projects } from "./components/Projects";
import About from "./components/About";
import {Contact} from "./components/Contact";
import { Hero } from "./components/Hero";
import { Home } from "./components/Home";
import { DogHotelPage } from "./pages/DogHotelPage";
import { QuoteCollectionPage } from "./pages/QuoteCollectionPage";
import { PortfolioPage } from "./pages/PortfolioPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/hero" element={<Hero />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dogHotel" element={<DogHotelPage />} />
        <Route path="/quoteCollection" element={<QuoteCollectionPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Route>
    </Routes>
  );
}

export default App;
