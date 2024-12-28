"use client";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Prevent fontawesome from dynamically adding its css
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
});

// Define the Experience type
type Experience = {
  startDate: string;
  endDate: string;
  company: string;
  title: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  images?: string[];
  skills?: string[];
  team?: string;
  location?: string;
};

// Separate experience data structures
const internshipExperiences: Experience[] = [
  {
    startDate: "05/2025",
    endDate: "08/2025",
    company: "Salesforce",
    title: "Software Engineer",
    description: "This summer I will be joining Salesforce as a Software Engineer Intern. I will be working on Public Cloud team based in San Francisco.",
    team: "Public Cloud",
    location: "San Francisco, CA",
    logoSrc: "/salesforce_logo.png",
    logoAlt: "Salesforce Logo",
    skills: ["Go", "K8s", "AWS", "Microservices"],
  },
  {
    startDate: "05/2024",
    endDate: "08/2024",
    company: "Electronic Arts",
    title: "Software Engineer",
    description: "I worked in Commerce, Identity, and Security teams. I designed new UI components and built a new server for managing and troubleshooting player information for our developers and partners. I deployed this new platform with improved access control, auditing, and extensive depth-first search capabilities.",
    team: "Commerce, Identity and Security",
    location: "Redwood City, CA",
    logoSrc: "/ea_logo.jpg",
    logoAlt: "EA Logo",
    images: ["/ea_sims.png", "/ea_group.png", "/ea_hq2.png", "/ea_hq.png"],
    skills: ["Java", "React", "Express", "AWS", "Docker"],
  },
  {
    startDate: "05/2023",
    endDate: "07/2023",
    company: "AtomRain Inc.",
    title: "Software Engineer",
    description: "I upgraded features in the Security, Payments, and Billing components of the GraphGrid Connected Data Platform at AtomRain Inc. I reduced network latency by leading updates of Node.js and React across our codebase. Additionally, I refined UI components for Amazon EC2 instance allocations and grid configurations.",
    team: "Security, Payments and Billing",
    location: "Santa Monica, CA",
    logoSrc: "/atomrain_logo.jpeg",
    logoAlt: "Atomrain Logo",
    skills: ["JavaScript", "React", "Node.js", "Neo4j"],
  },
];

const collegeExperiences: Experience[] = [
  {
    startDate: "2023",
    endDate: "Present",
    company: "Google Developer Group",
    title: "Founder & Lead | Google Developer Group",
    description: "I founded and lead team of 8 students to create the first CS club in our college in collaboration with Google Developer Group. I organized events, workshops and knowledge share sessions to help students learn about Google technologies and prepare for early career opportunities.",
    images: ["/google_io.png", "/google_io2.png"],
    logoSrc: "/gdg_group.png",
    logoAlt: "Wooster Logo",
    skills: ["Flutter", "Firebase", "Google Cloud"],
  },
  {
    startDate: "10/2023",
    endDate: "05/2024",
    company: "The College of Wooster",
    title: "AI Research Assistant",
    description: "I worked on a research project to start a new course on Generative AI at Wooster with Dr. Palmer. I mentored a Non-stem student on how to use Generative AI tools to build a model to identify misspelled names in a vast dataset of passenger lists and crew manifests from the French Companys ships from 1700s.",
    logoSrc: "/wooster.jpeg",
    logoAlt: "Wooster Logo",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
  },
];

export default function FirstPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes growLine {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
      `}</style>

      <main className="min-h-screen flex flex-col items-center pt-24 px-4 sm:px-8">
        {/* Profile section */}
        <div className="flex flex-col md:flex-row items-start gap-20 max-w-4xl w-full">
          <div className="w-48 h-48 relative animate-fade-in-up">
            <Image
              src="/profile.png" 
              alt="Profile picture"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          
          <div className="text-center md:text-left animate-fade-in-up delay-1">
            <div className="flex items-center gap-2">
              <h1 className={`text-4xl font-bold mb-4 ${sourceCodePro.className}`}>
                Akhmadillo Mamirov
              </h1>
              <div className="mt-5 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-[#a770ad] mb-4"></div>
            </div>
            <p className="text-lg mb-4 bg-gradient-to-r from-orange-500 to-[#a770ad] inline-block text-transparent bg-clip-text">
              Hi, I am Akhmad. Nice to meet you!
              I love building cool stuff. I enjoy coding, reading, music and sports.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/akhmadmamirov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-80 transition-opacity"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                />
              </a>
              <a
                href="https://linkedin.com/in/akhmadillomamirov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-80 transition-opacity"
              >
                <FontAwesomeIcon 
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 mt-16 w-full max-w-4xl">
          {/* Internship Experiences */}
          <div>
            <h2 className={`text-2xl font-bold mb-8 animate-fade-in-up delay-2 ${sourceCodePro.className}`}>
              My Prior Internship Experience
            </h2>
            <div className="relative flex flex-col gap-16">
              <div 
                className="absolute left-4 w-0.5 bg-gray-200 h-full"
                style={{
                  animation: "growLine 2s ease-in-out forwards"
                }}
              />
              
              {internshipExperiences.map((experience, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 animate-fade-in-up delay-${index + 2}`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="absolute left-[17px] -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                    />
                    <div className="w-12 h-12 relative">
                      <Image
                        src={experience.logoSrc}
                        alt={experience.logoAlt}
                        fill
                        className="rounded-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-xl">
                      {experience.title} @ {experience.company}
                    </h3>
                  </div>
                  <div className="ml-16">
                    <p className="text-orange-500">
                      {experience.startDate} - {experience.endDate}
                      {experience.team && ` | ${experience.team}`}
                    </p>
                    <p className="text-white">
                      {experience.location && ` ${experience.location}`}
                    </p>
                    {experience.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 rounded-full text-sm text-white"
                            style={{
                              backgroundColor: "#a770ad"
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-white w-3/4">{experience.description}</p>
                    {/* Optional images section */}
                    {experience.images && experience.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mt-4 max-w-lg">
                        {experience.images.map((image, imageIndex) => (
                          <div key={imageIndex} className="relative aspect-[4/3]">
                            <Image
                              src={image}
                              alt={`${experience.company} project image ${imageIndex + 1}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* College Experiences */}
          <div>
            <h2 className={`text-2xl font-bold mb-8 animate-fade-in-up delay-3  ${sourceCodePro.className}`}>
              @ The College of Wooster
            </h2>
            <div className="relative flex flex-col gap-16">
              <div 
                className="absolute left-4 w-0.5 bg-gray-200 h-full"
                style={{
                  animation: "growLine 2s ease-in-out forwards"
                }}
              />
              
              {collegeExperiences.map((experience, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 animate-fade-in-up delay-${index + 4}`}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="absolute left-[17px] -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                    />
                    <div className="w-12 h-12 relative">
                      <Image
                        src={experience.logoSrc}
                        alt={experience.logoAlt}
                        fill
                        className="rounded-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-xl">
                      {experience.title}
                    </h3>
                  </div>
                  <div className="ml-16">
                    <p className="text-[#a770ad]">
                      {experience.startDate} - {experience.endDate}
                      {experience.team && ` | ${experience.team}`}
                    </p>
                    {experience.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 rounded-full text-sm text-white"
                            style={{
                              backgroundColor: "#f97316" // orange-500
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-white w-3/4">{experience.description}</p>
                    {/* Optional images section */}
                    {experience.images && experience.images.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mt-4 max-w-lg">
                        {experience.images.map((image, imageIndex) => (
                          <div key={imageIndex} className="relative aspect-[4/3]">
                            <Image
                              src={image}
                              alt={`${experience.company} project image ${imageIndex + 1}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


