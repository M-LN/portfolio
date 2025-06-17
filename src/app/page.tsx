import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import TechStack from '@/components/TechStack';

// Featured projects showcasing real work experience
const featuredProjects = [
  {
    id: '1',
    title: 'ADX Test Report Generator',
    description: 'Built a Flask web app that automatically pulls test data from Azure and creates HTML reports. Saves hours of manual work each week by generating reports with charts and analysis that used to be done by hand.',
    technologies: ['Python', 'Flask', 'Azure Data Explorer', 'HTML/CSS', 'JavaScript'],
    image: '/images/projects/flask-report-generator.svg',
    slug: 'adx-test-report-generator',
    featured: true,
  },
  {
    id: '2',
    title: 'Wind Turbine Data Analysis Tool',
    description: 'Created a Python tool to analyze wind turbine performance data. Helps engineers understand operational limits and spot patterns in the data. Generates clear charts and capability envelopes that make complex data easy to understand.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    image: '/images/projects/wind-turbine-analysis.svg',
    slug: 'wind-turbine-capability-analysis',
    featured: true,
  },
  {
    id: '3',
    title: 'Sensor Data Visualization App',
    description: 'Built a desktop app that reads sensor data from CSV, Excel, and TDMS files. Makes it easy to compare different sensors, spot anomalies, and create interactive charts. Turned a tedious manual process into a few clicks.',
    technologies: ['Python', 'Tkinter', 'Pandas', 'Plotly', 'Data Processing'],
    image: '/images/projects/sensor-data-visualizer.svg',
    slug: 'sensor-data-visualizer',
    featured: true,
  },
];

const techStackData = [
  {
    category: 'Programming & Analysis',
    items: ['Python', 'Data Analysis', 'NumPy', 'Pandas', 'Matplotlib', 'Machine Learning Basics']
  },
  {
    category: 'Web Development',
    items: ['Flask', 'HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Responsive Design']
  },
  {
    category: 'Data Visualization',
    items: ['Plotly', 'Seaborn', 'Interactive Charts', 'Statistical Plots', 'Dashboard Creation']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Azure Data Explorer', 'Desktop Applications', 'Tkinter', 'TDMS Files', 'Excel/CSV Processing']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="text-blue-600 dark:text-blue-400">Morten Lundum-Nørgaard</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Software developer who loves building practical tools for data analysis, 
              automation, and problem-solving in real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                View My Work
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors duration-200 font-medium"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some projects I&apos;ve built - from web applications to data analysis tools, 
              each one solving real problems I&apos;ve encountered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-lg"
            >
              View All Projects
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I enjoy working with.
            </p>
          </div>
          
          <TechStack technologies={techStackData} showTitle={false} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and challenging projects. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Start a Conversation
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
