import Interests from './interests';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start p-10">
      <div className="flex-1">
        <Interests />
      </div>
      <div className="flex-1 text-white">
        <div className="w-4/5">
          <h2 className="mt-20 text-3xl font-bold mb-6 md:pl-0 pl-4">About Me</h2>
          
          <p className="mb-4 md:pl-0 pl-4">
            I am passionate about creating innovative solutions through technology and software development. My journey in computer science has led me to explore various aspects of programming, from web development to artificial intelligence.
          </p>
          
          <p className="mb-8 md:pl-0 pl-4">
            Through my academic and personal projects, I've developed a strong foundation in both theoretical concepts and practical applications, always striving to learn and adapt to new technologies.
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