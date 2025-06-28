'use client';

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Intern",
    company: "Georgia Municipal Association",
    date: "May 2025 - Aug 2025",
    description: `Developed interactive full-stack dashboards to monitor and visualize the impact of GMA programs. Built dynamic front-end interfaces using Next.js (React) and deployed via Vercel. Designed and integrated RESTful APIs for backend data management. Optimized data pipeline, reducing fetch time by 70% to enhance user experience.`,
    logo: "/g_logo.jpg",
  },
  {
    title: "Graduate Research Assistant",
    company: "Kennesaw State University",
    date: "Mar 2024 - May 2025",
    description: `Developed deep learning models to defend against adversarial patch attacks. Published a research paper at AIRC. Improved accuracy under attack from 2% to 81% using robustness training and worked on strategies to transfer robustness across CNN architectures.`,
    logo: "/ksu_logo.png",
  },
  {
    title: "Data Engineer",
    company: "Tata Consultancy Services",
    date: "May 2021 - Sep 2023",
    description: `Developed 30+ Databricks notebooks for ETL and data transformation. Used PySpark for distributed data processing, improving efficiency. Automated job scheduling for seamless data workflow execution. Employed Databricks Repos for version control and deployment.`,
    logo: "/Tata_Consultancy_Services_old_logo.svg.png",
  },
];

export default function Experience() {
  return (
    <div className="relative px-4 sm:px-10 py-16 bg-[#0b0f19] text-white">
      <h2 className="text-4xl font-bold text-center mb-16">My Experience</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        <div className="flex flex-col gap-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isLeft ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                {/* Timeline dot with white outline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center border-[6px] border-gray-900 z-10 shadow-md">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={56}
                      height={56}
                      className="object-contain w-14 h-14"
                      style={{ width: 56, height: 56 }}
                    />
                  </div>
                </div>
                {/* Date - on opposite side of card */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 text-sm text-gray-400 w-40 ${
                    isLeft ? 'left-[calc(50%+3rem)] text-left' : 'right-[calc(50%+3rem)] text-right'
                  }`}
                >
                  {exp.date}
                </div>
                {/* Card */}
                <div
                  className={`bg-gray-800 p-6 rounded-xl shadow-md w-full sm:w-[48%] relative ${
                    isLeft ? 'sm:ml-0 sm:mr-auto' : 'sm:mr-0 sm:ml-auto'
                  }`}
                >
                  {/* Arrow pointer */}
                  <div
                    className={`absolute top-6 ${
                      isLeft
                        ? '-right-3 border-l-gray-800'
                        : '-left-3 border-r-gray-800'
                    } w-0 h-0 border-y-8 border-y-transparent border-l-8 border-r-8`}
                  ></div>
                  <h3 className="text-md font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm font-semibold mb-3">{exp.company}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                    {exp.description.split('. ').filter(Boolean).map((point, idx) => (
                      <li key={idx}>
                        {point.trim().endsWith('.') ? point.trim() : point.trim() + '.'}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}