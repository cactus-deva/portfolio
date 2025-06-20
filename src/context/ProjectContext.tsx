import { createContext, useContext } from "react";
import dogHotelPhoto from "../assets/dogHotel.png";
import portfolioPhoto from "../assets/portfolio.png";
import quoteCollectionPhoto from "../assets/quoteCollection.png";


export interface Projects {
    src: string;
    path: string;
    project: string;
    details: string;
    introPage: string;
    projectOverviewPage: string;
    technology: string[];
    github: string;
    liveUrl: string;
}

export const myProjects: Projects[] = [
    {
      src: dogHotelPhoto,
      path: "/dogHotel",
      project: "Dog Hotel Booking Systems",
      details:
        "Dog Hotel Booking Systems is a hotel booking system designed for dogs, where users can manage their own bookings and admins can oversee daily availability and reservations. This is a booking platform built for dog lovers — a project I created to simulate real-world reservation flow while combining it with my personal passion for dogs.",
      introPage:
        "A full-stack web application designed for dog lovers to book cozy hotel rooms for their furry friends. This project was created because of my love for dogs, and to explore the process of designing real-world web systems from scratch.",
      projectOverviewPage:
        "Dog Hotel Booking System is a full-stack web application designed for dog owners to easily book hotel rooms for their beloved pets. I created this project to combine my love for dogs with my Fullstack Development skills and to practice building a real-world booking system from scratch. I explored various pet care websites to study user interface patterns, and drew inspiration from platforms to design a clean, welcoming, and user-friendlyexperience. The system supports responsive design and provides both admin and user roles for managing bookings efficiently.",
      technology: [
        "HTML",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "JWT",
        "Express",
        "PostgreSQL",
      ],
      github: "https://github.com/cactus-deva/dogHotel-frontend",
      liveUrl: "https://doghotel-frontend.onrender.com",
    },
    {
      src: portfolioPhoto,
      path: "/portfolio",
      project: "Portfolio",
      details:
        "Portfolio is a successful Open-Source project that I created which have been featured on some CSS-Tricks & used by thousands of developers globally",
      introPage:
        "A clean and bold portfolio built to showcase works, projects, and skills, with a focus on clarity, responsive layout, and thoughtful UI that reflects my personality.",
      projectOverviewPage:
        "This is a project which is a simple and clean multi-page portfolio website template. This project was built for a good-looking and fast-performing with a focus on clarity, responsive layout, and thoughtful UI that reflects my personality.",
      technology: ["HTML", "React", "Tailwind CSS", "GitHub"],
      github: "https://github.com/cactus-deva/portfolio",
      liveUrl: "/",
    },
    {
      src: quoteCollectionPhoto,
      path: "/quoteCollection",
      project: "Quote Collection",
      details:
        "Quote Collection is a simple web app for creating, editing, and organizing personal quotes — built to explore CRUD operations and client-server interaction. This is one of my earliest projects — it helped me learn about data flow between frontend and backend. I’m now redesigning the UI to match what I’ve learned since then.",
    introPage: "Quote Collection is a minimalist web app for collecting and creating favorite quotes. I built it to explore form handling, routing, and API integration while keeping the interface clean and personal.",
    projectOverviewPage: "Quote Collection is a simple and elegant web application that allows users to browse, collect, and create their favorite quotes. This project was built to practice working with APIs, dynamic routing, and form handling while focusing on delivering a clean and intuitive user experience. The idea behind this project was to create a space that feels personal and inspiring — a digital notebook for thoughts and wisdom. I also plan to improve the UI/UX further based on user feedback and make the interface more modern and engaging.",
    technology: ["HTML",
            "React",
            "Tailwind CSS",
            "JSON server",
            "Responsive Design"],
    github: "https://github.com/cactus-deva/quoteCreate",
    liveUrl: "https://quote-create.vercel.app/"
      },
  ];

  export const ProjectContext = createContext<Projects[]>(myProjects)
  export const useProjects = () => useContext(ProjectContext)