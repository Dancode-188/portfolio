const SkillLevel = ({ skill, level, description }) => {
  const levelColors = {
    'Production Experience': 'text-secondary border-secondary/50',
    'Advanced': 'text-blue-400 border-blue-400/50',
    'Proficient': 'text-green-400 border-green-400/50',
    'Learning': 'text-yellow-400 border-yellow-400/50'
  };

  return (
    <div className="bg-primary/50 rounded-lg p-4 border border-slate/20 hover:border-secondary/30 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-text">{skill}</h4>
        <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[level] || 'text-slate border-slate/30'}`}>
          {level}
        </span>
      </div>
      <p className="text-sm text-slate">{description}</p>
    </div>
  );
};

export default SkillLevel;