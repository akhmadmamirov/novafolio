import type { Experience } from "./types/components";
import Image from 'next/image'

export default function Experience({ data }: { data: Experience[] }) {
return (
  <div>
    <div className="relative flex flex-col gap-16">
      <div 
        className="absolute left-4 w-0.5 bg-gray-200 h-full timeline-line"
      />
      {data.map((experience: Experience, index: number) => (
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
            <p className={`${experience.type === 'college' ? 'text-[#a770ad]' : 'text-orange-500'}`}>
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
                      backgroundColor: experience.type === 'college' ? '#ff9800' : '#a770ad'
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
)
}