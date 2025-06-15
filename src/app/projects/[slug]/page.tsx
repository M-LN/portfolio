import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CaseStudy from '@/components/CaseStudy';

// Sample project data - in a real app, this would come from a database or CMS
const projectsData = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    overview: 'A comprehensive e-commerce solution built from the ground up using modern web technologies. This platform features a complete shopping experience with user authentication, product catalog, shopping cart, secure payment processing, and an admin dashboard for inventory management.',
    challenge: 'The main challenge was creating a scalable, secure e-commerce platform that could handle multiple concurrent users while maintaining fast performance and providing an intuitive user experience. Additionally, integrating with payment processors and ensuring PCI compliance added complexity to the project.',
    solution: 'I implemented a modern tech stack using Next.js for server-side rendering and optimal performance, PostgreSQL for reliable data storage, and Stripe for secure payment processing. The architecture follows a modular approach with reusable components and API routes for seamless data management.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma', 'NextAuth.js'],
    sections: [
      {
        title: 'User Authentication & Authorization',
        content: 'Implemented secure user authentication using NextAuth.js with support for multiple providers (email/password, Google, GitHub). The system includes role-based access control for customers and administrators, with protected routes and middleware for security.',
        codeExample: `// middleware.ts
export { default } from "next-auth/middleware"

export const config = { 
  matcher: ["/dashboard/:path*", "/admin/:path*"] 
}`
      },
      {
        title: 'Product Management System',
        content: 'Built a comprehensive product management system with CRUD operations, image uploads, inventory tracking, and category management. The admin dashboard allows for easy product catalog management with real-time updates.',
      },
      {
        title: 'Payment Integration',
        content: 'Integrated Stripe for secure payment processing with support for multiple payment methods, webhooks for order confirmation, and automatic invoice generation. The system handles both one-time payments and subscription billing.',
      }
    ],
    results: [
      'Successfully processed over $50,000 in transactions during beta testing',
      'Achieved 99.9% uptime with optimized database queries and caching',
      'Reduced page load times by 40% through Next.js optimization',
      'Implemented comprehensive security measures with zero security incidents'
    ],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform'
  },
  'task-management-app': {
    title: 'Task Management App',
    overview: 'A collaborative task management application designed for teams to organize, track, and complete projects efficiently. The app features real-time updates, team collaboration tools, and comprehensive project tracking capabilities.',
    challenge: 'Creating a real-time collaborative environment where multiple users can simultaneously work on tasks without conflicts, while maintaining data consistency and providing a smooth user experience across different devices and network conditions.',
    solution: 'Leveraged Socket.io for real-time communication, implemented optimistic UI updates for immediate feedback, and used MongoDB for flexible data modeling. The application features a responsive design that works seamlessly across desktop and mobile devices.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT', 'Material-UI'],
    sections: [
      {
        title: 'Real-time Collaboration',
        content: 'Implemented Socket.io for instant updates when team members create, update, or complete tasks. Users can see who is currently online and working on specific tasks, with live cursors and activity indicators.',
      },
      {
        title: 'Task Organization & Filtering',
        content: 'Built an intuitive task organization system with drag-and-drop functionality, multiple view modes (board, list, calendar), and advanced filtering options by priority, assignee, due date, and custom tags.',
      },
      {
        title: 'Team Management',
        content: 'Developed comprehensive team management features including user roles, permission levels, team invitations, and activity tracking. Team leads can assign tasks, set deadlines, and monitor progress across projects.',
      }
    ],
    results: [
      'Improved team productivity by 35% in pilot testing',
      'Successfully handles 100+ concurrent users with real-time updates',
      'Achieved 4.8/5 user satisfaction rating in feedback surveys',
      'Reduced project completion time by 25% through better organization'
    ]
  },
  'analytics-dashboard': {
    title: 'Data Analytics Dashboard',
    overview: 'An interactive data visualization dashboard that processes and displays complex datasets in real-time. Built for business intelligence and data-driven decision making, featuring customizable charts, automated reporting, and data export capabilities.',
    challenge: 'Processing large datasets efficiently while providing interactive visualizations that remain responsive and informative. The challenge included handling real-time data streams, creating intuitive visualizations, and ensuring the dashboard performs well with millions of data points.',
    solution: 'Implemented a robust backend using Python and FastAPI for data processing, utilized D3.js for custom interactive visualizations, and employed efficient data aggregation techniques. The frontend uses React with optimized rendering for smooth interactions.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    sections: [
      {
        title: 'Data Processing Pipeline',
        content: 'Built an efficient ETL pipeline using Python and FastAPI to process incoming data streams, perform calculations, and store aggregated results. Implemented caching with Redis to improve query performance and reduce database load.',
      },
      {
        title: 'Interactive Visualizations',
        content: 'Created custom interactive charts using D3.js including time series graphs, heat maps, scatter plots, and geographical visualizations. Each chart supports zooming, filtering, and drill-down capabilities for detailed analysis.',
      },
      {
        title: 'Real-time Updates',
        content: 'Implemented WebSocket connections for real-time data updates, allowing the dashboard to reflect changes instantly without requiring page refreshes. Data is efficiently streamed and processed to maintain smooth performance.',
      }
    ],
    results: [
      'Processes over 1 million data points per hour in real-time',
      'Reduced report generation time from hours to minutes',
      'Improved decision-making speed by 60% through instant insights',
      'Successfully deployed to production with 99.95% uptime'
    ]
  }
};

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  return {
    title: `${project.title} - Morten Lundum-Nørgaard`,
    description: project.overview.substring(0, 160) + '...',
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Case Study */}        <CaseStudy
          title={project.title}
          overview={project.overview}
          challenge={project.challenge}
          solution={project.solution}
          technologies={project.technologies}
          sections={project.sections}
          results={project.results}
          liveUrl={'liveUrl' in project ? project.liveUrl : undefined}
          githubUrl={'githubUrl' in project ? project.githubUrl : undefined}
        />

        {/* Navigation to Next/Previous Projects */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Previous Project</p>
              <Link
                href="/projects"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View All Projects
              </Link>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Next Project</p>
              <Link
                href="/projects"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
