import React from 'react'

const BioCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-white p-6 max-w-4xl mx-auto mt-20">
      <img
        src="/profile-pic.png"
        alt="Profile"
        className="w-60 h-60 md:w-70 md:h-70 rounded-full object-cover border-4 border-white shadow-md mb-6 md:mb-0 md:mr-8"
      />
      <div className="text-xl md:text-2xl leading-relaxed space-y-4 text-center md:text-left">
        <p><strong>Hi, I’m Ravi</strong> — a software engineer passionate about solving real-world problems with code.</p>
        <p>I have experience in <span className="text-blue-600">data engineering</span>, <span className="text-blue-500">machine learning</span>, and <span className="text-blue-400">web development</span>.</p>
        <p>I love building systems that are both smart and scalable. Learning never stops—so I’m always exploring new tools and ideas.</p>
      </div>
    </div>
  )
}

export default BioCard
