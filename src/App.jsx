import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code,
  Database,
  Cloud,
  Terminal,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Award,
  Download,
} from "lucide-react";
import { Sun, Moon } from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = {
    frontend: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Chart.js",
    ],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT"],
    database: ["MongoDB", "SQL Server"],
    cloud: ["AWS EC2", "S3", "CloudFront", "IAM", "CI/CD"],
  };

  const projects = [
    {
      title: "TrailSync",
      description:
        "Developed a workflow and activity tracking platform to monitor task progress, user actions, and operational trails with real-time visibility and audit readiness.",
      tech: ["Angular", "React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      year: "2026",
      highlights: [
        "End-to-end task and activity tracking",
        "Audit trail generation and reporting",
        "Role-based dashboards for operations teams",
      ],
    },
    {
      title: "AI Travel Itinerary Planner",
      description:
        "Engineered full-stack travel planning application integrating OpenAI GPT to generate personalized day-by-day itineraries based on user preferences, destinations, and travel dates.",
      tech: ["Angular", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
      year: "2025",
      highlights: [
        "RESTful backend with 99.5% uptime",
        "CRUD operations",
        "AI-powered recommendations",
      ],
    },
    {
      title: "iZip Autos – Automotive Business Website",
      description:
        "Designed and developed a complete business website for iZip Autos from scratch, handling UI/UX design, frontend implementation, and deployment to deliver a responsive and production-ready web presence.",
      tech: [
        "PHP",
        "CodeIgniter",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      year: "2025",
      highlights: [
        "End-to-end website development from design to deployment",
        "Responsive UI optimized for mobile, tablet, and desktop devices",
        "Improved brand visibility and online presence for the business",
      ],
      live: "https://izipautos.com",
    },

    {
      title: "Personal Finance Manager",
      description:
        "Built a secure personal finance web application with JWT-based authentication, interactive dashboards for expense tracking, and SIP investment forecasting logic.",
      tech: ["MEAN Stack", "MongoDB", "JWT", "REST APIs"],
      year: "2024",
      highlights: [
        "JWT-based authentication and secure user sessions",
        "Interactive dashboards for income and expense tracking",
        "REST APIs for managing financial data",
      ],
    },

  ];

  const experience = [
    {
      role: "Freelance Full Stack Developer",
      company: "Independent",
      period: "2023 – Present",
      location: "Remote",
      type: "Freelance",
      highlights: [
        "Designed and developed complete production-ready websites for clients, handling UI/UX design, frontend development, backend integration, and deployment",
        "Built and delivered a full business website for iZip Autos, covering responsive design, performance optimization, and production deployment",
        "Worked directly with clients to gather requirements, propose technical solutions, and deliver end-to-end implementations",
        "Currently working on multiple freelance projects alongside full-time role, ensuring scalable and maintainable codebases",
      ],
    },

    {
      role: "Full Stack Developer",
      company: "Innodigital Solutions Pvt. Ltd.",
      period: "July 2024 – August 2025",
      location: "Hyderabad, India",
      type: "Full-time",
      highlights: [
        "Worked on KYC and eKYC verification modules for Univest and other BFSI domain clients, enabling seamless digital bank account opening",
        "Implemented end-to-end eKYC workflows including Aadhaar and PAN verification, real-time validation, and verification status tracking",
        "Integrated DigiLocker APIs to securely fetch and validate user documents during the onboarding process",
        "Implemented eSign workflows to complete digital consent and regulatory documentation as part of account opening",
        "Developed and secured RESTful APIs using JWT-based authentication aligned with OIDC concepts such as access tokens, claims-based authorization, and session validation",
        "Implemented role-based access control (RBAC) to ensure secure access across admin, operations, and end-user modules",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Bharat Intern",
      period: "March 2024 – April 2024",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Enhanced user engagement by 25% through responsive UI/UX design patterns",
        "Conducted A/B testing on interface designs to optimize conversion rates",
        "Implemented modern JavaScript frameworks for improved user experience",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "IBM SkillsBuild Student Ambassador",
      period: "June 2023 – August 2023",
      location: "Remote",
      type: "Internship",
      highlights: [
        "Built responsive web interfaces using HTML5, CSS3, and JavaScript",
        "Aligned development with IBM's design thinking principles",
        "Led knowledge-sharing sessions mentoring 20+ peers on frontend fundamentals",
      ],
    },
  ];

  const certifications = [
    { name: "Foundations of Cybersecurity", issuer: "Coursera" },
    { name: "Web Development Fundamentals", issuer: "Udemy" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 80%)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Aditya Mohanty
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-white ${activeSection === item.toLowerCase()
                    ? "text-white"
                    : "text-slate-300"
                    }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white" />
                  )}
                </a>
              ))}

              {/* Resume Download Button */}
              <a
                href="/AdityaMohanty_Resume.pdf"
                download
                className="px-4 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 hover:text-white transition-colors duration-300 text-slate-300"
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}

              <a
                href="/AdityaMohanty_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="text-white text-sm md:text-base font-mono tracking-wider">
              Hi, my name is
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
            Aditya Mohanty
          </h1>

          <h2 className="text-3xl md:text-5xl lg:text-6xl text-slate-400 mb-6 font-semibold">
            Full-Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building scalable, user-focused web applications with{" "}
            <span className="text-white font-semibold">Angular</span>,{" "}
            <span className="text-white font-semibold">Node.js</span>, and{" "}
            <span className="text-white font-semibold">SQL/MongoDB</span> — optimized for{" "}
            <span className="text-white font-semibold">performance</span>,{" "}
            <span className="text-white font-semibold">security</span>, and{" "}
            <span className="text-white font-semibold">clean UI</span>.
          </p>


          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 mb-12">
            <a
              href="https://github.com/mohantyadi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-700 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={24} className="group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/mohantyaditya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-slate-700 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="group-hover:text-white transition-colors"
              />
            </a>

            <a
              href="mailto:mohantyaditya72@gmail.com"
              className="p-3 border border-slate-700 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={24} className="group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <a href="#about" className="inline-block mt-16 animate-bounce">
            <ChevronDown size={32} className="text-white" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-16">
            <span className="text-white font-mono text-xl md:text-2xl mr-4">
              01.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="ml-6 h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Left Column */}
            <div className="md:col-span-3 space-y-6">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <img
                    src="/images/myphoto.jpeg"
                    alt="Aditya Mohanty"
                    className="relative w-64 h-64 object-cover rounded-lg border-4 border-slate-800 group-hover:border-white/30 transition-all duration-300"
                  />
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a dedicated full-stack developer who loves building{" "}
                <span className="text-white">scalable</span> and{" "}
                <span className="text-white">user-friendly</span> web apps that actually make a difference.
              </p>

              <p className="text-slate-300 leading-relaxed text-lg">
                I worked at{" "}
                <span className="text-white font-semibold">
                  Innodigital Solutions
                </span>
                , contributing to major banking projects in the BFSI sector.
              </p>

              <p className="text-slate-300 leading-relaxed text-lg">
                I graduated with a{" "}
                <span className="text-white font-semibold">
                  B.Tech in Computer Science
                </span>{" "}
                from ITER, SOA University.
              </p>


              <div className="grid grid-cols-2 gap-4 pt-6">
                <Fact icon={<MapPin size={20} />} label="Location" value="Hyderabad, India" />
                <Fact icon={<GraduationCap size={20} />} label="Education" value="B.Tech CSE" />
                <Fact icon={<Briefcase size={20} />} label="Experience" value="1+ Years" />
                <Fact icon={<Phone size={20} />} label="Email" value="mohantyaditya72@gmail.com" />
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                Technology Stack
              </h3>

              <div className="space-y-6">
                <FlipSkillCard icon={<Code size={20} />} title="Frontend" list={skills.frontend} />
                <FlipSkillCard icon={<Terminal size={20} />} title="Backend" list={skills.backend} />
                <FlipSkillCard icon={<Database size={20} />} title="Database" list={skills.database} />
                <FlipSkillCard icon={<Cloud size={20} />} title="Cloud & DevOps" list={skills.cloud} />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-slate-900/30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-16">
            <span className="text-white font-mono text-xl md:text-2xl mr-4">
              02.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
            <div className="ml-6 h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-2 border-slate-700 hover:border-white/30 transition-colors duration-300 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-700 rounded-full group-hover:bg-white transition-colors duration-300 border-4 border-slate-950" />

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700 group-hover:border-white/30/50 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-slate-200 font-medium text-lg">
                        {exp.company}
                      </div>

                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>

                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/30/30">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 text-slate-300">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-white mr-3 mt-1 flex-shrink-0">
                          ▹
                        </span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award size={24} className="text-white mr-2" />
              Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-white/30/50 transition-all duration-300"
                >
                  <Award size={20} className="text-white mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-slate-200">{cert.name}</p>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-16">
            <span className="text-white font-mono text-xl md:text-2xl mr-4">
              03.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="ml-6 h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/10 rounded-lg border border-white/30 group-hover:bg-white/20 transition-colors">
                    <Code size={24} className="text-white" />
                  </div>

                  <div className="flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 border border-white/30 rounded-md text-white hover:bg-white/10 transition"
                      >
                        Live
                      </a>
                    )}

                    <span className="text-xs text-slate-500 font-mono">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <ul className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-500 text-sm flex items-start">
                      <span className="text-white mr-2">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-900/50 text-white rounded border border-white/30/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/mohantyadi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 group"
            >
              View More on GitHub
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-slate-900/30 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-white font-mono text-xl md:text-2xl mr-4">
              04.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>

          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and exciting projects. Whether you have a
            question, want to collaborate, or just want to say hi, my inbox is always open!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ContactCard
              icon={<Mail size={36} />}
              title="Email"
              linkText="mohantyaditya72@gmail.com"
              href="mailto:mohantyaditya72@gmail.com"
            />
            <ContactCard
              icon={<Linkedin size={36} />}
              title="LinkedIn"
              linkText="Connect with me"
              href="https://www.linkedin.com/in/mohantyaditya"
              external
            />
            <ContactCard
              icon={<Github size={36} />}
              title="GitHub"
              linkText="View my work"
              href="https://github.com/mohantyadi"
              external
            />
          </div>

          <a
            href="mailto:mohantyaditya72@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-950 rounded-lg font-semibold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 text-lg"
          >
            Say Hello
            <Mail size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Aditya Mohanty. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/mohantyadi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohantyaditya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mohantyaditya72@gmail.com"
                className="hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
