import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 flex flex-col items-center gap-4 text-sm tracking-wide">
      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/cactus-deva"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/esther-mothanaprakoon-6686131b8/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-400 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/ster.mothanaprakoon/"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
      </div>
      <p className="opacity-80">Built & Designed by Esther Mothanaprakoon</p>
      <p className="opacity-60">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};
