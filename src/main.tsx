import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { myProjects, ProjectContext } from "./context/ProjectContext.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <ProjectContext.Provider value={myProjects}>
        <ScrollToTop />
        <App />
      </ProjectContext.Provider>
    </BrowserRouter>
  </>
);
