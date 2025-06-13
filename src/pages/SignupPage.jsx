import React, { useState, useEffect } from 'react';
import { 
  Mail, Lock, User, Phone, Building, Eye, EyeOff, 
  ArrowRight, Shield, CheckCircle, Zap, Star
} from 'lucide-react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    accountType: 'individual',
    agreeTerms: false,
    marketing: false
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSignup = async () => {
    if (signupForm.password !== signupForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!signupForm.agreeTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    if (!signupForm.firstName || !signupForm.lastName || !signupForm.email || !signupForm.password) {
      alert('Please fill in all required fields');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully! (Demo)');
    }, 2000);
  };

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Military-grade encryption" },
    { icon: <Zap className="w-6 h-6" />, text: "Instant safety alerts" },
    { icon: <Star className="w-6 h-6" />, text: "24/7 expert support" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated cursor */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 relative">
          <div className="max-w-lg">
            <div className="mb-8">
              <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                EraSafeDrive
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Start your journey with the most advanced driver safety system. Protect what matters most with cutting-edge technology.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Mike Chen</div>
                  <div className="text-sm text-gray-400">Safety Director, LogiCorp</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Setup took less than 10 minutes. The peace of mind EraSafeDrive provides is invaluable for our drivers and families."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md max-h-screen overflow-y-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                <p className="text-gray-400">Join EraSafeDrive and start driving safely</p>
              </div>

              {/* Account Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSignupForm({...signupForm, accountType: 'individual'})}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      signupForm.accountType === 'individual'
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <User className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-sm font-medium">Individual</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSignupForm({...signupForm, accountType: 'business'})}
                    className={`p-3 rounded-xl border transition-all duration-300 ${
                      signupForm.accountType === 'business'
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20'
                    }`}
                  >
                    <Building className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-sm font-medium">Business</div>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={signupForm.firstName}
                      onChange={(e) => setSignupForm({...signupForm, firstName: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={signupForm.lastName}
                      onChange={(e) => setSignupForm({...signupForm, lastName: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Company Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={signupForm.phone}
                        onChange={(e) => setSignupForm({...signupForm, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  {signupForm.accountType === 'business' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={signupForm.company}
                          onChange={(e) => setSignupForm({...signupForm, company: e.target.value})}
                          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                      className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={signupForm.confirmPassword}
                      onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                      className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Password Strength Indicator */}
                {signupForm.password && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">Password Strength</div>
                    <div className="flex space-x-1">
                      <div className={`h-2 w-1/4 rounded ${signupForm.password.length >= 8 ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                      <div className={`h-2 w-1/4 rounded ${/[A-Z]/.test(signupForm.password) ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                      <div className={`h-2 w-1/4 rounded ${/[0-9]/.test(signupForm.password) ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                      <div className={`h-2 w-1/4 rounded ${/[^A-Za-z0-9]/.test(signupForm.password) ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Use 8+ characters with uppercase, numbers, and symbols
                    </div>
                  </div>
                )}

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={signupForm.agreeTerms}
                      onChange={(e) => setSignupForm({...signupForm, agreeTerms: e.target.checked})}
                      className="rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400/20 mt-1 flex-shrink-0"
                      required
                    />
                    <span className="ml-3 text-sm text-gray-300">
                      I agree to the{' '}
                      <button 
                        type="button"
                        className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
                      >
                        Terms of Service
                      </button>{' '}
                      and{' '}
                      <button 
                        type="button"
                        className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
                      >
                        Privacy Policy
                      </button>
                    </span>
                  </label>
                  
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={signupForm.marketing}
                      onChange={(e) => setSignupForm({...signupForm, marketing: e.target.checked})}
                      className="rounded border-white/20 bg-white/5 text-cyan-400 focus:ring-cyan-400/20 mt-1 flex-shrink-0"
                    />
                    <span className="ml-3 text-sm text-gray-300">
                      I'd like to receive product updates and safety tips via email
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSignup}
                  disabled={isLoading || !signupForm.agreeTerms}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-gray-400 mt-6">
                Already have an account?{' '}
                <button 
                  type="button"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;