function FlipSkillCard({ icon, title, list }) {
  return (
    <div className="group [perspective:1000px] w-full">
      {/* Card Container */}
      <div className="relative h-32 w-full rounded-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT SIDE */}
        <div className="absolute inset-0 rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm p-5 flex items-center gap-3 [backface-visibility:hidden]">
          <div className="p-3 bg-white/10 rounded-lg border border-white/30/30 text-white">
            {icon}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-100">{title}</h4>
            <p className="text-sm text-slate-400">
              Hover to view tech stack →
            </p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 rounded-xl border border-white/30/40 bg-slate-900/70 backdrop-blur-sm p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h4 className="text-lg font-semibold text-white mb-3">
            {title} Stack
          </h4>

          <div className="flex flex-wrap gap-2">
            {list.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 hover:border-white/30 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* Helper Components */
function SkillBlock({ icon, title, list }) {
  return (
    <div className="group">
      <div className="flex items-center mb-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700 group-hover:border-white/30 group-hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
        <span className="text-white mr-2">{icon}</span>
        <span className="font-medium text-lg">{title}</span>
      </div>

      <div className="flex flex-wrap gap-2 pl-3">
        {list.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 bg-slate-800/50 text-sm rounded-lg border border-slate-700 hover:border-white/30 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Fact({ icon, label, value }) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-white mt-1 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-slate-200">{value}</p>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, linkText, href, external = false }) {
  return (
    <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-white/30 transition-all duration-300 group">
      <div className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold mb-2 text-lg">{title}</h3>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="text-slate-400 hover:text-white text-sm transition-colors"
      >
        {linkText}
      </a>
    </div>
  );
}
