"use client";
import React from 'react';
import { projects } from "../data/projects"
import Image from 'next/image';

export default function Projects () {
  return (
    <div className="w-full mb-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <h2 className="text-3xl font-bold">Pet Projects</h2>
          <div className='w-10 h-10 relative'>
            <Image
              src='/cat.png'
              alt='cat'
              layout='fill'
              objectFit='cover'
              className='rounded-full' // example of additional styling
            />
          </div>
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


