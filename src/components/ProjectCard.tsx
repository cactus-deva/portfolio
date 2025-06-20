import { Link } from "react-router-dom";
import { Button } from "./Button";

interface ProjectCardProps {
  src: string;
  project: string;
  details: string;
  path: string;
}
export const ProjectCard = ({ src, project, details, path }: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <img src={src} className="h-auto w-auto rounded-lg" />
      <div className="flex flex-col items-start justify-around px-0 md:px-12 my-3 md:my-0">
        <h2 className="text-sm md:text-lg lg:text-2xl font-bold">{project}</h2>
        <span className="text-xs md:text-md lg:text-lg my-5 md:my-0">{details}</span>
        <Link to={`/projects${path}`}>
          <Button text="text-white text-xs md:text-md lg:text-lg" padding="p-2">CASE STUDY</Button>
        </Link>
      </div>
    </div>
  );
};
