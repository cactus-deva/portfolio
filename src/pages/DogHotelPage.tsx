// src/pages/ProjectDetail.tsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import dogHotel from "../assets/dogHotel.png";
import background from "../assets/sparkle-bg.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const DogHotelPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br text-gray-800 mt-20">
      <div
        className="flex flex-col justify-center items-center text-center w-full h-130 p-50"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Dog Hotel Booking System</h1>
        <p className="text-lg mb-8 ">
          A full-stack web application designed for dog lovers to book cozy
          hotel rooms for their furry friends. This project was created because
          of my love for dogs, and to explore the process of designing
          real-world web systems from scratch.
        </p>
        <a
          href="https://doghotel-frontend.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Button padding="py-4 px-12">LIVE LINK</Button>
        </a>
      </div>
      <img
        src={dogHotel}
        alt="Project Screenshot"
        className="rounded-md shadow-lg border border-gray-300 mb-10 max-w-1/2 max-h-1/2 m-auto my-20"
      />
      <div className="w-1/2 m-auto">
        <h1 className="text-2xl font-bold my-5">Project Overview 🐾</h1>
        <span>
          Dog Hotel Booking System is a full-stack web application designed for
          dog owners to easily book hotel rooms for their beloved pets. <br />{" "}
          <br />
          I created this project to combine my love for dogs with my Fullstack
          Development skills and to practice building a real-world booking
          system from scratch. I explored various pet care websites to study
          user interface patterns, and drew inspiration from platforms to design
          a clean, welcoming, and user-friendlyexperience. <br /> <br />
          The system supports responsive design and provides both admin and user
          roles for managing bookings efficiently. Feel free to check out the
          project by visiting the live link.
        </span>
      </div>
      <div className="my-13 w-1/2 m-auto">
        <h2 className="text-2xl font-semibold mb-2">Tools Used</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          {[
            "HTML",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "JWT",
            "Express",
            "PostgreSQL",
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
          href="https://github.com/cactus-deva/dogHotel-frontend"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-purple-700 text-white px-5 py-2 rounded-md hover:animate-pulse"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://doghotel-frontend.onrender.com"
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
