import { useParams } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
import { Button } from "../components/Button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import background from "../assets/sparkle-bg.png";

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const myProjects = useProjects();
  const project = myProjects.find((p) => p.path === `/${projectId}`);
  if (!project)
    return <div className="text-center mt-20 text-xl">Project Not Found</div>;

  return (
    <main className="min-h-screen text-gray-800 mt-0 md:mt-20">
      <div
        className="flex flex-col justify-center items-center text-center w-full min-h-screen p-10 md:p-50"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-lg md:text-4xl font-bold mb-4">
          {project.project}
        </h1>
        <p className="text-sm md:text-lg mb-8 ">{project.introPage}</p>
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          <Button
            padding="py-2 md:py-4 px-4 md:px-12"
            text="text-white text-sm md:text-md"
          >
            LIVE LINK
          </Button>
        </a>
      </div>
      <img
        src={project.src}
        alt={project.src}
        className="rounded-md shadow-lg border border-gray-300 mb-10 max-w-2/3 md:max-w-1/2 max-h-2/3 md:max-h-1/2 m-auto my-20"
      />
      <div className="w-2/3 md:w-1/2 m-auto">
        <h1 className="text-lg md:text-2xl font-bold my-5">
          Project Overview
        </h1>
        <span className="text-sm md:text-md">
          {project.projectOverviewPage}
          <br /> <br />
          Feel free to check out the project by visiting the live link.
        </span>
      </div>
      <div className="my-13 w-2/3 md:w-1/2 m-auto">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">Tools Used</h2>
        <ul className="flex flex-wrap gap-2 text-xs md:text-sm">
          {project.technology?.map((tech) => (
            <li
              key={tech}
              className="bg-gray-100 px-4 py-2 rounded-md font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 my-13 w-2/3 md:w-1/2 m-auto text-sm md:text-md">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-purple-700 text-white px-5 py-2 rounded-md hover:animate-pulse"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border-2 border-purple-700 text-black px-5 py-2 rounded-md hover:animate-pulse"
        >
          <FaExternalLinkAlt /> Visit Site
        </a>
      </div>
    </main>
  );
};
