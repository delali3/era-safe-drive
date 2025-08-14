import { useState, useEffect } from 'react';
import { 
  Bell, User, LogOut, Search, Download, 
  AlertTriangle, CheckCircle, XCircle, 
  Car, Users, Shield, TrendingUp, TrendingDown,
  MapPin, Heart,
  MoreVertical, Eye, Edit, RefreshCw,
  LineChart,
  Phone, Mail, AlertCircle, Droplet,
  Lock, EyeOff, ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import LocationMap from '../components/LocationMap';
import HealthMonitoringChart from '../components/HealthMonitoringChart';

// Authentication Configuration
const AUTH_CONFIG = {
  users: [
    { email: 'admin@erasafedrive.com', password: 'admin123', name: 'Akosua Osei', role: 'admin' },
    { email: 'manager@erasafedrive.com', password: 'manager123', name: 'Yaw Boateng', role: 'manager' },
    { email: 'operator@erasafedrive.com', password: 'operator123', name: 'Efua Adjei', role: 'operator' }
  ]
};

// ThingSpeak API Configuration
const THINGSPEAK_CONFIG = {
  channelId: '2942902', // Replace with your actual channel ID
  readApiKey: 'PVPOUJUJB4TDZV91', // Replace with your actual read API key
  baseUrl: 'https://api.thingspeak.com/channels'
};

// Login Component
const LoginScreen = ({ onLogin }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      const user = AUTH_CONFIG.users.find(
        u => u.email === loginForm.email && u.password === loginForm.password
      );

      if (user) {
        onLogin(user);
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 mr-3">
              <div className="w-full h-full bg-green-600 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700" />
                <div className="relative">
                  <div className="w-8 h-8 border-3 border-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-green-600 mb-2">
            ERA <span className="text-orange-500">SAFE</span>drive
          </h1>
          <p className="text-gray-600">Dashboard Access</p>
        </div>

        {/* Login Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700">{error}</span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-gray-900"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Access Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">Demo Credentials:</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <div><strong>Admin:</strong> admin@erasafedrive.com / admin123</div>
              <div><strong>Manager:</strong> manager@erasafedrive.com / manager123</div>
              <div><strong>Operator:</strong> operator@erasafedrive.com / operator123</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            &copy; 2025 EraSafeDrive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = ({ activeTab, setActiveTab, searchTerm, setSearchTerm, handleRefresh, isRefreshing, user, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3">
              <div className="w-full h-full bg-green-600 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700" />
                <div className="relative">
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full" />
                </div>
              </div>
            </div>
            <h1 className="text-xl font-black text-green-600">
              ERA <span className="text-orange-500">SAFE</span>drive
            </h1>
          </div>
          <nav className="hidden md:flex space-x-1">
            {['overview', 'vehicles', 'reports', 'alerts', 'awareness'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  if (tab === 'awareness') {
                    // Redirect to awareness page
                    window.location.href = '/awareness';
                  } else {
                    setActiveTab(tab);
                  }
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Refresh */}
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
          >
            <RefreshCw className={`w-5 h-5 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          {/* Profile */}
          <div className="relative group">
            <button className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <User className="w-5 h-5 text-gray-600" />
              <span className="hidden md:block text-gray-700">{user.name}</span>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-3 border-b border-gray-200">
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
                <div className="text-xs text-green-600 capitalize">{user.role}</div>
              </div>
              <div className="p-1">
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Stats Card Component
const StatsCard = ({ icon: Icon, title, value, trend: TrendIcon, color, isLoading }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-${color}-50 rounded-xl`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <TrendIcon className={`w-5 h-5 ${TrendIcon === TrendingUp ? 'text-green-500' : 'text-red-500'}`} />
      </div>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      ) : (
        <>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{title}</div>
        </>
      )}
    </div>
  );
};

