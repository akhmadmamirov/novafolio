export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Welcome to our platform. We are dedicated to providing exceptional 
            services and solutions to meet your needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To deliver innovative solutions that empower our users and make a 
                positive impact in their daily lives.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading platform in our field, known for excellence, 
                reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
