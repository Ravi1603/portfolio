import React from 'react';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10 px-4">
      {/* GitHub Button */}
      <a
        href="https://github.com/Ravi1603"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-white text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
      >
        GitHub <FaGithub className="ml-3 text-xl sm:text-2xl" />
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/ravi-rogannagari"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#0d1117] border border-gray-400 text-gray-300 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
      >
        LinkedIn <FaLinkedin className="ml-3 text-xl sm:text-2xl" />
      </a>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/194d7fOTpWh-XvYHjHQXSspu_2sgSVS61/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-gray-200 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
      >
        Resume <FaFilePdf className="ml-3 text-xl sm:text-2xl text-red-600" />
      </a>

      {/* LeetCode Button */}
      <a
        href="https://leetcode.com/u/Ravi1603/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-yellow-200 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
      >
        LeetCode <SiLeetcode className="ml-3 text-xl sm:text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
