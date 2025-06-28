'use client';

import React from 'react';
import { FaCertificate, FaTrophy, FaFileAlt, FaBook } from 'react-icons/fa';

type AchievementItem = {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  link?: string;
};

const achievements = {
  certifications: [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'July 2025',
      icon: <FaCertificate className="text-green-400" />,
      link: '',
    },
    {
      title: 'IBM Data Engineer Certificate',
      issuer: 'IBM via Coursera',
      date: 'Dec2025',
      icon: <FaCertificate className="text-green-400" />,
      link: '',
    },
  ],
  hackathons: [
    {
      title: 'OwlSpot - Smart Parking',
      issuer: 'KSU Sports Hackathon 2025 - 1st Place',
      date: 'Mar 2025',
      icon: <FaTrophy className="text-yellow-400" />,
      link: 'https://www.linkedin.com/posts/hatchbridge_last-weekend-at-the-sports-innovation-hackathon-ugcPost-7302721381610213376-OUHs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9E7qUBsoePMgU3mPo0rUPv8x14_Uzs9vk',
    },
    {
      title: 'PseudoAI- Leetcode AI Assistant',
      issuer: 'KSU AI Club Hackathon 2024 - 1st Place',
      date: 'Dec 2024',
      icon: <FaTrophy className="text-yellow-400" />,
      link: 'https://pseudoai.dev/',
    },
  ],
  publications: [
    {
      title: 'Adversarial Robustness using Transfer Learning Method: A Cost-Effective Approach',
      issuer: 'AIRC Conference 2025',
      date: 'July 2025',
      icon: <FaBook className="text-blue-400" />,
      link: 'hhttps://www.airc.org/',
    },
    {
      title: 'Defending Against Adversarial Attacks in Deep Learning Models',
      issuer: 'KSU Digital Commons',
      date: 'Dec 2025',
      icon: <FaFileAlt className="text-blue-400" />,
      link: 'https://digitalcommons.kennesaw.edu/undergradsymposiumksu/spring2025/spring2025/314/',
    },
  ],
};





const Section = ({ title, items }: { title: string; items: AchievementItem[] }) => (
  <section className="mb-12">
    <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#1e2633] rounded-xl shadow-md p-5 flex items-start space-x-4 border border-gray-700 hover:scale-[1.01] transition"
        >
          <div className="text-3xl">{item.icon}</div>
          <div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-400 font-semibold hover:underline"
              >
                {item.title}
              </a>
            ) : (
              <h4 className="text-xl text-white font-semibold">{item.title}</h4>
            )}
            <p className="text-gray-300 text-sm">{item.issuer}</p>
            <p className="text-gray-500 text-xs mt-1">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Achievements = () => {
  return (
    <div className="w-full px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Achievements</h2>
      <Section title="Certifications" items={achievements.certifications} />
      <Section title="Hackathons" items={achievements.hackathons} />
      <Section title="Publications" items={achievements.publications} />
    </div>
  );
};

export default Achievements;
