import { useState, useEffect } from 'react';
import { 
  Mail, Lock, ArrowRight, ArrowLeft, Shield,
  Zap, Star
} from 'lucide-react';

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    email: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleForgotPassword = async () => {
    if (!forgotPasswordForm.email) {
      alert('Please enter your email address');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Password reset email sent! (Demo)');
    }, 2000);
  };

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Secure password recovery" },
    { icon: <Zap className="w-6 h-6" />, text: "Quick email verification" },
    { icon: <Star className="w-6 h-6" />, text: "Account protection priority" }
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
                We take account security seriously. Our password recovery process ensures your account remains protected while giving you quick access.
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
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Security Team</div>
                  <div className="text-sm text-gray-400">EraSafeDrive</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Your account security is our top priority. Password reset emails are sent instantly and expire within 15 minutes for maximum protection."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
                <p className="text-gray-400">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={forgotPasswordForm.email}
                      onChange={(e) => setForgotPasswordForm({...forgotPasswordForm, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <button
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center mt-6">
                <button className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Sign In
                </button>
              </div>

              {/* Additional Help */}
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Need Help?</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Check your spam/junk folder for the reset email</li>
                  <li>• Reset links expire in 15 minutes for security</li>
                  <li>• Contact support if you don't receive the email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;