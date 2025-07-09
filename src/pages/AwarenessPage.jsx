import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Menu, X } from 'lucide-react';


const AwarenessPage = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [deathCount, setDeathCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('awareness');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const statistics = [
    { number: "1.35M", label: "Annual Road Deaths Worldwide", source: "WHO", color: "text-red-300" },
    { number: "38%", label: "of Road Deaths Involve Alcohol", source: "NHTSA", color: "text-orange-300" },
    { number: "50M+", label: "Injuries from Road Accidents", source: "WHO", color: "text-yellow-300" },
    { number: "90%", label: "of Crashes are Due to Human Error", source: "NHTSA", color: "text-red-300" }
  ];

  const facts = [
    {
      icon: "🚗",
      title: "Drunk Driving",
      description: "Every day, about 32 people in the United States die in drunk-driving crashes.",
      impact: "That's one person every 45 minutes.",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      icon: "💔",
      title: "Health Conditions",
      description: "Medical emergencies while driving account for thousands of accidents annually.",
      impact: "Heart attacks, strokes, and diabetic episodes can be fatal behind the wheel.",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: "⚡",
      title: "Reaction Time",
      description: "Alcohol impairs reaction time by up to 50% at legal blood alcohol limits.",
      impact: "Those extra seconds can mean the difference between life and death.",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Impact",
      description: "Road traffic injuries are the leading cause of death for people aged 5-29 years.",
      impact: "Every crash affects not just the driver, but entire families and communities.",
      gradient: "from-blue-500 to-teal-600",
      bgGradient: "from-blue-50 to-teal-50"
    }
  ];

  const solutions = [
    {
      title: "Real-time Health Monitoring",
      description: "Monitor blood pressure, heart rate, and other vital signs while driving",
      icon: "❤️",
      stats: "99.9% accuracy",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Alcohol Detection",
      description: "Advanced sensors detect alcohol levels and prevent vehicle operation",
      icon: "🔍",
      stats: "0.02 BAC sensitivity",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "GPS Tracking",
      description: "Track vehicle location and send alerts in case of emergencies",
      icon: "📍",
      stats: "Real-time updates",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Emergency Response",
      description: "Automatic emergency contact and location sharing when incidents occur",
      icon: "🚨",
      stats: "< 30 seconds response",
      color: "from-orange-500 to-red-600"
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section doesn't exist on this page, navigate to home
      window.location.href = `/#${sectionId}`;
    }
  };

  // Statistics rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % statistics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Death counter simulation
  useEffect(() => {
    const startTime = new Date().setHours(0, 0, 0, 0);
    const now = Date.now();
    const minutesSinceStart = (now - startTime) / (1000 * 60);
    const baseCount = Math.floor(minutesSinceStart / 45); // 1 death every 45 minutes
    
    setDeathCount(baseCount);
    
    const interval = setInterval(() => {
      const currentMinutes = (Date.now() - startTime) / (1000 * 60);
      setDeathCount(Math.floor(currentMinutes / 45));
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Road Safety Awareness - EraSafeDrive"
        description="Learn about road safety statistics, the impact of impaired driving, and how EraSafeDrive's AI technology is making roads safer for everyone."
        path="/awareness"
      />
      
      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 group flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3">
                <img
                  src="/logo_small.jpg"
                  alt="EraSafeDrive Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-orange-500 group-hover:scale-105 transition-transform duration-300">
                ERA <span className="text-green-600">SAFE</span>drive
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <Link
                  to="/"
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      : 'text-white hover:text-green-400 hover:bg-white/10'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/awareness"
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:scale-105 ${
                    'text-green-600 bg-green-50'
                  }`}
                >
                  Awareness
                </Link>
                <Link
                  to="/login"
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled 
                    ? 'hover:bg-green-50' 
                    : 'hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 w-full text-left"
              >
                Home
              </Link>
              <Link
                to="/awareness"
                className="block px-3 py-2 text-base font-medium text-green-600 bg-green-50 rounded-lg transition-all duration-300 w-full text-left"
              >
                Awareness
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 mt-4 text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>


      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white overflow-hidden">
        {/* Enhanced animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-red-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-orange-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Enhanced parallax gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
          <div className="text-center pt-24 pb-20">
            {/* Enhanced warning icon */}
            <div className="mb-12">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="relative inline-block text-8xl md:text-9xl animate-bounce filter drop-shadow-2xl">⚠️</span>
              </div>
            </div>

            {/* Enhanced main heading */}
            <div className="mb-10">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tight">
                <span className="block text-white drop-shadow-2xl animate-fadeInUp">
                  Road Safety
                </span>
                <span className="block text-yellow-200 drop-shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  Matters
                </span>
              </h1>
            </div>
            
            {/* Enhanced subtitle */}
            <div className="mb-16">
              <p className="text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto leading-relaxed font-semibold text-white/95 drop-shadow-lg animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                Every year, <span className="font-black text-yellow-200 animate-pulse">millions of lives</span> are affected by preventable road accidents.
                <br className="hidden md:block" />
                <span className="font-black text-orange-200 animate-pulse" style={{ animationDelay: '0.3s' }}>It's time to make a change.</span>
              </p>
            </div>
            
            {/* Enhanced statistics card */}
            <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
              <div className="relative max-w-2xl mx-auto">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-orange-500/30 to-yellow-500/30 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="absolute inset-1 bg-gradient-to-r from-red-400/20 via-orange-400/20 to-yellow-400/20 rounded-3xl blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/30 shadow-2xl">
                  {/* Enhanced number display */}
                  <div className="mb-6">
                    <div className={`text-7xl md:text-8xl lg:text-9xl font-black transition-all duration-1000 ${statistics[currentStat].color} drop-shadow-2xl animate-pulse`}>
                      {statistics[currentStat].number}
                    </div>
                  </div>
                  
                  {/* Enhanced label */}
                  <div className="mb-6">
                    <div className="text-xl md:text-2xl lg:text-3xl text-white/95 font-bold leading-relaxed">
                      {statistics[currentStat].label}
                    </div>
                  </div>
                  
                  {/* Enhanced source */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center text-yellow-200 font-bold text-lg">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Source: {statistics[currentStat].source}
                    </div>
                  </div>
                  
                  {/* Enhanced progress indicators */}
                  <div className="flex justify-center space-x-3 mb-6">
                    {statistics.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentStat(index)}
                        className={`h-2 rounded-full transition-all duration-500 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 ${
                          index === currentStat 
                            ? 'w-12 bg-yellow-300 shadow-lg' 
                            : 'w-3 bg-white/40 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Enhanced impact message */}
                  <div className="text-white/90 text-base md:text-lg">
                    <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 font-semibold">
                      These aren't just statistics — they're lives that matter
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              <button
                onClick={() => {
                  document.getElementById('reality-header')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-10 py-5 bg-white/20 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-4 text-xl">📊</span>
                  Learn the Facts
                  <svg className="ml-4 h-6 w-6 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
              
              <Link
                to="/login"
                className="group px-10 py-5 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-4 text-xl">🚀</span>
                  Take Action Now
                  <svg className="ml-4 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
              <div className="flex flex-col items-center space-y-3 animate-bounce">
                <div className="w-8 h-12 border-3 border-white/70 rounded-full flex justify-center relative bg-white/10 backdrop-blur-sm">
                  <div className="w-2 h-4 bg-white/90 rounded-full mt-2 animate-pulse"></div>
                </div>
                <span className="text-sm text-white/80 font-semibold bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-20"
            data-animate
            id="reality-header"
          >
            <div className={`transition-all duration-1000 ${isVisible['reality-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                The <span className="text-red-600">Harsh Reality</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Behind every statistic is a human story. These numbers represent real families, 
                dreams interrupted, and communities forever changed.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <div 
                key={index}
                data-animate
                id={`fact-${index}`}
                className={`group transition-all duration-1000 delay-${index * 200} ${
                  isVisible[`fact-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`bg-gradient-to-br ${fact.bgGradient} rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
                  
                  <div className="relative">
                    <div className="text-5xl mb-6 animate-pulse">{fact.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{fact.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{fact.description}</p>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${fact.gradient} text-white text-sm font-bold`}>
                      {fact.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Counter */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            data-animate
            id="counter-section"
            className={`transition-all duration-1000 ${isVisible['counter-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-red-400">
              Lives Lost <span className="text-white">Today</span>
            </h2>
            
            <div className="relative max-w-lg mx-auto mb-8">
              {/* Pulsing rings */}
              <div className="absolute inset-0 bg-red-600 rounded-3xl animate-ping opacity-20"></div>
              <div className="absolute inset-2 bg-red-600 rounded-3xl animate-ping opacity-30 delay-300"></div>
              
              <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-12 shadow-2xl border border-red-500/50">
                <div className="text-7xl md:text-8xl font-black mb-4 text-white animate-pulse">
                  {deathCount}
                </div>
                <p className="text-xl font-medium text-red-100 mb-2">
                  Estimated drunk driving deaths in the US today
                </p>
                <p className="text-sm text-red-300">
                  Based on NHTSA statistics (1 every 45 minutes)
                </p>
                
                {/* Live indicator */}
                <div className="flex items-center justify-center mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-xs text-gray-300">Live Counter</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                This counter is a <span className="text-red-400 font-bold">sobering reminder</span> that behind every number is a life that could have been saved 
                with the right technology and awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-20"
            data-animate
            id="solutions-header"
          >
            <div className={`transition-all duration-1000 ${isVisible['solutions-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                Technology for <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Change</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                EraSafeDrive is pioneering AI-powered solutions to prevent accidents before they happen. 
                Here's how we're making roads safer:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                data-animate
                id={`solution-${index}`}
                className={`group transition-all duration-1000 delay-${index * 150} ${
                  isVisible[`solution-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 relative overflow-hidden group">
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Floating icon container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <span className="text-2xl filter drop-shadow-sm">{solution.icon}</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Stats badge */}
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${solution.color} text-white text-sm font-bold shadow-md transform group-hover:scale-105 transition-transform duration-300`}>
                      {solution.stats}
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div 
              data-animate
              id="solutions-cta"
              className={`transition-all duration-1000 delay-600 ${isVisible['solutions-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <Link 
                to="/" 
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-2xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="mr-3">🚀</span>
                Learn More About Our Technology
                <svg className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            data-animate
            id="cta-section"
            className={`transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Be Part of the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solution</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Every life saved matters. Join us in creating a future where road accidents 
              are <span className="text-green-400 font-bold">preventable, not inevitable.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Link 
                to="/login" 
                className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-500/25"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  Get Started Today
                  <svg className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a 
                href="mailto:hello@erasafedrive.com" 
                className="group px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  <span className="mr-3">📧</span>
                  Contact Us
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: "📢", title: "Share", desc: "Spread awareness about road safety in your community", color: "from-blue-500 to-purple-600" },
                { icon: "🏛️", title: "Advocate", desc: "Support policies that promote safer driving technologies", color: "from-purple-500 to-pink-600" },
                { icon: "🎯", title: "Adopt", desc: "Implement EraSafeDrive technology in your fleet", color: "from-green-500 to-teal-600" }
              ].map((action, index) => (
                <div 
                  key={index}
                  className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 delay-${index * 200}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-2xl">{action.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">{action.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{action.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src="/logo.jpg" alt="EraSafeDrive" className="h-16 w-16 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">EraSafeDrive</h3>
            <p className="text-gray-400 mb-6">Making roads safer with AI technology</p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/awareness" className="text-gray-400 hover:text-white transition-colors">Awareness</Link>
              <Link to="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 EraSafeDrive. All rights reserved. | 
                <span className="ml-2">Together, we can save lives.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AwarenessPage;
