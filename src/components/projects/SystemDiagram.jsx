import { useState } from 'react';
import { motion } from 'framer-motion';

const SystemDiagram = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  
  const layers = [
    {
      id: 'client',
      label: 'Client Layer',
      color: '#64FFDA',
      description: 'Web Application (React + D3.js), Mobile Applications, Third-party Platform Integrations'
    },
    {
      id: 'api',
      label: 'API Gateway',
      color: '#3B82F6',
      description: 'Request Routing, Load Distribution, Rate Limiting, Authentication/Authorization'
    },
    {
      id: 'core',
      label: 'Core Services',
      color: '#EC4899',
      description: 'Context Service (FastAPI + BERT), Intent Service (FastAPI + NetworkX), Prediction Service'
    },
    {
      id: 'data',
      label: 'Data Layer',
      color: '#F59E0B',
      description: 'Vector Database (FAISS/Pinecone), Graph Database (Neo4j), Time Series Database'
    }
  ];

  return (
    <div className="w-full bg-primary/30 rounded-lg p-6 border border-slate/20">
      <h3 className="text-lg font-semibold text-text mb-6">System Architecture</h3>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Interactive Diagram */}
        <div className="flex-1">
          <svg viewBox="0 0 300 400" className="w-full max-w-sm mx-auto">
            {layers.map((layer, index) => (
              <motion.g 
                key={layer.id}
                onHoverStart={() => setActiveLayer(layer.id)}
                onHoverEnd={() => setActiveLayer(null)}
                initial={false}
                animate={{
                  scale: activeLayer === layer.id ? 1.05 : 1,
                  opacity: activeLayer && activeLayer !== layer.id ? 0.5 : 1
                }}
              >
                <rect
                  x="50"
                  y={50 + index * 80}
                  width="200"
                  height="60"
                  rx="8"
                  fill={layer.color}
                  fillOpacity="0.1"
                  stroke={layer.color}
                  strokeWidth="2"
                  className="cursor-pointer"
                />
                <text
                  x="150"
                  y={85 + index * 80}
                  textAnchor="middle"
                  fill="currentColor"
                  className="text-sm text-text"
                >
                  {layer.label}
                </text>
                {index < layers.length - 1 && (
                  <line
                    x1="150"
                    y1={110 + index * 80}
                    x2="150"
                    y2={130 + index * 80}
                    stroke={layer.color}
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                )}
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Layer Description */}
        <div className="flex-1 space-y-4">
          {activeLayer ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/50 p-4 rounded-lg border border-slate/20"
            >
              <h4 className="text-text font-medium mb-2">
                {layers.find(l => l.id === activeLayer)?.label}
              </h4>
              <p className="text-slate text-sm">
                {layers.find(l => l.id === activeLayer)?.description}
              </p>
            </motion.div>
          ) : (
            <p className="text-slate text-sm">
              Hover over the layers to learn more about each component.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemDiagram;