
import dogHotelPhoto from "../assets/dogHotel.png"
import portfolioPhoto from "../assets/portfolio.png"
import { ProjectCard } from "./ProjectCard";
import quoteCollectionPhoto from "../assets/quoteCollection.png"

export const Projects = () => {
  const myProjects = [
    {
      src: dogHotelPhoto,
      path: '/dogHotel',
      project: "Dog Hotel Booking Systems",
      details: "Dog Hotel Booking Systems is a hotel booking system designed for dogs, where users can manage their own bookings and admins can oversee daily availability and reservations. This is a booking platform built for dog lovers — a project I created to simulate real-world reservation flow while combining it with my personal passion for dogs.",
    },
    {
      src: portfolioPhoto,
      path: '/portfolio',
      project: "Portfolio",
      details: "Portfolio is a successful Open-Source project that I created which have been featured on some CSS-Tricks & used by thousands of developers globally",
    },
    {
      src: quoteCollectionPhoto,
      path: '/quoteCollection',
      project: "Quote Collection",
      details: "Quote Collection is a simple web app for creating, editing, and organizing personal quotes — built to explore CRUD operations and client-server interaction. This is one of my earliest projects — it helped me learn about data flow between frontend and backend. I’m now redesigning the UI to match what I’ve learned since then.",
    },
  ];
 
  return (
    <main className="flex flex-col items-center justify-around min-h-screen m-20" data-aos="fade-up">
      <div className="flex flex-col items-center justify-between h-30 max-w-150 text-center">
        <h1 className="text-4xl font-bold">PROJECTS</h1>
        <span>
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </span>
      </div>
      <div className="w-full grid grid-rows-3 grid-cols-1 gap-10 mt-20">
        {myProjects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              src={project.src}
              path={project.path || ""}
              project={project.project}
              details={project.details}
            />
          );
        })}
      </div>
    </main>
  );
};
