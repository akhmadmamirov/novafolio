import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-16">
      {/* Hero Section */}
      <section className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Full Stack Developer | Designer | Problem Solver
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
          <Link 
            href="/contact" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-4xl w-full mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48">
              <Image
                src="/placeholder-project.jpg"
                alt="Project preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">Brief description of the project and your role in it.</p>
              <Link 
                href="/projects/1" 
                className="text-blue-600 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['React', 'TypeScript', 'Node.js', 'Python'].map((skill) => (
            <div 
              key={skill}
              className="border rounded-lg p-4 text-center hover:border-blue-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
