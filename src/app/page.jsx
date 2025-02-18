const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">Neal Borowiak</h1>
        <h2 className="text-2xl text-gray-600 mb-8">ServiceNow Architect / Sr. ServiceNow Developer</h2>
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://www.linkedin.com/in/neal-borowiak/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
          <a href="https://x.com/NealWitIt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Twitter</a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            IT Specialist seeking employment with a well-respected organization that will allow for personal growth and development as well as provide an opportunity to benefit the organization. Solid technical background supplemented a genuine understanding of PC support including troubleshooting and installation. Extremely creative individual possessing excellent written and verbal communication ability along with precise organizational skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold mb-2">ServiceNow</h3>
              <p>Development & Architecture</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold mb-2">Development</h3>
              <p>JavaScript, GlideScript, HTML, CSS, AngularJS</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold mb-2">Microsoft Power Platform</h3>
              <p>PowerAutomate, PowerBI, PowerApps, Dynamics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="text-center text-xl text-gray-600">
            Coming Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
