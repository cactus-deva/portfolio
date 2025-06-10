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
    <div className="grid grid-cols-2">
      <img src={src} className="h-100 w-250 rounded-lg" />
      <div className="flex flex-col items-start justify-evenly p-12">
        <h2 className="text-2xl font-bold">{project}</h2>
        <span>{details}</span>
        <Link to={path}>
          <Button>CASE STUDY</Button>
        </Link>
      </div>
    </div>
  );
};
