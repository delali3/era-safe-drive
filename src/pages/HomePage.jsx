import { useState, useEffect } from 'react';
import { Shield, Heart, MapPin, Car, Smartphone, Lock, CheckCircle, Users, Phone, Mail, Menu, X, Star, ArrowRight, Zap, Clock, Navigation, Activity, Droplet, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Bus Drivers",
      description: "Ensuring passenger safety with comprehensive driver monitoring"
    },
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Mining Operators",
      description: "Protecting heavy machinery operators in hazardous environments"
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Truck Drivers",
      description: "Long-haul safety monitoring for commercial transport"
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Construction Workers",
      description: "Site safety monitoring for construction vehicle operators"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideTimer);
    };
  }, [slides.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Alcohol Detection",
      description: "Advanced breathalyzer technology with 99.9% accuracy prevents intoxicated drivers from starting vehicles. Real-time monitoring ensures continuous safety.",
      color: "from-green-500 to-emerald-600",
      delay: "0ms"
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Blood Pressure Monitoring",
      description: "Continuous vital signs monitoring including blood pressure tracking to detect health emergencies before they become critical.",
      color: "from-orange-500 to-red-600",
      delay: "100ms"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "GPS Tracking",
      description: "Real-time location monitoring with longitude and latitude tracking for fleet management and emergency response coordination.",
      color: "from-green-600 to-teal-600",
      delay: "200ms"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "Vehicle Integration",
      description: "Seamless OBD-II integration with 2000+ vehicle models for complete ignition control and comprehensive vehicle diagnostics.",
      color: "from-emerald-500 to-green-600",
      delay: "300ms"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Smart Connectivity",
      description: "5G-enabled real-time monitoring with instant alerts to fleet managers and emergency contacts through our ThingSpeak integration.",
      color: "from-green-500 to-emerald-600",
      delay: "400ms"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Tamper-Proof Design",
      description: "Military-grade encryption and anti-tampering sensors with 24/7 system integrity monitoring for maximum security.",
      color: "from-orange-500 to-amber-600",
      delay: "500ms"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "GPS Location Check",
      description: "System captures precise longitude and latitude coordinates for location verification and tracking",
      icon: <Navigation className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Health Assessment",
      description: "Comprehensive blood pressure monitoring and alcohol level detection for driver fitness evaluation",
      icon: <Heart className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Data Processing",
      description: "Real-time data transmission to ThingSpeak cloud platform for instant analysis and monitoring",
      icon: <Zap className="w-6 h-6" />
    },
    {
      number: 4,
      title: "Smart Authorization",
      description: "Instant go/no-go decision with detailed logging and emergency protocols activation",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "99.9%", label: "Detection Accuracy", icon: <Star className="w-6 h-6" /> },
    { number: "2.5s", label: "Average Scan Time", icon: <Clock className="w-6 h-6" /> },
    { number: "4", label: "Key Data Points", icon: <Activity className="w-6 h-6" /> },
    { number: "24/7", label: "System Monitoring", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <SEO 
        title="EraSafeDrive - AI-Powered Driver Safety Monitoring System"
        description="Revolutionary AI-powered driver monitoring system that prevents impaired driving through advanced health monitoring, real-time GPS tracking, and alcohol detection technology."
        keywords="driver safety, alcohol detection, blood pressure monitoring, GPS tracking, fleet management, driver monitoring system, vehicle safety, IoT, ThingSpeak, impaired driving prevention"
        url="https://erasafedrive.com/"
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
                {['home', 'features', 'how-it-works', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:scale-105 ${
                      activeSection === section 
                        ? 'text-green-600 bg-green-50' 
                        : isScrolled 
                          ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                          : 'text-white hover:text-green-400 hover:bg-white/10'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                  </button>
                ))}
                <a
                  href="/login"
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Login
                </a>
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
              {['home', 'features', 'how-it-works', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 w-full text-left"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </button>
              ))}
              <a
                href="/login"
                className="block px-3 py-2 mt-4 text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Slideshow */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-orange-900/40" />
            </div>
          ))}
        </div>

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                <span className="block text-white">
                  Drive Safe
                </span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-orange-500 bg-clip-text text-transparent mt-2">
                  Drive Smart
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
                Revolutionary AI-powered driver monitoring system that prevents impaired driving through 
                <span className="text-green-400 font-semibold"> advanced health monitoring</span> and 
                <span className="text-orange-400 font-semibold"> real-time GPS tracking</span>
              </p>
              <div className="text-lg text-green-300 font-medium">
                Currently monitoring: {slides[currentSlide].title}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-full group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <div className="text-green-400">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('features')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center">
                  Explore Features
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="text-green-600">
                Next-Gen Safety
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology that monitors critical safety parameters in real-time
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mt-6 sm:mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-orange-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps powered by ThingSpeak IoT platform for real-time monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-400/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                      <span className="text-2xl sm:text-3xl font-black text-white">{step.number}</span>
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ThingSpeak Integration Info */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-gradient-to-r from-green-100 to-orange-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Real-Time Data Monitoring</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                Our system continuously monitors and transmits four critical data points to the cloud:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <Navigation className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-xs sm:text-sm">Longitude</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-xs sm:text-sm">Latitude</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-semibold text-xs sm:text-sm">Blood Pressure</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <Droplet className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-xs sm:text-sm">Alcohol Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" />
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-white">
            Ready to Transform
            <br />
            <span className="text-orange-300">
              Road Safety?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of forward-thinking companies and individuals who are already using EraSafeDrive 
            to protect their most valuable assets - their people.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-white text-green-600 font-bold text-base sm:text-lg rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden w-full sm:w-auto"
            >
              <div className="relative flex items-center justify-center">
                <CheckCircle className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            
            <button className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/50 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/70 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-16 sm:py-20 border-t border-gray-200 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-12 sm:h-12 mr-2 sm:mr-3">
                  <img
                    src="/logo_small.jpg"
                    alt="EraSafeDrive Logo"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-orange-500">
                  ERA <span className="text-green-600">SAFE</span>drive
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6 max-w-md">
                Leading the future of driver safety technology with innovative solutions that save lives 
                and protect communities worldwide.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {['linkedin', 'twitter', 'github'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 hover:bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-green-200 hover:border-green-300"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-500 to-orange-500 rounded-full" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-green-600">Solutions</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Fleet Management', 'Personal Vehicles', 'Commercial Transport', 'Emergency Services'].map((item) => (
                  <li key={item}>
                    <button className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-300 hover:translate-x-1 transform">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-green-600">Contact</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                    hello@erasafedrive.com
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-100 to-orange-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              &copy; 2025 EraSafeDrive. All rights reserved. 
              <span className="text-green-600"> Driving safety into the future.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;