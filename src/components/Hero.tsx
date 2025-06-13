import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";
import { Button } from "./Button";

export const Hero = () => {

  return (
    <main
      data-aos="fade-up"
      className="flex flex-col items-center min-h-screen"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center items-center p-40 text-center m-auto">
        <h1 className="text-4xl font-bold">HI, I'M ESTHER MOTHANAPRAKOON</h1>
        <p className="text-lg my-10">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <Link to='/projects'>
        <Button padding="py-3 px-10">PROJECTS</Button>
        </Link>
      </div>
    </main>
  );
};
