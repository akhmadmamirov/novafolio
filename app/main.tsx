import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Prevent fontawesome from dynamically adding its css
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
};

// Experience data
const experiences: Experience[] = [
  {
    startDate: "05/2025",
    endDate: "08/2025",
    company: "Salesforce",
    title: "Software Engineer",
    description: "Public Cloud Team",
    logoSrc: "/salesforce_logo.png",
    logoAlt: "Salesforce Logo",
  },
  {
    startDate: "2021",
    endDate: "2023",
    company: "Electronic Arts",
    title: "Software Engineer",
    description: "Worked on Commerce, Identity and Security",
    logoSrc: "/ea_logo.jpg",
    logoAlt: "EA Logo",
    images: ["/ea_sims.jpg", "/ea_group.jpg", "/ea_hq2.jpg", "/ea_hq.png"],
  },
  {
    startDate: "2021",
    endDate: "2023",
    company: "Google Developer Group",
    title: "Founder & Lead",
    description: "Worked on FIFA Ultimate Team",
    logoSrc: "/gdg_group.png",
    logoAlt: "Wooster Logo",
  },
  {
    startDate: "2021",
    endDate: "2023",
    company: "The College of Wooster",
    title: "Research Assistant",
    description: "Worked on FIFA Ultimate Team",
    logoSrc: "/wooster.jpeg",
    logoAlt: "Wooster Logo",
  },
  {
    startDate: "2019",
    endDate: "2021",
    company: "Atomrain",
    title: "Software Engineer",
    description: "Built web applications for clients",
    logoSrc: "/atomrain_logo.jpeg",
    logoAlt: "Atomrain Logo",
  },
];

export default function Main() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-start gap-20 max-w-4xl w-full">
        <div className="w-48 h-48 relative">
          <Image
            src="/profile.png" 
            alt="Profile picture"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Akhmadillo Mamirov</h1>
          <p className="text-lg text-gray-600 mb-4">
            Hi, this is Akhmad. Nice to meet you!
            I love cool tech. I enjoy coding, reading, music and sports.
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
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
                }}
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
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"
                }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 mt-16 w-full max-w-4xl">
        <div className="relative flex flex-col gap-16">
          {/* Timeline line */}
          <div className="absolute left-4 w-0.5 h-full bg-gray-200" />
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-8">
              {/* Timeline dot, logo, and title in a horizontal layout */}
              <div className="flex items-center gap-4">
                {/* Timeline dot positioned on the line */}
                <div className="absolute left-[17px] -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
                {/* Logo */}
                <div className="w-12 h-12 relative">
                  <Image
                    src={experience.logoSrc}
                    alt={experience.logoAlt}
                    fill
                    className="rounded-full object-contain"
                  />
                </div>
                {/* Title */}
                <h3 className="font-semibold text-xl">
                  {experience.title} @ {experience.company}
                </h3>
              </div>
              {/* Date and description in a vertical layout with proper spacing */}
              <div className="mt-4 ml-16">
                <p className="text-gray-600">
                  {experience.startDate} - {experience.endDate}
                </p>
                <p className="mt-2 text-gray-600">{experience.description}</p>
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
    </main>
  )
}
