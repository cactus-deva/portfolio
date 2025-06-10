

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 text-white rounded-r-md">
          <a
            href="https://github.com/cactus-deva"
            className="flex justify-between items-center w-full px-4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub size={25} />
          </a>
        </li>

        <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 text-white rounded-r-md">
          <a
            href="https://www.linkedin.com/in/esther-mothanaprakoon-6686131b8/"
            className="flex justify-between items-center w-full px-4"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={25} />
          </a>
        </li>

        <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-600 text-white rounded-r-md">
          <a
            href="mailto:esther.mothanaprakoon@gmail.com"
            className="flex justify-between items-center w-full px-4"
          >
            Email <FaEnvelope size={25} />
          </a>
        </li>
      </ul>
    </div>
  );
};


