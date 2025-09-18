import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  Code2, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  User,
  Briefcase,
  MessageSquare,
  BookOpen,
  Smartphone,
  Palette,
  Settings,
  CheckCircle,
  Zap,
  Shield,
  Search
} from 'lucide-react';
import matjaryImage from '../images/matjary.png';
import natureImage from '../images/nature.png';
import brandaImage from '../images/branda.png';
import adverzaImage from '../images/adversa.png';
import devicedockImage from '../images/devicedock.png';
import nestworkImage from '../images/nestwork.png';
import cruds from '../images/cruds.png';
import delivery from '../images/delivery.png';
import ecommerce from '../images/ecommerce.png';
import estate from '../images/estate.png';
import quiz from '../images/quiz.png';
import shirty from '../images/shirty.png';
import tictactoe from '../images/tic-tac-toe.png';
import todolist from '../images/todolist.png';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { 
      name: 'WordPress Development', 
      icon: Globe, 
      description: 'Custom themes, Elementor, WooCommerce, ACF',
      category: 'CMS'
    },
    { 
      name: 'HTML5 & CSS3', 
      icon: Code2, 
      description: 'Semantic markup, modern CSS, animations',
      category: 'Frontend'
    },
    { 
      name: 'JavaScript & jQuery', 
      icon: Settings, 
      description: 'DOM manipulation, AJAX, interactive features',
      category: 'Programming'
    },
    { 
      name: 'SEO Optimization', 
      icon: Search, 
      description: 'On-page SEO, performance optimization',
      category: 'Marketing'
    },
    { 
      name: 'Responsive Design', 
      icon: Palette, 
      description: 'Mobile-first approach, cross-browser compatibility',
      category: 'Design'
    }
    ,
    { 
      name: 'React ', 
      icon: Code2, 
      description: 'Component-based library for building interactive user interfaces',
      category: 'Framework'
    }
    ,
    { 
      name: 'Tailwind CSS', 
      icon: Palette, 
  description: 'Utility-first CSS framework for building modern, responsive UIs',
      category: 'Framework'
    }
    ,
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      description: 'WooCommerce store with custom design, payments, and inventory — built using Elementor .',
      image: matjaryImage,
      technologies: ['WordPress', 'WooCommerce', 'Elementor ', 'Custom CSS'],
      liveUrl: 'https://dev-matjariy.pantheonsite.io/',
            Github:""


    },
    {
      id: 2,
      title: 'Plants Website',
      description: 'A modern plant shop offering a curated collection of vibrant, easy-care plants for homes and offices.',
      image: natureImage,
      technologies: ['WordPress', 'Custom Theme', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://dev-frproject.pantheonsite.io/',
            Github:""


    },
    {
      id: 3,
      title: ' Electronics Store',
      description: 'An online tech store offering the latest smartphones, headphones, and smart gadgets at great prices.',
      image: brandaImage,
      technologies: ['WordPress', 'Custom CSS', 'jQuery'],
      liveUrl: 'https://dev-branda.pantheonsite.io/',
            Github:""


    },
    {
      id: 4,
      title: 'Marketing Agency',
      description: 'A creative marketing agency helping brands grow through strategy, design, and digital campaigns.',
      image: adverzaImage,
      technologies: ['WordPress', 'Elementor', 'Contact Form 7', 'SEO'],
      liveUrl: 'https://dev-adverza.pantheonsite.io/',
            Github:""


    },
    {
      id: 5,
      title: 'Electronics Store',
      description: 'An online tech store offering the latest smartphones, headphones, and smart gadgets at great prices.',
      image: devicedockImage,
      technologies: ['WordPress', 'Custom Theme'],
      liveUrl: 'https://dev-devicedock.pantheonsite.io/',
            Github:""


    },
    {
      id: 6,
      title: ' Working Spaces',
      description: 'A modern coworking space designed to inspire productivity, creativity, and collaboration.',
      image: nestworkImage,
      technologies: ['WordPress', 'WooCommerce'],
      liveUrl: 'https://dev-nestwork.pantheonsite.io/',
            Github:""


    }
    ,
    {
      id: 7,
      title: "Shirty",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['html', 'css','js'],
      image: shirty,
      liveUrl: "https://a7mad2610.github.io/shirty/",
            Github:"https://github.com/A7mad2610/shirty"


    },
    {
      id: 8,
      title: "CRUDS",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['html', 'css','js'],
      image: cruds,
      liveUrl: "https://a7mad2610.github.io/cruds/",
            Github:"https://github.com/A7mad2610/cruds"


    },
    {
      id: 9,
      title: "ToDo List",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['html', 'css','js'],
      image: todolist,
      liveUrl: "https://example.com/product/pizza",
            Github:"https://github.com/A7mad2610/estate"


    },
    
    {
      id: 10,
      title: "Delivery",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['react'],
      image: delivery,
      liveUrl: "https://a7mad2610.github.io/",
            Github:"https://github.com/A7mad2610/delivery"


    },
        {
      id: 11,
      title: "E-commerce",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['react'],
      image: ecommerce,
          liveUrl: "https://example.com/product/pizza",
            Github:"https://github.com/A7mad2610/estate"


    },
        {
      id: 12,
      title: "Estate",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['react'],
      image: estate,
        liveUrl: "https://a7mad2610.github.io/estate/",
      Github:"https://github.com/A7mad2610/estate"

    },
    
        {
      id: 13,
      title: "Quiz",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['react'],
      image: quiz,
          liveUrl: "https://a7mad2610.github.io/quiz/",
            Github:"https://github.com/A7mad2610/quiz"


    },
    
        {
      id: 14,
      title: "Tic-Tac-Toe",
      description: `Lorem, ipsum dolor sit amet  adipisicing elit. Aliquid
      `,
      technologies: ['react'],
      image: tictactoe,
          liveUrl: "https://a7mad2610.github.io/tic-tac-toe/",
            Github:"https://github.com/A7mad2610/tic-tac-toe"


    }
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ahmad Medhat
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-3 mt-4">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'About', id: 'about' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-300 hover:text-blue-400 transition-colors py-2"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20 pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                AM
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ahmad Medhat</span>,<br />
              a WordPress & Front-End Developer
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              I build fast, secure, and responsive websites with WordPress and clean front-end code
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
            
            <div className="animate-bounce">
              <ArrowDown 
                size={24} 
                className="mx-auto text-gray-400 cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => scrollToSection('about')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <User className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate WordPress and front-end developer with experience building custom themes, 
                  optimizing websites for speed and SEO, and creating responsive user experiences. I specialize 
                  in WordPress development, modern front-end technologies, and performance optimization.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  My expertise includes custom WordPress theme development, WooCommerce integration, 
                  and front-end technologies like HTML5, CSS3, JavaScript, and Bootstrap. I focus on 
                  creating websites that are not only visually appealing but also fast, secure, and SEO-friendly.
                </p>
                
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">What I Do Best</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">Custom WordPress Themes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">WooCommerce Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">SEO Implementation</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
                  <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-20 h-20 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">Ahmad Medhat</h3>
                    <p className="text-blue-400 mb-4 text-lg">WordPress & Front-End Developer</p>

                    <p className="text-gray-400 text-sm">
                      Crafting digital experiences with WordPress expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon size={24} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full border border-blue-600/30">
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                A showcase of WordPress websites and front-end projects I've built
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
<button
  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
  onClick={() => window.open(project.liveUrl, '_blank')} // فتح الرابط في تاب جديد
>
  <ExternalLink size={16} />
  Live Demo
</button>

                      <button onClick={() => window.open(project.Github, '_blank')}  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-colors flex items-center justify-center">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Ready to bring your WordPress project to life? Let's discuss your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <form 
  action="https://formspree.io/f/xqalppne"
  method="POST"
  className="space-y-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Name</label>
                    <input 
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email</label>
                    <input 
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-400"
                      placeholder="Tell me about your WordPress project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-400">bimbo5875@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center">
                        <Github className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">GitHub</h4>
                        <p className="text-gray-400">https://github.com/A7mad2610</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">LinkedIn</h4>
                        <p className="text-gray-400">https://github.com/A7mad2610</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                  <h3 className="text-xl font-semibold mb-4">Available for Projects</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    I'm currently accepting new WordPress and front-end development projects. 
                    Let's create something amazing together!
                  </p>
<div className="flex gap-4">
  <a 
    href="https://github.com/A7mad2610"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
  >
    <Github className="w-5 h-5" />
  </a>

  <a 
    href="https://github.com/A7mad2610"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  <a 
    href="mailto:bimbo5875@gmail.com"
    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
  >
    <Mail className="w-5 h-5" />
  </a>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm">
              © 2025 Ahmad Medhat. WordPress & Front-End Developer. Building digital experiences with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;