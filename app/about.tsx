"use client";
import SpinningCPU from './cpu';
import { courseWork, aboutMe } from '@/data/about';
import { sourceCodePro } from './utils/fonts';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start p-10">
      <div className="flex-1">
        <div className="p-20">
          <SpinningCPU />
        </div>
      </div>
      <div className="flex-1 text-white">
        <div className="w-4/5">
          <h2 className={`mt-20 text-3xl font-bold mb-6 md:pl-0 pl-4 ${sourceCodePro.className}`}>About Me</h2>
          <p className="font-mono mb-4 md:pl-0 pl-4">
            {aboutMe[0]}
          </p>
          <p className="font-mono mb-8 md:pl-0 pl-4">
           {aboutMe[1]}
          </p>
          <h3 className="text-xl font-semibold mb-4 md:pl-0 pl-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3 md:pl-0 pl-4">
            {courseWork.map((course, index) => (
              <button
                key={index}
                className="px-3 py-1 rounded-full text-sm text-white cursor-pointer font-semibold font-mono tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all active:scale-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] active:animate-shake"
                style={{
                  background: `linear-gradient(135deg, #FFA500, #a770ad)`
                }}
              onClick={() => {}}
              type="button"
            >
              {course}
            </button>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;