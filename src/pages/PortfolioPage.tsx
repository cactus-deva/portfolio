
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolio from "../assets/portfolio.png";
import background from "../assets/sparkle-bg.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br text-gray-800 mt-20">
      <div
        className="flex flex-col justify-center items-center text-center w-full h-130 p-50"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-lg mb-8 ">
          A clean and bold portfolio built to showcase works, projects, and
          skills, with a focus on clarity, responsive layout, and thoughtful UI
          that reflects my personality.
        </p>
        <Link to={"/"}>
          <Button padding="py-4 px-12">LIVE LINK</Button>
        </Link>
      </div>
      <img
        src={portfolio}
        alt="Project Screenshot"
        className="rounded-md shadow-lg border border-gray-300 mb-10 max-w-1/2 max-h-1/2 m-auto my-20"
      />
      <div className="w-1/2 m-auto">
        <h1 className="text-2xl font-bold my-5">Project Overview 📝 </h1>
        <span>
          This is a project which is a simple and clean multi-page portfolio website template. 
          This project was built for a good-looking and fast-performing with a focus on clarity, responsive layout, 
          and thoughtful UI that reflects my personality.<br/><br/>
          
          Feel free to check out the Project Link.
        </span>
      </div>
      <div className="my-13 w-1/2 m-auto">
        <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {[
            "HTML",
            "React",
            "Tailwind CSS",
            "GitHub",
          ].map((tech) => (
            <li
              key={tech}
              className="bg-gray-100 px-4 py-2 rounded-md font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 my-13 w-1/2 m-auto">
        <a
          href="https://github.com/cactus-deva/portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-purple-700 text-white px-5 py-2 rounded-md hover:animate-pulse"
        >
          <FaGithub /> GitHub
        </a>
        <Link to={"/"}
        
          className="flex items-center gap-2 border-2 border-purple-700 text-black px-5 py-2 rounded-md hover:animate-pulse"
        >
          <FaExternalLinkAlt /> Visit Site
        </Link>
      </div>
    </main>
  );
};
