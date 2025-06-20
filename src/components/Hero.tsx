import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";
import { Button } from "./Button";

export const Hero = () => {

  return (
    <main
      data-aos="fade-up"
      className="flex flex-col items-center min-h-screen w-full"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center items-center p-40 text-center">
        <h1 className="text-xl md:text-4xl font-bold">HI, I'M ESTHER MOTHANAPRAKOON</h1>
        <p className="text-sm md:text-lg my-10">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <Link to='/projects'>
        <Button padding="py-2 md:py-3 px-4 md:px-10" text="text-white text-sm md:text-md" >PROJECTS</Button>
        </Link>
      </div>
    </main>
  );
};
