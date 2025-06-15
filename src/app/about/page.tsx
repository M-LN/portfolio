import { Metadata } from 'next';
import TechStack from '@/components/TechStack';

export const metadata: Metadata = {
  title: 'About - Morten Lundum-Nørgaard',
  description: 'Learn more about my background, experience, and passion for development.',
};

const techStackData = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST API', 'GraphQL']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase']
  },
  {
    category: 'Tools & Cloud',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase']
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate developer with a love for creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Profile Section */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                Morten Lundum-Nørgaard
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Full-Stack Developer
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  📍 Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your City, Country
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  🎓 Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your Degree in Computer Science<br />
                  Your University (Year)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  💼 Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  3+ years in full-stack development
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Story
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey into software development began during my college years when I discovered 
                the power of code to solve real-world problems. What started as curiosity quickly 
                evolved into a passion for creating digital solutions that make a difference.
              </p>              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Over the past few years, I&apos;ve had the opportunity to work on diverse projects, 
                from e-commerce platforms to data analytics dashboards. Each project has taught 
                me something new and reinforced my belief that the best solutions come from 
                understanding both the technical requirements and the human needs behind them.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I specialize in full-stack development with a focus on modern JavaScript 
                frameworks, but I&apos;m always eager to learn new technologies and adapt to 
                changing requirements. I believe in writing clean, maintainable code and 
                creating user experiences that are both functional and delightful.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying outdoor activities. I&apos;m always open to 
                new challenges and opportunities to grow as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Skills & Technologies
          </h2>
          <TechStack technologies={techStackData} showTitle={false} />
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What I Value
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Code
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in writing clean, maintainable, and well-tested code that stands the test of time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                User Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every line of code should serve the end user. I prioritize creating intuitive and accessible experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The best solutions come from teamwork. I value open communication and shared learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
