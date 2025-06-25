import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-8 mt-10">
      {/* GitHub Button */}
      <a
        href="https://github.com/Ravi1603"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-white text-black font-semibold px-8 py-4 text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        GitHub <FaGithub className="ml-3 text-2xl" />
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/ravi-rogannagari"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#0d1117] border border-gray-400 text-gray-300 font-semibold px-8 py-4 text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        LinkedIn <FaLinkedin className="ml-3 text-2xl" />
      </a>

      {/* LeetCode Button */}
      <a
        href="https://leetcode.com/u/Ravi1603/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-yellow-200 text-black font-semibold px-8 py-4 text-lg rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        LeetCode <SiLeetcode className="ml-3 text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;