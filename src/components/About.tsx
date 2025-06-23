
import { Button } from "./Button";
export const About = () => {
  const mySkill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Github",
    "SQL",
    "Node.js",
    "Express.js",
  ];
  return (
    <main
      className="flex flex-col items-center justify-center min-w-screen min-h-screen"
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-between items-center w-1/2 max-w-xl text-center mt-20">
        <h1 className="font-bold text-xl md:text-4xl my-10">ABOUT ME</h1>
        <span className="text-sm md:text-lg">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </span>
      </div>
      <div className="flex p-3 md:p-20">
        <div className="flex flex-col flex-1 items-start m-4">
          <h2 className="text-md md:text-2xl font-bold my-2">
            Get to know me!
          </h2>
          <div className="mb-5 text-xs md:text-lg pr-4">
            I'm a
            <strong className="font-semibold"> Frontend Web Developer </strong>
            building and managing the Front-end of Websites and Web Applications
            that leads to the success of the overall product. Check out some of
            my work in the Projects section.
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me via Facebook or
            LinkedIn.
          </div>

          {/* <Link to="/contact">
            <Button padding="p-2" text="text-white text-xs md:text-lg">
              CONTACT
            </Button>
          </Link> */}
        </div>
        <div className="flex flex-col flex-1 m-4 items-start justify-baseline">
          <h2 className="text-md md:text-2xl font-bold my-2">My Skills</h2>
          <div className="text-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 font-semibold auto-rows-fr break-normal">
            {mySkill.map((skill, index) => {
              return (
                <Button
                  key={index}
                  bgColor="bg-gray-100"
                  text="text-black text-xs md:text-lg"
                  padding="p-2"
                >
                  {skill}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
