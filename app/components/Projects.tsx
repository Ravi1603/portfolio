'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import {
  FaJs,
  FaReact,
  FaGithub,
  FaAws,
  FaYoutube,
  FaPython,
  FaRobot,
  FaCloud,
} from 'react-icons/fa';
import {
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpenai,
  SiFlask,
  SiNumpy,
  SiNextdotjs,
} from 'react-icons/si';

const icons = {
  js: <FaJs className="text-yellow-400" />,
  react: <FaReact className="text-cyan-400" />,
  github: <FaGithub className="text-gray-300" />,
  aws: <FaAws className="text-orange-400" />,
  youtube: <FaYoutube className="text-red-500" />,
  express: <SiExpress className="text-green-500" />,
  python: <FaPython className="text-blue-400" />,
  flask: <SiFlask className="text-white" />,
  ml: <SiTensorflow className="text-orange-500" />,  // or FaRobot for generic
  dl: <SiPytorch className="text-red-600" />,
  nlp: <SiNumpy className="text-indigo-400" />,
  ai: <SiOpenai className="text-purple-500" />,
  nextjs: <SiNextdotjs className="text-white" />,
  cloud: <FaCloud className="text-blue-300" />
};


const Projects = () => {
  return (
    <div className="w-full px-6">
      <h2 className="text-4xl font-semibold text-center text-white mb-10">My Projects</h2>

      <div className="space-y-12">

        <ProjectCard
          title="Pseudo AI: Leetcode Preparation Assistant"
          description="Developed a fully functional website using NextJS where users can practice LeetCode-style questions. Built a LLM chatbot that provides pseudocode hints to help users solve problems."
          techIcons={[icons.nextjs, icons.react, icons.ai, icons.python, icons.flask, icons.github]}
          demoLink="https://pseudoai.dev/"
          githubLink="https://github.com/Ravi1603/PseudoAI"
          imageUrl="/pseudo.png"
        />

        <ProjectCard
          title="PaperHub: Research Paper Recommender"
          description="A scalable hybrid system that uses Sentence-BERT and citation-based scoring to match scholarly queries to papers. Supports KMeans-based cluster filtering and has a responsive frontend."
          techIcons={[icons.nextjs, icons.react, icons.ai, icons.python, icons.flask, icons.github]}
          demoLink="#"
          githubLink="https://github.com/Ravi1603/PaperHub"
          imageUrl="/paperhub.png"
        />

        <ProjectCard
          title="OwlSpot: AI-assisted Smart Parking App"
          description="An award-winning mobile app for KSU event parking using real-time CCTV + TensorFlow object detection. Combines computer vision, Node.js APIs, and a React Native frontend."
          techIcons={[icons.nextjs, icons.react, icons.ai, icons.python, icons.flask, icons.github]}
          demoLink="https://drive.google.com/file/d/1GmZvok6VBsXf10enGOc1Gw3tOpDY1k64/view?pli=1"
          githubLink="https://github.com/Ravi1603/OwlSpot"
          imageUrl="/owlspot.jpg"
        />

        <ProjectCard
          title="Legal-Insight: Abstractive Summarizer & RAG Chatbot"
          description="Built an NLP model that generates abstractive summaries of lengthy legal documents and a RAG-based chatbot to answer user queries related to the documents and their summaries."
          techIcons={[icons.python, icons.flask, icons.ai, icons.ml, icons.dl, icons.github]}
          demoLink="https://www.youtube.com/watch?v=PLcoLAmYxdc"
          githubLink="https://github.com/Ravi1603/LegalInsight"
          imageUrl="/legal.png"
        />

        <ProjectCard
          title="Portfolio Website"
          description="Personal portfolio site built with Next.js and Tailwind CSS. Fully responsive and deployed on Vercel. Highlights my projects, education, and experience."
          techIcons={[icons.nextjs, icons.react, icons.github, icons.cloud]}
          demoLink="#"
          githubLink="#"
          imageUrl="/portfolio.png"
        />

      </div>
    </div>
  );
};

export default Projects;
