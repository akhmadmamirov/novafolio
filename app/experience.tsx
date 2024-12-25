import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Company Name",
      period: "2022 - Present",
      description: [
        "Led development of key features resulting in 30% increase in user engagement",
        "Collaborated with cross-functional teams to implement new technologies",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Node.js"]
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              
              <ul className="list-disc list-inside mb-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

