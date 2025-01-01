import SpinningCPU from './cpu';
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
          <h2 className="mt-20 text-3xl font-bold mb-6 md:pl-0 pl-4">About Me</h2>
          
          <p className="mb-4 md:pl-0 pl-4">
            I enjoy learning and being part of the latest in tech. My goal is to build ventures in Robotics, AI & Cancer Research, Quantum Computing, High-performance Computing, Rockets, Space and Neuroscience.
          </p>
          
          <p className="mb-8 md:pl-0 pl-4">
            I am always amazed by the world around us: our environment, our communication, and our understanding of technology. 
          </p>

          <h3 className="text-xl font-semibold mb-4 md:pl-0 pl-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3 md:pl-0 pl-4">
            {[
              "Data Structures",
              "Algorithms",
              "Web Development",
              "Database Systems",
              "Machine Learning",
              "Software Engineering"
            ].map((course, index) => (
              <div
                key={index}
                className="p-3 rounded-lg text-sm inline-block w-fit"
                style={{
                  background: `linear-gradient(135deg, #FFA500, #a770ad)`
                }}
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;