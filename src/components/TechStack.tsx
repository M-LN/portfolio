interface TechStackProps {
  title?: string;
  technologies: {
    category: string;
    items: string[];
  }[];
  showTitle?: boolean;
}

export default function TechStack({ 
  title = "Tech Stack", 
  technologies, 
  showTitle = true 
}: TechStackProps) {
  const getTechIcon = (tech: string) => {
    // Simple tech icon mapping - you can expand this or use actual icons
    const iconMap: { [key: string]: string } = {
      'JavaScript': '🟨',
      'TypeScript': '🔷',
      'React': '⚛️',
      'Next.js': '▲',
      'Node.js': '🟢',
      'Python': '🐍',
      'Java': '☕',
      'C#': '#️⃣',
      'HTML': '🌐',
      'CSS': '🎨',
      'Tailwind CSS': '💨',
      'MongoDB': '🍃',
      'PostgreSQL': '🐘',
      'MySQL': '🐬',
      'Redis': '🔴',
      'Docker': '🐳',
      'AWS': '☁️',
      'Azure': '☁️',
      'Git': '📚',
      'GraphQL': '🔗',
      'REST API': '🔌',
      'Firebase': '🔥',
      'Supabase': '⚡',
    };
    
    return iconMap[tech] || '⚙️';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      {showTitle && (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
      )}
      
      <div className="space-y-6">
        {technologies.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {category.items.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <span className="text-lg mr-3" role="img" aria-label={tech}>
                    {getTechIcon(tech)}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Skill Level Indicator */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Proficiency Level:</span>
          <div className="flex items-center space-x-2">
            <span>Beginner</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= 4 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <span>Expert</span>
          </div>
        </div>
      </div>
    </div>
  );
}
