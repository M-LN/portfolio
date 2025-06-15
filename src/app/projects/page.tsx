import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects - Morten Lundum-Nørgaard',
  description: 'Explore my portfolio of projects showcasing my skills in web development and software engineering.',
};

// Real project data showcasing actual work experience
const allProjects = [
  {
    id: '1',
    title: 'ADX Test Report Generator',
    description: 'A Flask web application that generates comprehensive HTML reports from test data stored in Azure Data Explorer (ADX). Features automated data retrieval, customizable report templates, and interactive visualizations for test analysis.',
    technologies: ['Python', 'Flask', 'Azure Data Explorer', 'HTML/CSS', 'JavaScript', 'Jinja2'],
    slug: 'adx-test-report-generator',
    featured: true,
  },
  {
    id: '2',
    title: 'LSTM Steady State Detection',
    description: 'Machine Learning model using LSTM neural networks to predict steady state conditions early from temperature data during generator testing. Reduces testing time and improves efficiency in industrial testing processes.',
    technologies: ['Python', 'TensorFlow/Keras', 'LSTM', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    slug: 'lstm-steady-state-detection',
    featured: true,
  },
  {
    id: '3',
    title: 'Timeseries Data Analysis GUI',
    description: 'Comprehensive desktop application built with Tkinter providing advanced tools for timeseries data analysis. Features statistical analysis, visualization tools, data filtering, and export capabilities for engineering data analysis.',
    technologies: ['Python', 'Tkinter', 'Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'Plotly'],
    slug: 'timeseries-analysis-gui',
    featured: true,
  },
];

export default function Projects() {
  const featuredProjects = allProjects.filter(project => project.featured);
  const otherProjects = allProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills, creativity, and problem-solving abilities. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              {featuredProjects.length} Featured
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Other Projects
            </h2>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
              </svg>
              {otherProjects.length} Projects
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Working Together?
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Let&apos;s Talk
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
