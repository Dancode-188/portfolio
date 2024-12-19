import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Zap, Server } from 'lucide-react';

const PerformanceMetrics = () => {
  const [activeMetric, setActiveMetric] = useState('latency');

  const metrics = {
    latency: {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      value: "95ms",
      target: "<100ms",
      data: [
        { name: 'Initial', value: 150 },
        { name: 'Optimization 1', value: 120 },
        { name: 'Caching', value: 100 },
        { name: 'Final', value: 95 }
      ]
    },
    throughput: {
      icon: <Zap className="w-5 h-5" />,
      title: "Requests/Second",
      value: "1,000+",
      target: "1,000",
      data: [
        { name: 'Initial', value: 400 },
        { name: 'Scaling', value: 600 },
        { name: 'Optimization', value: 800 },
        { name: 'Final', value: 1000 }
      ]
    },
    efficiency: {
      icon: <Server className="w-5 h-5" />,
      title: "Resource Usage",
      value: "70%",
      target: "<75%",
      data: [
        { name: 'Initial', value: 85 },
        { name: 'Optimization 1', value: 80 },
        { name: 'Optimization 2', value: 75 },
        { name: 'Final', value: 70 }
      ]
    }
  };

  return (
    <div className="bg-primary/30 rounded-lg p-4 md:p-6 border border-slate/20">
      <h3 className="text-lg font-semibold text-text mb-4 md:mb-6">Performance Metrics</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 md:mb-8">
        {Object.entries(metrics).map(([key, metric]) => (
          <motion.div
            key={key}
            className={`p-4 rounded-lg cursor-pointer border ${
              activeMetric === key 
                ? 'border-secondary bg-secondary/10' 
                : 'border-slate/20 hover:border-secondary/50'
            }`}
            onClick={() => setActiveMetric(key)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-secondary">{metric.icon}</span>
              <span className="text-sm font-medium text-text">{metric.title}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="text-2xl font-bold text-text">{metric.value}</div>
              <div className="text-sm text-slate">Target: {metric.target}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="h-48 md:h-64 -mx-4 md:mx-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metrics[activeMetric].data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <XAxis 
              dataKey="name" 
              stroke="#8892B0" 
              fontSize={12}
            />
            <YAxis 
              stroke="#8892B0" 
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0A192F',
                border: '1px solid #64FFDA',
                borderRadius: '4px'
              }}
              labelStyle={{ color: '#E6F1FF' }}
              itemStyle={{ color: '#64FFDA' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#64FFDA" 
              strokeWidth={2}
              dot={{ fill: '#64FFDA' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceMetrics;