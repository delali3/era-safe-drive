import { useState, useEffect } from 'react';
import { Shield, Heart, Brain, Car, Smartphone, Lock, AlertCircle, CheckCircle, Users, Phone, Mail, Menu, X, Star, ArrowRight, Zap, Eye, Clock } from 'lucide-react';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const features = [
    {
      icon: <AlertCircle className="w-10 h-10" />,
      title: "Alcohol Detection",
      description: "Advanced breathalyzer technology with 99.9% accuracy prevents intoxicated drivers from starting vehicles.",
      color: "from-red-500 to-pink-600",
      delay: "0ms"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Vital Signs Monitoring",
      description: "Real-time biometric scanning including heart rate, blood pressure, and stress level detection.",
      color: "from-pink-500 to-rose-600",
      delay: "100ms"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms process 50+ data points in under 3 seconds for instant decisions.",
      color: "from-purple-500 to-indigo-600",
      delay: "200ms"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Vehicle Integration",
      description: "Seamless OBD-II integration with 2000+ vehicle models for complete ignition control.",
      color: "from-blue-500 to-cyan-600",
      delay: "300ms"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Smart Connectivity",
      description: "5G-enabled real-time monitoring with instant alerts to fleet managers and emergency contacts.",
      color: "from-green-500 to-emerald-600",
      delay: "400ms"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Tamper-Proof Design",
      description: "Military-grade encryption and anti-tampering sensors with 24/7 system integrity monitoring.",
      color: "from-orange-500 to-amber-600",
      delay: "500ms"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Biometric Scan",
      description: "Advanced fingerprint and facial recognition authenticate the authorized driver",
      icon: <Eye className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Health Assessment",
      description: "Comprehensive vitals check including alcohol detection and stress analysis",
      icon: <Heart className="w-6 h-6" />
    },
    {
      number: 3,
      title: "AI Processing",
      description: "Lightning-fast AI evaluation of all safety parameters in real-time",
      icon: <Zap className="w-6 h-6" />
    },
    {
      number: 4,
      title: "Smart Authorization",
      description: "Instant go/no-go decision with detailed logging and emergency protocols",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "99.9%", label: "Detection Accuracy", icon: <Star className="w-6 h-6" /> },
    { number: "2.5s", label: "Average Scan Time", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Data Points Analyzed", icon: <Brain className="w-6 h-6" /> },
    { number: "24/7", label: "System Monitoring", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isScrolled ? 1.5 : 1})`
        }}
      />

      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 group">
              <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                EraSafeDrive
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {['home', 'features', 'how-it-works', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/10 hover:scale-105 ${
                      activeSection === section 
                        ? 'text-cyan-400 bg-white/5' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'features', 'how-it-works', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 w-full text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-none">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Drive Safe
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mt-2">
                  Drive Smart
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Revolutionary AI-powered driver monitoring system that prevents impaired driving through 
                <span className="text-cyan-400 font-semibold"> advanced biometric analysis</span> and 
                <span className="text-purple-400 font-semibold"> real-time health assessment</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('features')}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  Explore Features
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-bounce" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent)] opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                Next-Gen Safety
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology that sets new standards for driver safety and vehicle security
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four simple steps to revolutionize your driving safety experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                      <span className="text-3xl font-black text-white">{step.number}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent)]" />
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Road Safety?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of forward-thinking companies and individuals who are already using EraSafeDrive 
            to protect their most valuable assets - their people.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold text-lg rounded-full hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center">
                <CheckCircle className="mr-3 w-6 h-6" />
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button className="px-10 py-5 border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                EraSafeDrive
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-6 max-w-md">
                Leading the future of driver safety technology with innovative solutions that save lives 
                and protect communities worldwide.
              </p>
              <div className="flex space-x-4">
                {['linkedin', 'twitter', 'github'].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-cyan-400">Solutions</h4>
              <ul className="space-y-3">
                {['Fleet Management', 'Personal Vehicles', 'Commercial Transport', 'Emergency Services'].map((item) => (
                  <li key={item}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-cyan-400">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    hello@erasafedrive.com
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-lg">
              &copy; 2025 EraSafeDrive. All rights reserved. 
              <span className="text-cyan-400"> Driving safety into the future.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;