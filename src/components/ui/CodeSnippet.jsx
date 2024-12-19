import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const CodeSnippet = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden bg-[#1E2D3D] border border-slate/20">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-primary">
        <span className="text-sm text-slate">{title}</span>
        <button
          onClick={handleCopy}
          className="p-1 hover:text-secondary transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      
      {/* Code */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-slate/20 scrollbar-track-transparent">
          <code className="text-sm md:text-base font-mono text-slate whitespace-pre-wrap break-all md:break-normal">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;