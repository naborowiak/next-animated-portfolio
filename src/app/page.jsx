const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex gap-6">
          <a href="#" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Neal.dev</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/naborowiak" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/neal-borowiak/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://x.com/NealWitIt" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="Twitter" className="social-icon" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-between px-20 py-16 max-w-7xl mx-auto">
        <div className="w-1/2 pr-12">
          <img src="/profile-art.png" alt="Artistic Portrait" className="w-full rounded-2xl shadow-2xl" />
        </div>
        <div className="w-1/2 space-y-8">
          <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to my digital canvas, where innovation and creativity converge. With a
            keen eye for ServiceNow architecture and a mastery of development, my portfolio
            showcases a diverse collection of projects that reflect my commitment to excellence.
          </p>
          <div className="flex gap-6">
            <button className="button-primary">View My Work</button>
            <button className="button-secondary">Contact Me</button>
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-purple-600">ServiceNow</h3>
              <p className="text-gray-600">Development & Architecture</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Development</h3>
              <p className="text-gray-600">JavaScript, GlideScript, HTML, CSS, AngularJS</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Microsoft Power Platform</h3>
              <p className="text-gray-600">PowerAutomate, PowerBI, PowerApps, Dynamics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Projects</h2>
          <div className="text-center text-xl text-gray-600 p-12 bg-white/80 rounded-2xl shadow-lg">
            Coming Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
