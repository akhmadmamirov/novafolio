import type { Experience } from "@/utils/types/components";
import { IoLocationOutline } from 'react-icons/io5'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Experience = ({ data }: { data: Experience[] }) => {
  const experienceRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="experiences">
      <div className="relative flex flex-col gap-16 experience-card">
        <div className="absolute left-4 w-0.5 bg-gray-200 timeline-line" />
        {data.map((experience: Experience, index: number) => (
          <div 
            key={index} 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={(el : any) => experienceRefs.current[index] = el}
            className="relative pl-8 experience-item"
          >
            <div className="flex items-center gap-4 experience-header">
              <div className="absolute left-[-85px] w-20 text-right start-date">
                <p className={`${experience.type === 'college' ? 'text-[#a770ad]' : 'text-orange-500'} text-base font-semibold font-mono`}>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <div className="absolute left-[17px] -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="w-12 h-12 relative">
                <Image
                  src={experience.logoSrc}
                  alt={experience.logoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-xl experience-title">
                {experience.title}{experience.company ? ` @ ${experience.company}` : ''}
              </h3>
            </div>
            <div className="ml-16">
              <div className="flex items-center gap-2">
                <p className={`${experience.type === 'college' ? 'text-[#a770ad]' : 'text-orange-500'}`}>
                  {experience.team} 
                </p>
                <p className="text-white flex items-center gap-1">
                  {experience.team && '| '}
                  <IoLocationOutline className="text-blue-500 inline" /> {experience.location && <span className="text-blue-500">{experience.location}</span>}
                </p>
              </div>
              {experience.skills && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <button
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm text-white cursor-pointer font-semibold font-mono tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all active:scale-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] active:animate-shake"
                      style={{
                        backgroundColor: experience.type === 'college' ? '#ff9800' : '#a770ad'
                      }}
                      onClick={() => {}}
                      type="button"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}
              <p className="mt-2 text-gray-300 w-3/4 text-base leading-relaxed font-normal experience-description">
                {experience.description}
              </p>
              {experience.images && experience.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-4 max-w-lg">
                  {experience.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`${experience.company} project image ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  );
}

export default Experience;