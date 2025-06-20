import { Link } from "react-router-dom";
import myPhoto from "../assets/my-photo.jpeg";

export const Header = () => {
  return (
    <main className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between max-w-screen h-20 px-5 font-light md:font-bold bg-white">
      <div className="profile-logo flex items-center ">
        <div>
          <img
            src={myPhoto}
            className="w-14 h-14 rounded-full p-1 bg-purple-400"
          />
        </div>
        <h1 className="hidden sm:block mx-2">ESTHER MOTHANAPRAKOON</h1>
      </div>
      <div className="flex justify-around w-full md:w-1/2 text-xs md:text-lg">
        <Link to={"/"}>HOME</Link>
         <Link to={"/about"}>ABOUT</Link>
        <Link to={"/projects"}>PROJECTS</Link>
        <Link to={"/contact"}>CONTACT</Link>
      </div>
    </main>
  );
};
