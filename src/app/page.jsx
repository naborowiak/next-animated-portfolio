const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex gap-4">
          <a href="#" className="bg-black text-white px-4 py-2 rounded">Home</a>
          <a href="#about" className="px-4 py-2">About</a>
          <a href="#portfolio" className="px-4 py-2">Portfolio</a>
          <a href="#contact" className="px-4 py-2">Contact</a>
        </div>
        <div className="flex items-center">
          <span className="bg-black text-white px-4 py-2 rounded">Neal.dev</span>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/naborowiak" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/neal-borowiak/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://x.com/NealWitIt" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-20 py-16">
        <div className="w-1/2">
          {/* You can add your own artistic image here */}
          <img src="/profile-art.png" alt="Artistic Portrait" className="w-full" />
        </div>
        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to my digital canvas, where innovation and creativity converge. With a
            keen eye for ServiceNow architecture and a mastery of development, my portfolio
            showcases a diverse collection of projects that reflect my commitment to excellence.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded">
              View My Work
            </button>
            <button className="border border-black px-6 py-3 rounded">
              Contact Me
            </button>
          </div>
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
