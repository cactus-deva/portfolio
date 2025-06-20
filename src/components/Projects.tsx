import { ProjectCard } from "./ProjectCard";
import { useProjects } from "../context/ProjectContext";
import background from "../assets/background.png"

export const Projects = () => {
  const myProjects = useProjects();

  return (
    <main
      className="flex flex-col items-center justify-around min-h-screen p-20"
      data-aos="fade-up"
      style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}
    >
      <div className="flex flex-col items-center justify-between h-30 max-w-150 text-center">
        <h1 className="text-lg md:text-4xl font-bold my-6">PROJECTS</h1>
        <span className="text-sm md:text-lg">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </span>
      </div>
      <div className="w-full grid grid-cols-1 gap-14 mt-20">
        {myProjects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              src={project.src || ""}
              path={project.path || ""}
              project={project.project || ""}
              details={project.details || ""}
            />
          );
        })}
      </div>
    </main>
  );
};