// Live Data Card Component
const LiveDataCard = ({ icon: Icon, title, value, unit, status, color }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-${color}-50 rounded-xl`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'normal' ? 'bg-green-100 text-green-800' :
          status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status}
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900">
        {value} <span className="text-sm text-gray-500">{unit}</span>
      </div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  );
};

// Chart Card Component
const ChartCard = ({ title, children, actions }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {actions}
      </div>
      <div className="h-64 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// Vehicle Row Component
const VehicleRow = ({ vehicle, getStatusColor, onViewVehicle, onEditVehicle, onShowMoreOptions, onViewMap }) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-300">
      <td className="px-6 py-4">
        <div className="font-medium text-gray-900">{vehicle.id}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-gray-900">{vehicle.driver}</div>
      </td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
          {vehicle.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">{vehicle.location}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-gray-700">{vehicle.bloodPressure} mmHg</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-gray-700">{vehicle.alcoholLevel}%</div>
      </td>
      <td className="px-6 py-4">
        {vehicle.alerts > 0 ? (
          <div className="flex items-center space-x-1">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-500">{vehicle.alerts}</span>
          </div>
        ) : (
          <CheckCircle className="w-4 h-4 text-green-500" />
        )}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onViewMap(vehicle)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300"
            title="View on Map"
          >
            <MapPin className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={() => onViewVehicle(vehicle)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
            title="View Details"
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={() => onEditVehicle(vehicle)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-green-50 hover:text-green-600 transition-colors duration-300"
            title="Edit Vehicle"
          >
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={() => onShowMoreOptions(vehicle)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            title="More Options"
          >
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </td>
    </tr>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  // Dashboard state
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [thingSpeakData, setThingSpeakData] = useState({
    longitude: null,
    latitude: null,
    bloodPressure: null,
    alcoholLevel: null,
    lastUpdate: null
  });
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Vehicle management modals
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Check for existing authentication on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('erasafeDriveUser');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('erasafeDriveUser');
      }
    }
  }, []);

  // Authentication handlers
  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('erasafeDriveUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('erasafeDriveUser');
    setActiveTab('overview'); // Reset to overview tab
  };

  // Fetch data from ThingSpeak
  const fetchThingSpeakData = async () => {
    setIsLoadingData(true);
    try {
      // Fetch latest data from ThingSpeak
      const response = await fetch(
        `${THINGSPEAK_CONFIG.baseUrl}/${THINGSPEAK_CONFIG.channelId}/feeds.json?api_key=${THINGSPEAK_CONFIG.readApiKey}&results=1`
      );
      
      if (response.ok) {
        const data = await response.json();
        const feeds = data.feeds;
        
        if (feeds && feeds.length > 0) {
          const latestFeed = feeds[0];
          setThingSpeakData({
            longitude: parseFloat(latestFeed.field1) || 0,
            latitude: parseFloat(latestFeed.field2) || 0,
            bloodPressure: parseFloat(latestFeed.field3) || 0,
            alcoholLevel: parseFloat(latestFeed.field4) || 0,
            lastUpdate: new Date(latestFeed.created_at)
          });
        }
      } else {
        console.error('Failed to fetch ThingSpeak data');
        // Use sample data for demo
        setThingSpeakData({
          longitude: -1.72069,
          latitude: 4.95097,
          bloodPressure: 120,
          alcoholLevel: 0.02,
          lastUpdate: new Date()
        });
      }
    } catch (error) {
      console.error('Error fetching ThingSpeak data:', error);
      // Use sample data for demo
      setThingSpeakData({
        longitude: -1.72069,
        latitude: 4.95097,
        bloodPressure: 120,
        alcoholLevel: 0.02,
        lastUpdate: new Date()
      });
    }
    setIsLoadingData(false);
  };

  // Auto-refresh data every 30 seconds - only when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchThingSpeakData();
      const interval = setInterval(fetchThingSpeakData, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchThingSpeakData();
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  // Vehicle action handlers
  const handleViewVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowViewModal(true);
  };

  const handleEditVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowEditModal(true);
  };

  const handleViewMap = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowMapModal(true);
  };

  const handleMoreOptions = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowMoreOptionsModal(true);
  };

  const handleExportReport = () => {
    // Create CSV content
    const headers = ['Vehicle ID', 'Driver', 'Status', 'Location', 'Longitude', 'Latitude', 'Blood Pressure', 'Alcohol Level', 'Alerts'];
    const csvContent = [
      headers.join(','),
      ...dashboardData.vehicles.map(vehicle => [
        vehicle.id,
        vehicle.driver,
        vehicle.status,
        vehicle.location,
        vehicle.longitude,
        vehicle.latitude,
        vehicle.bloodPressure,
        vehicle.alcoholLevel,
        vehicle.alerts
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vehicle-report-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-700 bg-green-100';
      case 'inactive': return 'text-gray-700 bg-gray-100';
      case 'maintenance': return 'text-orange-700 bg-orange-100';
      case 'violation': return 'text-red-700 bg-red-100';
      case 'training': return 'text-blue-700 bg-blue-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getHealthStatus = (value, type) => {
    switch (type) {
      case 'bloodPressure':
        if (value > 140) return 'critical';
        if (value > 120) return 'warning';
        return 'normal';
      case 'alcoholLevel':
        if (value > 0.08) return 'critical';
        if (value > 0.05) return 'warning';
        return 'normal';
      default:
        return 'normal';
    }
  };

  const getHealthDisplayValue = (value, type, vehicleId = null) => {
    if (!value || value === 0) {
      // Return descriptive levels when no data
      // Use a deterministic approach for consistency
      if (vehicleId) {
        const levels = ['Low', 'Medium', 'High'];
        const index = vehicleId.charCodeAt(vehicleId.length - 1) % levels.length;
        return levels[index];
      }
      
      // Default fallback
      switch (type) {
        case 'bloodPressure':
          return 'Medium';
        case 'alcoholLevel':
          return 'Low';
        default:
          return 'Normal';
      }
    }

    // Return actual values when data is available
    switch (type) {
      case 'bloodPressure':
        return `${value}`;
      case 'alcoholLevel':
        return value.toFixed(3);
      default:
        return value;
    }
  };

  const getHealthUnit = (value, type) => {
    if (!value || value === 0) {
      return ''; // No unit for descriptive levels
    }
    
    switch (type) {
      case 'bloodPressure':
        return 'mmHg';
      case 'alcoholLevel':
        return '%';
      default:
        return '';
    }
  };

  // Sample enhanced data with ThingSpeak integration
  const dashboardData = {
    overview: {
      totalVehicles: 3,
      activeDrivers: 1,
      incidents: thingSpeakData.alcoholLevel > 0.05 ? 1 : 0,
      safetyScore: thingSpeakData.alcoholLevel > 0.05 ? 87.2 : 94.2,
      alerts: thingSpeakData.bloodPressure > 140 || thingSpeakData.alcoholLevel > 0.05 ? 3 : 1
    },
    vehicles: [
      { 
        id: 'VH-001', 
        driver: 'Kwame Asante', 
        status: thingSpeakData.alcoholLevel > 0.05 ? 'violation' : 'active', 
        location: 'Osu, Accra',
        longitude: thingSpeakData.longitude?.toFixed(4) || '-1.7170',
        latitude: thingSpeakData.latitude?.toFixed(4) || '4.9597',
        bloodPressure: thingSpeakData.bloodPressure || 0,
        alcoholLevel: thingSpeakData.alcoholLevel || 0,
        bloodPressureDisplay: getHealthDisplayValue(thingSpeakData.bloodPressure, 'bloodPressure', 'VH-001'),
        alcoholLevelDisplay: getHealthDisplayValue(thingSpeakData.alcoholLevel, 'alcoholLevel', 'VH-001'),
        bloodPressureUnit: getHealthUnit(thingSpeakData.bloodPressure, 'bloodPressure'),
        alcoholLevelUnit: getHealthUnit(thingSpeakData.alcoholLevel, 'alcoholLevel'),
        lastCheck: '2 mins ago', 
        alerts: thingSpeakData.alcoholLevel > 0.05 || thingSpeakData.bloodPressure > 140 ? 1 : 0 
      },
      { 
        id: 'VH-002', 
        driver: 'Ama Serwaa', 
        status: 'active', 
        location: 'Kotoka Airport',
        longitude: '-1.7050',
        latitude: '4.9720',
        bloodPressure: 0, // No data
        alcoholLevel: 0, // No data
        bloodPressureDisplay: getHealthDisplayValue(0, 'bloodPressure', 'VH-002'),
        alcoholLevelDisplay: getHealthDisplayValue(0, 'alcoholLevel', 'VH-002'),
        bloodPressureUnit: getHealthUnit(0, 'bloodPressure'),
        alcoholLevelUnit: getHealthUnit(0, 'alcoholLevel'),
        lastCheck: '1 hour ago', 
        alerts: 0 
      },
      { 
        id: 'VH-003', 
        driver: 'Kofi Mensah', 
        status: 'maintenance', 
        location: 'Tema Industrial Area',
        longitude: '-1.7300',
        latitude: '4.9450',
        bloodPressure: 0, // No data
        alcoholLevel: 0, // No data
        bloodPressureDisplay: getHealthDisplayValue(0, 'bloodPressure', 'VH-003'),
        alcoholLevelDisplay: getHealthDisplayValue(0, 'alcoholLevel', 'VH-003'),
        bloodPressureUnit: getHealthUnit(0, 'bloodPressure'),
        alcoholLevelUnit: getHealthUnit(0, 'alcoholLevel'),
        lastCheck: '3 hours ago', 
        alerts: 0 
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <SEO 
        title="Dashboard - EraSafeDrive Driver Safety Monitoring"
        description="Monitor your fleet's driver safety with real-time GPS tracking, alcohol detection, blood pressure monitoring, and comprehensive vehicle management."
        keywords="driver safety dashboard, fleet management, real-time monitoring, vehicle tracking, driver health monitoring"
        url="https://erasafedrive.com/dashboard"
      />
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleRefresh={handleRefresh}
        isRefreshing={isRefreshing}
        user={currentUser}
        onLogout={handleLogout}
      />

      <main className="p-6 space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Live ThingSpeak Data */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Live ThingSpeak Data</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">
                    Last updated: {thingSpeakData.lastUpdate?.toLocaleTimeString() || 'Never'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map takes up 2/3 of the space */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      Vehicle Location
                    </h4>
                  </div>
                  <LocationMap
                    longitude={thingSpeakData.longitude}
                    latitude={thingSpeakData.latitude}
                    vehicleId="VH-001"
                    driverName="Kwame Asante"
                    height="300px"
                    className="w-full"
                  />
                </div>
                
                {/* Health data takes up 1/3 of the space */}
                <div className="space-y-4">
                  <LiveDataCard
                    icon={Heart}
                    title="Blood Pressure"
                    value={getHealthDisplayValue(thingSpeakData.bloodPressure, 'bloodPressure')}
                    unit={getHealthUnit(thingSpeakData.bloodPressure, 'bloodPressure')}
                    status={getHealthStatus(thingSpeakData.bloodPressure, 'bloodPressure')}
                    color="red"
                  />
                  <LiveDataCard
                    icon={Droplet}
                    title="Alcohol Level"
                    value={getHealthDisplayValue(thingSpeakData.alcoholLevel, 'alcoholLevel')}
                    unit={getHealthUnit(thingSpeakData.alcoholLevel, 'alcoholLevel')}
                    status={getHealthStatus(thingSpeakData.alcoholLevel, 'alcoholLevel')}
                    color="orange"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <StatsCard 
                icon={Car} 
                title="Total Vehicles" 
                value={dashboardData.overview.totalVehicles}
                trend={TrendingUp}
                color="blue"
                isLoading={isLoadingData}
              />
              <StatsCard 
                icon={Users} 
                title="Active Drivers" 
                value={dashboardData.overview.activeDrivers}
                trend={TrendingUp}
                color="green"
                isLoading={isLoadingData}
              />
              <StatsCard 
                icon={AlertTriangle} 
                title="Incidents Today" 
                value={dashboardData.overview.incidents}
                trend={TrendingDown}
                color="red"
                isLoading={isLoadingData}
              />
              <StatsCard 
                icon={Shield} 
                title="Safety Score" 
                value={`${dashboardData.overview.safetyScore}%`}
                trend={TrendingUp}
                color="green"
                isLoading={isLoadingData}
              />
              <StatsCard 
                icon={Bell} 
                title="Active Alerts" 
                value={dashboardData.overview.alerts}
                trend={TrendingUp}
                color="orange"
                isLoading={isLoadingData}
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard 
                title="Safety Trends"
                actions={
                  <select
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-900"
                  >
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                  </select>
                }
              >
                <div className="text-center">
                  <LineChart className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <div className="text-gray-500">Safety trend visualization</div>
                  <div className="text-sm text-gray-400 mt-2">
                    Real-time data from ThingSpeak integration
                  </div>
                </div>
              </ChartCard>

              <ChartCard 
                title="Vehicle Overview"
                actions={
                  <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                }
              >
                <div className="text-center">
                  <Car className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <div className="text-gray-500">Fleet status overview</div>
                  <div className="text-sm text-gray-400 mt-2">
                    {dashboardData.overview.totalVehicles} vehicles, {dashboardData.overview.activeDrivers} active
                  </div>
                </div>
              </ChartCard>
            </div>

            {/* Health Monitoring Graph - Full Width Section */}
            <div className="mt-6">
              <HealthMonitoringChart thingSpeakData={thingSpeakData} />
            </div>
          </div>
        )}

        {/* Vehicles Tab */}
        {activeTab === 'vehicles' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Vehicle Management</h2>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleExportReport}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </button>
              </div>
            </div>

            {/* Vehicles Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Active Vehicles</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Pressure</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alcohol Level</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerts</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dashboardData.vehicles.map((vehicle) => (
                      <VehicleRow 
                        key={vehicle.id}
                        vehicle={vehicle}
                        getStatusColor={getStatusColor}
                        onViewVehicle={handleViewVehicle}
                        onEditVehicle={handleEditVehicle}
                        onShowMoreOptions={handleMoreOptions}
                        onViewMap={handleViewMap}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Alerts & Notifications</h2>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-300">
                  Clear All
                </button>
              </div>
            </div>

            {/* Live Alerts from ThingSpeak Data */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live System Alerts</h3>
              <div className="space-y-3">
                {thingSpeakData.alcoholLevel > 0.05 && (
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-200">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-red-900">Critical: Alcohol Violation Detected</h4>
                      <p className="text-sm text-red-700 mt-1">
                        Driver has exceeded safe alcohol limit: {thingSpeakData.alcoholLevel?.toFixed(3)}% BAC
                      </p>
                      <div className="text-xs text-red-600 mt-2">Vehicle VH-001 • Just now</div>
                    </div>
                  </div>
                )}
                
                {thingSpeakData.bloodPressure > 140 && (
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-yellow-900">Warning: High Blood Pressure</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Driver showing elevated blood pressure: {thingSpeakData.bloodPressure} mmHg
                      </p>
                      <div className="text-xs text-yellow-600 mt-2">Vehicle VH-001 • Just now</div>
                    </div>
                  </div>
                )}

                {thingSpeakData.alcoholLevel <= 0.05 && thingSpeakData.bloodPressure <= 140 && (
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-green-900">All Systems Normal</h4>
                      <p className="text-sm text-green-700 mt-1">
                        All monitored parameters within safe limits
                      </p>
                      <div className="text-xs text-green-600 mt-2">Last check: {thingSpeakData.lastUpdate?.toLocaleTimeString()}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20">
                  <option value="daily">Daily Report</option>
                  <option value="weekly">Weekly Report</option>
                  <option value="monthly">Monthly Report</option>
                  <option value="custom">Custom Range</option>
                </select>
                <button 
                  onClick={handleExportReport}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </button>
              </div>
            </div>

            {/* Report Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Violations</p>
                    <p className="text-3xl font-bold text-red-600">12</p>
                    <p className="text-sm text-red-500 mt-1">↑ 8% from last week</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-full">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Alcohol Violations</p>
                    <p className="text-3xl font-bold text-orange-600">8</p>
                    <p className="text-sm text-orange-500 mt-1">↑ 12% from last week</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-full">
                    <Droplet className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Health Alerts</p>
                    <p className="text-3xl font-bold text-yellow-600">4</p>
                    <p className="text-sm text-green-500 mt-1">↓ 5% from last week</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-full">
                    <Heart className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Safe Trips</p>
                    <p className="text-3xl font-bold text-green-600">234</p>
                    <p className="text-sm text-green-500 mt-1">↑ 15% from last week</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Violation Trends Chart */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Violation Trends</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Alcohol Violations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Health Alerts</span>
                  </div>
                </div>
              </div>
              
              {/* Simple Chart Visualization */}
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-end justify-between space-x-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="flex-1 flex flex-col items-center space-y-1">
                      <div className="relative w-full max-w-12">
                        <div 
                          className="bg-red-500 rounded-t transition-all duration-500"
                          style={{ height: `${Math.random() * 80 + 20}px` }}
                        ></div>
                        <div 
                          className="bg-yellow-500 rounded-t -mt-1"
                          style={{ height: `${Math.random() * 60 + 10}px` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vehicle Performance Report */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Vehicle Performance Report</h3>
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search vehicles..."
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Trips</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Safe Trips</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Violations</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Safety Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dashboardData.vehicles.map((vehicle) => {
                      const totalTrips = Math.floor(Math.random() * 50) + 20;
                      const violations = Math.floor(Math.random() * 5);
                      const safeTrips = totalTrips - violations;
                      const safetyScore = Math.round((safeTrips / totalTrips) * 100);
                      
                      return (
                        <tr key={vehicle.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{vehicle.id}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{vehicle.driver}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{totalTrips}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-green-600 font-medium">{safeTrips}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`text-sm font-medium ${violations > 3 ? 'text-red-600' : violations > 1 ? 'text-yellow-600' : 'text-green-600'}`}>
                              {violations}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full transition-all duration-500 ${
                                    safetyScore >= 90 ? 'bg-green-500' : 
                                    safetyScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${safetyScore}%` }}
                                ></div>
                              </div>
                              <span className={`text-sm font-medium ${
                                safetyScore >= 90 ? 'text-green-600' : 
                                safetyScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {safetyScore}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => alert(`Generating detailed report for ${vehicle.id}...`)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                                title="Generate Report"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleViewVehicle(vehicle)}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-300"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Violations Report */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Violations</h3>
                <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                  View All →
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { 
                    id: 'VH-001', 
                    driver: 'Kwame Asante', 
                    type: 'Alcohol Violation', 
                    level: '0.072% BAC', 
                    time: '2 hours ago', 
                    severity: 'critical',
                    location: 'Downtown Route 1'
                  },
                  { 
                    id: 'VH-003', 
                    driver: 'Ama Serwaa', 
                    type: 'High Blood Pressure', 
                    level: '165 mmHg', 
                    time: '4 hours ago', 
                    severity: 'warning',
                    location: 'Highway 45'
                  },
                  { 
                    id: 'VH-005', 
                    driver: 'Kofi Mensah', 
                    type: 'Alcohol Violation', 
                    level: '0.058% BAC', 
                    time: '6 hours ago', 
                    severity: 'critical',
                    location: 'Industrial Zone'
                  },
                  { 
                    id: 'VH-002', 
                    driver: 'Kwaku Osei', 
                    type: 'Health Alert', 
                    level: '148 mmHg', 
                    time: '8 hours ago', 
                    severity: 'warning',
                    location: 'City Center'
                  }
                ].map((violation, index) => (
                  <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl border ${
                    violation.severity === 'critical' 
                      ? 'bg-red-50 border-red-200' 
                      : 'bg-yellow-50 border-yellow-200'
                  }`}>
                    <div className={`p-2 rounded-full ${
                      violation.severity === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
                    }`}>
                      {violation.type.includes('Alcohol') ? (
                        <Droplet className={`w-5 h-5 ${
                          violation.severity === 'critical' ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      ) : (
                        <Heart className={`w-5 h-5 ${
                          violation.severity === 'critical' ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${
                          violation.severity === 'critical' ? 'text-red-900' : 'text-yellow-900'
                        }`}>
                          {violation.type}
                        </h4>
                        <span className="text-xs text-gray-500">{violation.time}</span>
                      </div>
                      <p className={`text-sm mt-1 ${
                        violation.severity === 'critical' ? 'text-red-700' : 'text-yellow-700'
                      }`}>
                        Vehicle {violation.id} - {violation.driver}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span>Level: {violation.level}</span>
                          <span>Location: {violation.location}</span>
                        </div>
                        <button 
                          onClick={() => alert(`Viewing details for violation on ${violation.id}...`)}
                          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => alert('Exporting comprehensive report...')}
                  className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <Download className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Full Report (PDF)</span>
                </button>
                <button
                  onClick={() => alert('Exporting violation data...')}
                  className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <Download className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Violations (CSV)</span>
                </button>
                <button
                  onClick={() => alert('Exporting vehicle performance...')}
                  className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <Download className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Performance (Excel)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Vehicle View Modal */}
      {showViewModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Vehicle Details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Vehicle ID</label>
                  <div className="text-lg font-semibold text-gray-900">{selectedVehicle.id}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Driver</label>
                  <div className="text-lg text-gray-900">{selectedVehicle.driver}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Status</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedVehicle.status)}`}>
                    {selectedVehicle.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Location</label>
                  <div className="text-lg text-gray-900">{selectedVehicle.location}</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-3">Current Location</label>
                  <LocationMap
                    longitude={parseFloat(selectedVehicle.longitude)}
                    latitude={parseFloat(selectedVehicle.latitude)}
                    vehicleId={selectedVehicle.id}
                    driverName={selectedVehicle.driver}
                    height="250px"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Blood Pressure</label>
                  <div className="text-lg text-gray-900">{selectedVehicle.bloodPressure} mmHg</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Alcohol Level</label>
                  <div className="text-lg text-gray-900">{selectedVehicle.alcoholLevel}%</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Last Check</label>
                  <div className="text-lg text-gray-900">{selectedVehicle.lastCheck}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowViewModal(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowViewModal(false);
                    handleEditVehicle(selectedVehicle);
                  }}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Edit Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vehicle Edit Modal */}
      {showEditModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Vehicle</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle ID</label>
                  <input
                    type="text"
                    defaultValue={selectedVehicle.id}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Driver Name</label>
                  <input
                    type="text"
                    defaultValue={selectedVehicle.driver}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    defaultValue={selectedVehicle.status}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="violation">Violation</option>
                    <option value="training">Training</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue={selectedVehicle.location}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Vehicle updated successfully!');
                      setShowEditModal(false);
                    }}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* More Options Modal */}
      {showMoreOptionsModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Vehicle Actions</h2>
              <button
                onClick={() => setShowMoreOptionsModal(false)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  alert(`Sending message to ${selectedVehicle.driver}...`);
                  setShowMoreOptionsModal(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900">Send Message to Driver</span>
              </button>
              
              <button
                onClick={() => {
                  alert(`Calling ${selectedVehicle.driver}...`);
                  setShowMoreOptionsModal(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-gray-900">Call Driver</span>
              </button>
              
              <button
                onClick={() => {
                  alert(`Tracking ${selectedVehicle.id} on map...`);
                  setShowMoreOptionsModal(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-gray-900">Track on Map</span>
              </button>
              
              <button
                onClick={() => {
                  alert(`Generating report for ${selectedVehicle.id}...`);
                  setShowMoreOptionsModal(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <Download className="w-5 h-5 text-orange-600" />
                <span className="text-gray-900">Generate Report</span>
              </button>
              
              <div className="border-t border-gray-200 pt-3">
                <button
                  onClick={() => {
                    if (confirm(`Are you sure you want to disable vehicle ${selectedVehicle.id}?`)) {
                      alert(`Vehicle ${selectedVehicle.id} has been disabled.`);
                      setShowMoreOptionsModal(false);
                    }
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 rounded-lg transition-colors duration-300"
                >
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-600">Disable Vehicle</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {showMapModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Vehicle Location - {selectedVehicle.id}
              </h2>
              <button
                onClick={() => setShowMapModal(false)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <XCircle className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-gray-800">Driver: {selectedVehicle.driver}</span>
                </div>
                <div className="text-gray-600">Status: {selectedVehicle.status}</div>
                <div className="text-gray-600">Location: {selectedVehicle.location}</div>
              </div>
            </div>
            
            <LocationMap
              longitude={parseFloat(selectedVehicle.longitude)}
              latitude={parseFloat(selectedVehicle.latitude)}
              vehicleId={selectedVehicle.id}
              driverName={selectedVehicle.driver}
              height="500px"
              className="w-full"
            />
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  onClick={() => setShowMapModal(false)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;