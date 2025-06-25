'use client';

import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  techIcons: React.ReactNode[]; // Accepts rendered JSX elements now
  demoLink?: string;
  githubLink?: string;
  imageUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techIcons,
  demoLink,
  githubLink,
  imageUrl,
}) => {
  return (
    <div className="bg-[#1e2633] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-10 w-full">
      {/* Left - Details */}
      <div className="md:w-1/2 text-white space-y-4">
        <h3 className="text-3xl font-bold">{title}</h3>

        <div className="flex items-center space-x-3 text-sm text-gray-300">
          <span className="font-semibold">Made with:</span>
          {techIcons.map((icon, idx) => (
            <span key={idx} className="text-xl">{icon}</span>
          ))}
        </div>

        <p className="text-gray-300 text-base leading-relaxed">{description}</p>

        <div className="flex space-x-4 pt-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-2 py-1 rounded-full bg-white text-black font-semibold text-sm shadow hover:scale-105 transition"
            >
              GitHub
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-2 py-1 rounded-full border border-white text-white text-sm hover:bg-white hover:text-black transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Right - Image */}
      {/* Right - Image */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          className="rounded-xl border border-gray-700 shadow-lg max-h-[400px] w-full object-contain bg-[#0f172a] p-2"
        />
      </div>

    </div>
  );
};

export default ProjectCard;
