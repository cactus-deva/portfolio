import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Projects } from "./components/Projects";
import About from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Home } from "./components/Home";
import {ProjectDetailPage} from "./pages/ProjectDetailPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
