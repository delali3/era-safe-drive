import React, { useState, useEffect } from 'react';
import { 
  Bell, Settings, User, LogOut, Search, Filter, Download, 
  Plus, AlertTriangle, CheckCircle, XCircle, Clock, 
  Car, Users, Shield, Activity, TrendingUp, TrendingDown,
  MapPin, Battery, Wifi, WifiOff, Heart, Thermometer,
  Calendar, MoreVertical, Eye, Edit, Trash2, RefreshCw,
  BarChart3, PieChart, LineChart, Zap, Star, Award,
  Navigation, Phone, Mail, AlertCircle
} from 'lucide-react';

// Header Component
const Header = ({ activeTab, setActiveTab, searchTerm, setSearchTerm, handleRefresh, isRefreshing }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            EraSafeDrive
          </h1>
          <nav className="hidden md:flex space-x-1">
            {['overview', 'vehicles', 'drivers', 'reports', 'alerts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
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
              className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Refresh */}
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          {/* Profile */}
          <div className="relative">
            <button className="flex items-center space-x-2 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
              <User className="w-5 h-5" />
              <span className="hidden md:block">Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Stats Card Component
const StatsCard = ({ icon: Icon, title, value, trend: TrendIcon, color }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-${color}-500/20 rounded-xl`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        <TrendIcon className={`w-5 h-5 ${TrendIcon === TrendingUp ? 'text-green-400' : 'text-red-400'}`} />
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{title}</div>
    </div>
  );
};

// Chart Card Component
const ChartCard = ({ title, children, actions }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {actions}
      </div>
      <div className="h-64 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// Activity Item Component
const ActivityItem = ({ activity, getAlertIcon, getStatusColor }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl">
      <div className="flex-shrink-0">
        {getAlertIcon(activity.type)}
      </div>
      <div className="flex-1">
        <div className="text-white font-medium">{activity.driver}</div>
        <div className="text-sm text-gray-400">{activity.vehicle} • {activity.time}</div>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
        {activity.status}
      </div>
    </div>
  );
};

// Vehicle Row Component
const VehicleRow = ({ vehicle, getStatusColor }) => {
  return (
    <tr className="hover:bg-gray-700/30 transition-colors duration-300">
      <td className="px-6 py-4">
        <div className="font-medium text-white">{vehicle.id}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-white">{vehicle.driver}</div>
      </td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
          {vehicle.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">{vehicle.location}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <Battery className="w-4 h-4 text-green-400" />
          <span className="text-white">{vehicle.battery}%</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-gray-300">{vehicle.lastCheck}</div>
      </td>
      <td className="px-6 py-4">
        {vehicle.alerts > 0 ? (
          <div className="flex items-center space-x-1">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400">{vehicle.alerts}</span>
          </div>
        ) : (
          <CheckCircle className="w-4 h-4 text-green-400" />
        )}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

// Driver Card Component
const DriverCard = ({ driver, getStatusColor }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-white">{driver.name}</div>
            <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(driver.status)}`}>
              {driver.status}
            </div>
          </div>
        </div>
        <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Safety Score</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-500"
                style={{ width: `${driver.safetyScore}%` }}
              ></div>
            </div>
            <span className="text-white font-medium">{driver.safetyScore}%</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">Total Trips</span>
          <span className="text-white font-medium">{driver.trips}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">Violations</span>
          <span className={`font-medium ${driver.violations === 0 ? 'text-green-400' : 'text-red-400'}`}>
            {driver.violations}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">Last Active</span>
          <span className="text-white">{driver.lastActive}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-700/50">
        <button className="flex-1 py-2 px-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-300">
          View Details
        </button>
        <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
          <Phone className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Alert Item Component
const AlertItem = ({ alert }) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-xl">
      <div className="flex-shrink-0 mt-1">
        {alert.type === 'critical' && <AlertTriangle className="w-5 h-5 text-red-400" />}
        {alert.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-400" />}
        {alert.type === 'info' && <Bell className="w-5 h-5 text-blue-400" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <h4 className="font-medium text-white">{alert.title}</h4>
          <span className="text-xs text-gray-400">• {alert.vehicle}</span>
        </div>
        <p className="text-sm text-gray-300 mb-2">{alert.description}</p>
        <div className="text-xs text-gray-400">{alert.time}</div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-lg bg-gray-600/50 hover:bg-gray-500/50 transition-colors duration-300">
          <Eye className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-colors duration-300">
          <CheckCircle className="w-4 h-4 text-green-400" />
        </button>
        <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors duration-300">
          <XCircle className="w-4 h-4 text-red-400" />
        </button>
      </div>
    </div>
  );
};

// Report Card Component
const ReportCard = ({ icon: Icon, title, description, color, onGenerate }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-3 bg-${color}-500/20 rounded-xl`}>
          <Icon className={`w-6 h-6 text-${color}-400`} />
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <button 
        onClick={onGenerate}
        className={`w-full py-2 px-4 bg-${color}-500/20 text-${color}-400 rounded-lg hover:bg-${color}-500/30 transition-colors duration-300`}
      >
        Generate Report
      </button>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const dashboardData = {
    overview: {
      totalVehicles: 127,
      activeDrivers: 89,
      incidents: 3,
      safetyScore: 94.2,
      alerts: 12
    },
    recentActivity: [
      { id: 1, type: 'violation', driver: 'John Smith', vehicle: 'VH-001', time: '2 mins ago', status: 'resolved' },
      { id: 2, type: 'maintenance', driver: 'Sarah Johnson', vehicle: 'VH-023', time: '15 mins ago', status: 'pending' },
      { id: 3, type: 'alert', driver: 'Mike Chen', vehicle: 'VH-045', time: '1 hour ago', status: 'investigating' },
      { id: 4, type: 'success', driver: 'Lisa Wang', vehicle: 'VH-012', time: '2 hours ago', status: 'completed' }
    ],
    vehicles: [
      { id: 'VH-001', driver: 'John Smith', status: 'active', location: 'Downtown', battery: 85, lastCheck: '2 mins ago', alerts: 0 },
      { id: 'VH-002', driver: 'Sarah Johnson', status: 'inactive', location: 'Airport', battery: 92, lastCheck: '1 hour ago', alerts: 1 },
      { id: 'VH-003', driver: 'Mike Chen', status: 'maintenance', location: 'Service Center', battery: 45, lastCheck: '3 hours ago', alerts: 2 },
      { id: 'VH-004', driver: 'Lisa Wang', status: 'active', location: 'Industrial Zone', battery: 78, lastCheck: '5 mins ago', alerts: 0 },
      { id: 'VH-005', driver: 'Tom Brown', status: 'active', location: 'City Center', battery: 88, lastCheck: '1 min ago', alerts: 0 }
    ],
    drivers: [
      { id: 1, name: 'John Smith', status: 'active', safetyScore: 96, trips: 245, violations: 1, lastActive: '2 mins ago' },
      { id: 2, name: 'Sarah Johnson', status: 'inactive', safetyScore: 92, trips: 189, violations: 2, lastActive: '1 hour ago' },
      { id: 3, name: 'Mike Chen', status: 'training', safetyScore: 88, trips: 156, violations: 3, lastActive: '3 hours ago' },
      { id: 4, name: 'Lisa Wang', status: 'active', safetyScore: 98, trips: 278, violations: 0, lastActive: '5 mins ago' },
      { id: 5, name: 'Tom Brown', status: 'active', safetyScore: 94, trips: 203, violations: 1, lastActive: '1 min ago' }
    ],
    alerts: [
      { 
        id: 1, 
        type: 'critical', 
        title: 'Alcohol Detection Violation', 
        description: 'Driver John Smith failed breathalyzer test in vehicle VH-001',
        time: '2 minutes ago',
        vehicle: 'VH-001'
      },
      { 
        id: 2, 
        type: 'warning', 
        title: 'High Heart Rate Detected', 
        description: 'Driver Sarah Johnson showing elevated heart rate (120 BPM)',
        time: '15 minutes ago',
        vehicle: 'VH-023'
      },
      { 
        id: 3, 
        type: 'info', 
        title: 'Scheduled Maintenance Due', 
        description: 'Vehicle VH-045 requires routine safety system check',
        time: '1 hour ago',
        vehicle: 'VH-045'
      },
      { 
        id: 4, 
        type: 'warning', 
        title: 'Low Battery Warning', 
        description: 'Vehicle VH-003 battery level at 45% - charging recommended',
        time: '3 hours ago',
        vehicle: 'VH-003'
      }
    ]
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'inactive': return 'text-gray-400 bg-gray-400/10';
      case 'maintenance': return 'text-orange-400 bg-orange-400/10';
      case 'violation': return 'text-red-400 bg-red-400/10';
      case 'training': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'violation': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'maintenance': return <Settings className="w-4 h-4 text-orange-400" />;
      case 'alert': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      <main className="p-6 space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <StatsCard 
                icon={Car} 
                title="Total Vehicles" 
                value={dashboardData.overview.totalVehicles}
                trend={TrendingUp}
                color="blue"
              />
              <StatsCard 
                icon={Users} 
                title="Active Drivers" 
                value={dashboardData.overview.activeDrivers}
                trend={TrendingUp}
                color="green"
              />
              <StatsCard 
                icon={AlertTriangle} 
                title="Incidents Today" 
                value={dashboardData.overview.incidents}
                trend={TrendingDown}
                color="red"
              />
              <StatsCard 
                icon={Shield} 
                title="Safety Score" 
                value={`${dashboardData.overview.safetyScore}%`}
                trend={TrendingUp}
                color="cyan"
              />
              <StatsCard 
                icon={Bell} 
                title="Active Alerts" 
                value={dashboardData.overview.alerts}
                trend={TrendingUp}
                color="orange"
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
                    className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-1 text-sm text-white"
                  >
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                  </select>
                }
              >
                <div className="text-center">
                  <LineChart className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <div className="text-gray-400">Chart visualization would go here</div>
                </div>
              </ChartCard>

              <ChartCard 
                title="Vehicle Status"
                actions={
                  <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                }
              >
                <div className="text-center">
                  <PieChart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <div className="text-gray-400">Pie chart visualization would go here</div>
                </div>
              </ChartCard>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {dashboardData.recentActivity.map((activity) => (
                  <ActivityItem 
                    key={activity.id}
                    activity={activity}
                    getAlertIcon={getAlertIcon}
                    getStatusColor={getStatusColor}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vehicles Tab */}
        {activeTab === 'vehicles' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Vehicle Management</h2>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300">
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </button>
                <select className="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white">
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ReportCard 
                icon={BarChart3}
                title="Safety Report"
                description="Comprehensive safety analysis"
                color="blue"
                onGenerate={() => alert('Generating Safety Report...')}
              />
              <ReportCard 
                icon={TrendingUp}
                title="Performance Report"
                description="Driver performance metrics"
                color="green"
                onGenerate={() => alert('Generating Performance Report...')}
              />
              <ReportCard 
                icon={PieChart}
                title="Fleet Report"
                description="Vehicle utilization data"
                color="purple"
                onGenerate={() => alert('Generating Fleet Report...')}
              />
            </div>

            {/* Recent Reports */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Reports</h3>
              <div className="space-y-3">
                {[
                  { name: 'Monthly Safety Summary', date: '2025-06-01', type: 'safety', size: '2.3 MB' },
                  { name: 'Driver Performance Q2', date: '2025-05-28', type: 'performance', size: '1.8 MB' },
                  { name: 'Fleet Utilization May', date: '2025-05-25', type: 'fleet', size: '3.1 MB' },
                  { name: 'Incident Analysis', date: '2025-05-20', type: 'incident', size: '856 KB' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-600/50 rounded-lg">
                        <BarChart3 className="w-4 h-4 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{report.name}</div>
                        <div className="text-xs text-gray-400">{report.date} • {report.size}</div>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg bg-gray-600/50 hover:bg-gray-500/50 transition-colors duration-300">
                      <Download className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Alerts Tab */}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Alerts & Notifications</h2>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300">
                  Clear All
                </button>
                <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Alert Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { type: 'critical', count: 3, color: 'red', icon: AlertTriangle },
                { type: 'warning', count: 8, color: 'yellow', icon: AlertCircle },
                { type: 'info', count: 12, color: 'blue', icon: Bell },
                { type: 'resolved', count: 45, color: 'green', icon: CheckCircle }
              ].map((category) => (
                <div key={category.type} className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-${category.color}-500/20 rounded-lg`}>
                      <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{category.count}</div>
                      <div className="text-sm text-gray-400 capitalize">{category.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Alerts */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Active Alerts</h3>
              <div className="space-y-3">
                {dashboardData.alerts.map((alert) => (
                  <AlertItem key={alert.id} alert={alert} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;