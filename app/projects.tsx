"use client";
import React from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "AI Analytics Dashboard",
    description: "Real-time machine learning analytics platform",
    link: "https://example.com/ai-dashboard"
  },
  {
    id: 2,
    name: "Cloud Migration Tool",
    description: "Enterprise cloud infrastructure migration suite",
    link: "https://example.com/cloud-migration"
  },
  {
    id: 3,
    name: "IoT Monitoring System",
    description: "Smart device monitoring and management",
    link: "https://example.com/iot-monitoring"
  },
  {
    id: 4,
    name: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet application",
    link: "https://example.com/blockchain-wallet"
  },
  {
    id: 5,
    name: "AR Navigation App",
    description: "Augmented reality indoor navigation",
    link: "https://example.com/ar-navigation"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="w-full py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Pet Projects</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-semibold" style={{ color: '#a855f7' }}>
              {project.name}
            </h3>
            <p className="text-gray-600 mt-1">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

