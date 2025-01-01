"use client";
import React from 'react';
import { projects } from "../data/projects"

const Projects: React.FC = () => {
  return (
    <div className="w-full py-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <h2 className="text-3xl font-bold">Pet Projects</h2>
          <img className='w-10 h-10' src='cat.png' alt="cat" />
        </div>
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

