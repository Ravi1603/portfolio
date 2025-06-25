import React from 'react';

type EducationCardProps = {
  degree: string;
  university: string;
  year: string;
  gpa: string;
  logo: string;
  highlights: string[];
};

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  university,
  year,
  gpa,
  logo,
  highlights,
}) => {
  return (
    <div className="bg-[#1e2633] max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-2xl shadow-lg">
      <img
        src={logo}
        alt={`${university} Logo`}
        className="w-40 h-40 object-contain"
      />
      <div className="text-left space-y-2">
        <h3 className="text-2xl font-semibold">{degree}</h3>
        <p className="text-lg text-gray-300">{university}</p>
        <p className="text-md text-gray-400">{year}</p>
        <p className="text-md text-gray-400">{gpa}</p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;