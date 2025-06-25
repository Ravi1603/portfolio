import {
  FaPython, FaDatabase, FaLinux, FaProjectDiagram, FaWarehouse,
  FaHtml5, FaCss3Alt, FaJsSquare, FaNpm, FaReact,
  FaTable, FaChartBar, FaGithub, FaDocker
} from 'react-icons/fa';
import {
  SiApachespark, SiApacheairflow, SiApachekafka, SiPostgresql,
  SiMysql, SiMongodb, SiDatabricks, SiNextdotjs, SiTailwindcss,
  SiPytorch, SiKeras, SiNumpy, SiPandas, SiTableau, SiHuggingface,
  SiKubernetes, SiAmazon, SiVercel
} from 'react-icons/si';

// 🛠 Data Engineering Skills
const dataEngineeringSkills = [
  { icon: <FaPython color="#3776ab" />, label: "Python" },
  { icon: <FaDatabase color="#f29111" />, label: "SQL" },
  { icon: <SiApachespark color="#e25a1c" />, label: "Apache Spark" },
  { icon: <SiApacheairflow color="#017cee" />, label: "Apache Airflow" },
  { icon: <SiApachekafka color="#231f20" />, label: "Apache Kafka" },
  { icon: <SiDatabricks color="#ff3621" />, label: "Databricks" },
  { icon: <SiPostgresql color="#336791" />, label: "PostgreSQL" },
  { icon: <SiMysql color="#00758f" />, label: "MySQL" },
  { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
  { icon: <FaLinux color="#000000" />, label: "Linux" },
  { icon: <FaChartBar color="#d24726" />, label: "Power BI" }, // Placeholder icon
  { icon: <SiTableau color="#e97627" />, label: "Tableau" },
  { icon: <FaProjectDiagram color="#4caf50" />, label: "ETL Processes" },
  { icon: <FaWarehouse color="#6e6e6e" />, label: "Data Warehouses" },
  { icon: <FaProjectDiagram color="#9c27b0" />, label: "Data Modeling" },
  { icon: <FaProjectDiagram color="#03a9f4" />, label: "Data Pipelines" },
];

// 🧠 Machine Learning / Deep Learning Skills
const mlSkills = [
  { icon: <SiPandas color="#150458" />, label: "Pandas" },
  { icon: <SiNumpy color="#013243" />, label: "NumPy" },
  { icon: <FaChartBar color="#f44336" />, label: "Matplotlib" },
  { icon: <SiKeras color="#d00000" />, label: "Keras" },
  { icon: <SiPytorch color="#ee4c2c" />, label: "PyTorch" },
  { icon: <FaProjectDiagram color="#673ab7" />, label: "Deep Learning" },
  { icon: <FaProjectDiagram color="#009688" />, label: "Computer Vision" },
  { icon: <SiHuggingface />, label: "Hugging Face" },
];

const frontendSkills = [
  { icon: <FaHtml5 color="#e34c26" />, label: "HTML5" },
  { icon: <FaCss3Alt color="#1572b6" />, label: "CSS3" },
  { icon: <FaJsSquare color="#f7df1e" />, label: "JavaScript" },
  { icon: <FaNpm color="#cb3837" />, label: "npm" },
  { icon: <FaReact color="#61dafb" />, label: "React.js" },
  { icon: <SiNextdotjs color="#000000" />, label: "Next.js" },
  { icon: <SiTailwindcss color="#38bdf8" />, label: "Tailwind CSS" },
];

// 🛠 Tools
const tools = [
  { icon: <FaGithub color="#fff" />, label: "GitHub" },
  { icon: <FaDocker color="#2496ed" />, label: "Docker" },
  { icon: <SiKubernetes color="#326ce5" />, label: "Kubernetes" },
  { icon: <SiAmazon color="#ff9900" />, label: "AWS" },
  { icon: <SiVercel color="#000" />, label: "Vercel" },
];

export default function Skills() {
  return (
    <div className="w-full px-6 py-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="flex flex-col gap-12 items-center">

        {/* Data Engineering */}
        <div className="flex flex-row items-center w-full max-w-6xl min-h-[180px]">
          <div className="w-1/4 min-w-[120px] flex justify-start">
            <h3 className="text-2xl font-semibold text-left px-2">Data Engineering</h3>
          </div>
          <div className="w-3/4 flex flex-wrap gap-4 justify-start">
            {dataEngineeringSkills.map((skill) => (
              <SkillItem key={skill.label} {...skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full flex justify-center">
          <hr className="border-t border-gray-600 w-4/5 my-2" />
        </div>

        {/* ML Engineering */}
        <div className="flex flex-row items-center w-full max-w-6xl min-h-[180px]">
          <div className="w-1/4 min-w-[120px] flex justify-start">
            <h3 className="text-2xl font-semibold text-left px-2">ML Engineering</h3>
          </div>
          <div className="w-3/4 flex flex-wrap gap-4 justify-start">
            {mlSkills.map((skill) => (
              <SkillItem key={skill.label} {...skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full flex justify-center">
          <hr className="border-t border-gray-600 w-4/5 my-2" />
        </div>

        {/* Frontend */}
        <div className="flex flex-row items-center w-full max-w-6xl min-h-[180px]">
          <div className="w-1/4 min-w-[120px] flex justify-start">
            <h3 className="text-2xl font-semibold text-left px-2">Frontend</h3>
          </div>
          <div className="w-3/4 flex flex-wrap gap-4 justify-start">
            {frontendSkills.map((skill) => (
              <SkillItem key={skill.label} {...skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full flex justify-center">
          <hr className="border-t border-gray-600 w-4/5 my-2" />
        </div>

        {/* Tools */}
        <div className="flex flex-row items-center w-full max-w-6xl min-h-[120px]">
          <div className="w-1/4 min-w-[120px] flex justify-start">
            <h3 className="text-2xl font-semibold text-left px-2">Tools</h3>
          </div>
          <div className="w-3/4 flex flex-wrap gap-4 justify-start">
            {tools.map((tool) => (
              <SkillItem key={tool.label} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type SkillItemProps = {
  icon: React.ReactNode;
  label: string;
};

function SkillItem({ icon, label }: SkillItemProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition-all min-w-[110px] min-h-[48px]">
      <div className="text-xl">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}