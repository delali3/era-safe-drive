import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Heart, Droplet, Activity } from 'lucide-react';

const HealthMonitoringChart = ({ thingSpeakData }) => {
  const [healthData, setHealthData] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [nextUpdate, setNextUpdate] = useState(null);

  // Generate sample data points for the 10-second recording
  const generateHealthDataPoints = (bloodPressure, alcoholLevel) => {
    const dataPoints = [];
    const baseTime = new Date();
    
    for (let i = 0; i < 10; i++) {
      const time = new Date(baseTime.getTime() + i * 1000);
      const timeString = time.toLocaleTimeString();
      
      // Add some realistic variation to the data
      const bpVariation = (Math.random() - 0.5) * 10; // ±5 mmHg variation
      const alcoholVariation = (Math.random() - 0.5) * 0.01; // ±0.005% variation
      
      dataPoints.push({
        time: timeString,
        seconds: i + 1,
        bloodPressure: Math.max(0, (bloodPressure || 120) + bpVariation),
        alcoholLevel: Math.max(0, (alcoholLevel || 0.02) + alcoholVariation),
      });
    }
    
    return dataPoints;
  };

  // Start recording health data
  const startRecording = () => {
    setIsRecording(true);
    setRecordingProgress(0);
    
    const newData = generateHealthDataPoints(
      thingSpeakData.bloodPressure, 
      thingSpeakData.alcoholLevel
    );
    
    // Simulate real-time data recording over 10 seconds
    const interval = setInterval(() => {
      setRecordingProgress((prev) => {
        const next = prev + 1;
        if (next >= 10) {
          clearInterval(interval);
          setIsRecording(false);
          setHealthData(newData);
          
          // Set next update time (3 minutes from now)
          const nextTime = new Date(Date.now() + 3 * 60 * 1000);
          setNextUpdate(nextTime);
          
          return 10;
        }
        return next;
      });
    }, 1000);
  };

  // Auto-start recording every 3 minutes
  useEffect(() => {
    // Start initial recording
    startRecording();
    
    // Set up interval for every 3 minutes
    const interval = setInterval(() => {
      startRecording();
    }, 3 * 60 * 1000); // 3 minutes in milliseconds
    
    return () => clearInterval(interval);
  }, [thingSpeakData]);

  // Update countdown timer
  useEffect(() => {
    if (nextUpdate && !isRecording) {
      const interval = setInterval(() => {
        const now = new Date();
        if (now >= nextUpdate) {
          clearInterval(interval);
          setNextUpdate(null);
        }
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [nextUpdate, isRecording]);

  const getTimeUntilNextUpdate = () => {
    if (!nextUpdate || isRecording) return null;
    
    const now = new Date();
    const diff = nextUpdate - now;
    
    if (diff <= 0) return null;
    
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`Second: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value.toFixed(entry.dataKey === 'alcoholLevel' ? 3 : 0)}
              {entry.dataKey === 'bloodPressure' ? ' mmHg' : '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <Activity className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Health Monitoring</h3>
            {/* <p className="text-sm text-gray-600">10-second real-time monitoring every 3 minutes</p> */}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {isRecording && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-red-600">
                Recording... {recordingProgress}/10s
              </span>
            </div>
          )}
          
          {/* {!isRecording && nextUpdate && (
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-600">
                Next update in: {getTimeUntilNextUpdate()}
              </span>
            </div>
          )} */}
          
          <button
            onClick={startRecording}
            disabled={isRecording}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 text-sm"
          >
            {isRecording ? 'Recording...' : 'Start Manual Recording'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {/* {isRecording && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Recording Progress</span>
            <span className="text-sm text-gray-500">{recordingProgress}/10 seconds</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(recordingProgress / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      )} */}

      {/* Chart */}
      <div className="h-80">
        {healthData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={healthData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="seconds" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                yAxisId="bloodPressure"
                orientation="left"
                stroke="#ef4444"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                yAxisId="alcoholLevel"
                orientation="right"
                stroke="#f97316"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                yAxisId="bloodPressure"
                type="monotone"
                dataKey="bloodPressure"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                name="Blood Pressure (mmHg)"
              />
              <Line
                yAxisId="alcoholLevel"
                type="monotone"
                dataKey="alcoholLevel"
                stroke="#f97316"
                strokeWidth={3}
                dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                name="Alcohol Level (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Waiting for health monitoring data...</p>
              <p className="text-sm text-gray-400 mt-2">
                {isRecording ? `Recording in progress... ${recordingProgress}/10s` : 'Click "Start Manual Recording" to begin'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Health Status Summary */}
      {healthData.length > 0 && !isRecording && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
              <Heart className="w-8 h-8 text-red-600" />
              <div>
                <div className="font-semibold text-red-900">Blood Pressure</div>
                <div className="text-sm text-red-700">
                  Avg: {(healthData.reduce((sum, item) => sum + item.bloodPressure, 0) / healthData.length).toFixed(0)} mmHg
                </div>
                <div className="text-xs text-red-600">
                  Range: {Math.min(...healthData.map(d => d.bloodPressure)).toFixed(0)} - {Math.max(...healthData.map(d => d.bloodPressure)).toFixed(0)} mmHg
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
              <Droplet className="w-8 h-8 text-orange-600" />
              <div>
                <div className="font-semibold text-orange-900">Alcohol Level</div>
                <div className="text-sm text-orange-700">
                  Avg: {(healthData.reduce((sum, item) => sum + item.alcoholLevel, 0) / healthData.length).toFixed(3)}%
                </div>
                <div className="text-xs text-orange-600">
                  Range: {Math.min(...healthData.map(d => d.alcoholLevel)).toFixed(3)} - {Math.max(...healthData.map(d => d.alcoholLevel)).toFixed(3)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthMonitoringChart;
