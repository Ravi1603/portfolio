import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    degree: "Matsers in Computer Science",
    university: "Kennesaw State University",
    year: "Graduating in December 2025",
    gpa: "GPA 4.0/4.0",
    logo: "/Kennesaw_State_Owls_logo.svg.png",
    highlights: [
      "Major in Computer Science",
      "Minor in AI and Machine Learning",
      "Graduate Research Assistant",
      "Published research in AIRC conference",
      "3 x Dean's List - Spring 2024, Fall 2024, Spring 2025",
    ],
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication",
    university: "R.V.R & J.C. College of Engineering",
    year: "Graduated in 2021",
    gpa: "GPA 8.09/10",
    logo: "/rvrjc_logo.png",
    highlights: [
      "Top 1% of class",
      "Member of IEEE Student Branch",
      "Participated in Hackathons and Coding Competitions",
      "Volunteer for Nataional Service Scheme (NSS)",
    ],
  },
];

const Education = () => {
  return (
    <section className="py-12 bg-[#0b0f19] text-white text-center">
      <h2 className="text-3xl font-semibold mb-10">My Education</h2>
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;