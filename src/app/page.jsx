const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/70 z-50">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex gap-6">
            <a href="#" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Neal.dev
            </span>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="w-1/2 pr-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur-lg opacity-20"></div>
              <img 
                src="/profile-art.png" 
                alt="Artistic Portrait" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          <div className="w-1/2 space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                Crafting Digital Experiences,
              </span>
              <br />
              Designing Tomorrow.
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
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-600">ServiceNow</h3>
              <p className="text-gray-600">Development & Architecture</p>
            </div>
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Development</h3>
              <p className="text-gray-600">JavaScript, GlideScript, HTML, CSS, AngularJS</p>
            </div>
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Microsoft Power Platform</h3>
              <p className="text-gray-600">PowerAutomate, PowerBI, PowerApps, Dynamics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Projects</h2>
          <div className="text-center text-xl text-gray-600 p-12 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm">
            Coming Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
