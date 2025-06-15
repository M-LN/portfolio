import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CaseStudy from '@/components/CaseStudy';

// Real project data showcasing actual work experience
const projectsData = {
  'adx-test-report-generator': {
    title: 'ADX Test Report Generator',
    image: '/images/projects/flask-report-generator.svg',
    overview: 'A Flask-based web application that automates the generation of comprehensive HTML reports from test data stored in Azure Data Explorer (ADX). This tool streamlines the reporting process for industrial testing scenarios by providing customizable templates, automated data retrieval, and interactive visualizations.',
    challenge: 'Manual report generation from ADX data was time-consuming and error-prone. Engineers needed a way to quickly generate standardized, professional reports with consistent formatting while maintaining flexibility for different test scenarios and data types.',
    solution: 'Developed a Flask web application with a clean interface that connects to ADX via KQL queries, processes data using Python libraries, and generates HTML reports using Jinja2 templates. The system supports multiple report types, custom styling, and automated scheduling.',
    technologies: ['Python', 'Flask', 'Azure Data Explorer', 'KQL', 'HTML/CSS', 'JavaScript', 'Jinja2', 'Pandas'],
    sections: [
      {
        title: 'ADX Integration & Data Retrieval',
        content: 'Implemented secure connection to Azure Data Explorer using authenticated APIs and optimized KQL queries for efficient data retrieval. The system handles complex queries across multiple tables and time ranges while maintaining performance.',
        codeExample: `# Example KQL query structure
def get_test_data(test_id, start_time, end_time):
    query = f"""
    TestData
    | where TestId == '{test_id}'
    | where Timestamp between (datetime({start_time}) .. datetime({end_time}))
    | summarize avg(Temperature), max(Pressure) by bin(Timestamp, 1m)
    | order by Timestamp asc
    """
    return execute_adx_query(query)`
      },
      {
        title: 'Report Template Engine',
        content: 'Built a flexible template system using Jinja2 that allows for dynamic report generation with customizable layouts, charts, and data tables. Templates support conditional rendering based on test types and data availability.',
      },
      {
        title: 'Interactive Visualizations',
        content: 'Integrated JavaScript charting libraries to create interactive visualizations within the HTML reports, including time-series plots, statistical summaries, and comparative analysis charts that enhance data interpretation.',
      }
    ],
    results: [
      'Reduced report generation time from 2-3 hours to 5-10 minutes',
      'Improved report consistency and eliminated manual formatting errors',
      'Generated over 500 automated reports for various test scenarios',
      'Increased engineer productivity and reduced overtime for report preparation'
    ]
  },  'lstm-steady-state-detection': {
    title: 'LSTM Steady State Detection',
    image: '/images/projects/lstm-model.svg',
    overview: 'A machine learning solution using LSTM neural networks to predict when generator testing will reach steady state conditions based on early temperature data patterns. This predictive model helps optimize testing procedures by reducing total test duration while maintaining accuracy.',
    challenge: 'Traditional generator testing requires waiting for full steady state conditions, which can take several hours. Engineers needed a way to predict steady state earlier in the testing process to improve efficiency without compromising test validity.',
    solution: 'Developed an LSTM-based time series prediction model trained on historical temperature data from generator tests. The model analyzes early temperature patterns and predicts steady state timing with high accuracy, enabling shorter test cycles.',
    technologies: ['Python', 'TensorFlow/Keras', 'LSTM', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Time Series Analysis'],
    sections: [
      {
        title: 'Data Preprocessing & Feature Engineering',
        content: 'Implemented comprehensive data preprocessing pipeline including noise filtering, normalization, and sliding window creation for time series input. Features were engineered to capture temperature gradients, rate of change, and statistical properties.',
        codeExample: `def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data) - seq_length):
        seq = data[i:(i + seq_length)]
        target = data[i + seq_length]
        X.append(seq)
        y.append(target)
    return np.array(X), np.array(y)`
      },
      {
        title: 'LSTM Model Architecture',
        content: 'Designed and implemented a multi-layer LSTM network with dropout regularization and batch normalization. The model architecture was optimized through hyperparameter tuning to balance prediction accuracy with computational efficiency.',
      },
      {
        title: 'Model Validation & Testing',
        content: 'Established rigorous validation procedures using time-series cross-validation and walk-forward testing to ensure model robustness. Performance metrics include RMSE, MAE, and custom steady-state prediction accuracy measures.',
      }
    ],
    results: [
      'Achieved 85% accuracy in predicting steady state within 30 minutes',
      'Reduced average test duration by 40-60% for applicable scenarios',
      'Model currently in validation phase with promising results',
      'Potential for significant cost savings in generator testing operations'
    ]
  },  'timeseries-analysis-gui': {
    title: 'Timeseries Data Analysis GUI',
    image: '/images/projects/timeseries-gui.svg',
    overview: 'A comprehensive desktop application built with Python Tkinter that provides engineers with advanced tools for analyzing timeseries data. The application features statistical analysis, visualization capabilities, data filtering, and export functionality tailored for engineering data analysis workflows.',
    challenge: 'Engineers needed a user-friendly desktop tool for complex timeseries analysis without requiring programming knowledge. The tool had to handle large datasets, provide statistical insights, and offer flexible visualization options while maintaining good performance.',
    solution: 'Developed a feature-rich GUI application using Tkinter with integrated pandas for data processing, matplotlib for plotting, and scipy for statistical analysis. The interface provides intuitive controls for data manipulation and analysis with real-time visualization updates.',
    technologies: ['Python', 'Tkinter', 'Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'Plotly', 'Statistical Analysis'],
    sections: [
      {
        title: 'Data Import & Management',
        content: 'Implemented flexible data import system supporting multiple file formats (CSV, Excel, JSON) with automatic data type detection and validation. Features include data preview, column mapping, and handling of missing values.',
      },
      {
        title: 'Statistical Analysis Tools',
        content: 'Built comprehensive statistical analysis capabilities including descriptive statistics, correlation analysis, trend detection, and anomaly identification. Results are presented in both tabular and graphical formats for easy interpretation.',
      },
      {
        title: 'Interactive Visualization',
        content: 'Created dynamic plotting capabilities with zoom, pan, and selection tools. Supports multiple chart types including line plots, scatter plots, histograms, and box plots with customizable styling and annotation features.',
      }
    ],
    results: [
      'Successfully handles datasets with millions of data points',
      'Reduced analysis time by 70% compared to manual Excel-based workflows',
      'Improved data insights quality through advanced statistical tools',
      'Widely adopted by engineering team for daily data analysis tasks'
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
