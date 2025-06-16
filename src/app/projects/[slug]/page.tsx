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
  },
  'wind-turbine-capability-analysis': {
    title: 'Wind Turbine Capability Analysis Dashboard',
    image: '/images/projects/wind-turbine-analysis.svg',
    overview: 'A comprehensive Python-based analysis tool for wind turbine operational capabilities, focusing on torque and speed relationships. The system generates detailed capability envelopes, statistical distributions, and performance heatmaps to understand turbine operational limits and characteristics.',
    challenge: 'Wind turbine performance analysis required complex visualization of operational data to understand capability limits, identify optimal operational zones, and detect performance degradation patterns. Traditional analysis methods were insufficient for handling large datasets and generating actionable insights.',
    solution: 'Developed a sophisticated analysis dashboard using Python with advanced mathematical algorithms including convex hull generation, statistical distribution analysis, and interactive heatmap visualization. The system processes turbine operational data to create maximum capability envelopes and comprehensive performance insights.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SciPy', 'Seaborn', 'Convex Hull Analysis'],    sections: [      {        title: 'Capability Envelope Generation',
        content: 'Implemented advanced algorithms to generate maximum operational envelopes from turbine data using convex hull analysis and interpolation techniques. The comprehensive dashboard shows complete torque vs speed analysis with capability envelopes, statistical distributions, and density heatmaps for both all data and filtered sustained operations (≥20 min). The system groups data by speed bins, finds maximum torque values, and creates smooth capability boundaries for operational planning.',
        image: '/images/projects/capability-analysis-all-data.png',codeExample: `def generate_comprehensive_envelope(df, speed_col, torque_col):
    # Group data by speed bins and find maximum torque
    speed_bins = np.linspace(df[speed_col].min(), df[speed_col].max(), num_bins)
    max_torque_per_bin = df.groupby(pd.cut(df[speed_col], bins=speed_bins))[torque_col].max()
    
    # Apply convex hull for optimal boundary
    hull = ConvexHull(points)
    envelope_points = points[hull.vertices]
    return envelope_points`
      },
      {        title: 'Sustained Operation Analysis & Filtering',
        content: 'Developed sophisticated filtering capabilities to analyze sustained operations (≥20 minutes) separately from transient events. The filtered analysis reveals true operational capabilities by focusing on stable, sustained performance patterns. This approach provides more accurate capability assessments for maintenance planning and performance optimization by eliminating short-term spikes and transients.',
        image: '/images/projects/capability-analysis-filtered-data.png',
      },
      {
        title: 'Interactive Dashboard Visualization',
        content: 'Created multi-panel dashboards with filtered and comprehensive data views, featuring capability plots, statistical distributions, and operational density visualization. The interface allows dynamic filtering and real-time analysis updates.',
      }
    ],
    results: [
      'Identified optimal operational zones improving turbine efficiency by 15%',
      'Automated capability analysis reducing manual analysis time by 80%',
      'Generated actionable insights for maintenance planning and performance optimization',
      'Enhanced understanding of turbine operational limits and degradation patterns'
    ]
  },
  'sensor-data-visualizer': {
    title: 'Sensor Data Visualizer',
    image: '/images/projects/sensor-data-visualizer.svg',
    overview: 'A comprehensive Python application built with Tkinter for analyzing and comparing sensor data from multiple file formats including CSV, Excel, and TDMS files. The application provides advanced machine learning capabilities, signal comparison, and interactive data visualization specifically designed for sensor data analysis.',
    challenge: 'Engineers needed a unified tool to handle diverse sensor data formats while providing advanced analysis capabilities including anomaly detection, predictive modeling, and signal comparison. The tool needed to handle large TDMS files efficiently and provide machine learning insights without requiring programming knowledge.',
    solution: 'Developed a feature-rich GUI application using Tkinter with integrated machine learning capabilities, multi-format file support, and advanced visualization tools. The system automatically combines TDMS files by date, provides ML analysis options, and offers interactive plotting with real-time updates.',
    technologies: ['Python', 'Tkinter', 'Pandas', 'Plotly', 'Scikit-learn', 'TDMS', 'Machine Learning', 'NumPy'],
    sections: [
      {
        title: 'Multi-Format Data Processing',
        content: 'Implemented comprehensive file format support including CSV, Excel, and TDMS files with automatic data type detection and conversion. TDMS files are automatically combined by date with proper timestamp management and metadata preservation.',
        codeExample: `# TDMS file processing with date-based combination
def process_tdms_files(file_paths):
    datasets = {}
    for file_path in file_paths:
        date = extract_date_from_filename(file_path)
        if date not in datasets:
            datasets[date] = []
        datasets[date].append(load_tdms_data(file_path))
    return combine_datasets_by_date(datasets)`
      },
      {
        title: 'Machine Learning Analysis Suite',
        content: 'Built comprehensive ML capabilities including anomaly detection using Isolation Forest, predictive modeling with multiple algorithms, clustering analysis, and time series forecasting. The system provides one-click access to advanced analytics for non-technical users.',
      },
      {
        title: 'Interactive Signal Comparison',
        content: 'Created advanced signal comparison tools for cross-dataset analysis, enabling engineers to compare signals between different test dates, identify degradation patterns, and perform statistical correlation analysis with interactive visualization.',
      }
    ],
    results: [
      'Unified analysis workflow reducing data processing time by 60%',
      'Successfully processed and analyzed over 10,000 TDMS files',
      'Enabled non-technical users to perform advanced ML analysis',
      'Improved signal quality assessment and anomaly detection capabilities'
    ]
  },
  'temperature-forecasting-darts': {
    title: 'Temperature Forecasting with Darts & LSTM',
    image: '/images/projects/temperature-forecasting.svg',
    overview: 'An advanced time series forecasting system using the Darts library featuring comprehensive temperature prediction capabilities. The system implements LSTM, TCN, and various regression models with hyperparameter optimization through grid search and hybrid ensemble approaches.',
    challenge: 'Accurate temperature forecasting for industrial applications required sophisticated time series modeling with multiple algorithm comparison, hyperparameter optimization, and ensemble methods. The system needed to handle complex temporal patterns while providing reliable prediction confidence intervals.',
    solution: 'Developed a comprehensive forecasting framework using the Darts library with multiple model types including deep learning (LSTM, GRU, TCN) and traditional ML approaches (XGBoost, Prophet, Random Forest). Implemented automated grid search optimization and hybrid ensemble methods for improved accuracy.',
    technologies: ['Python', 'Darts', 'LSTM', 'PyTorch', 'XGBoost', 'Prophet', 'Time Series Analysis', 'Grid Search'],
    sections: [
      {
        title: 'Multi-Model Architecture',
        content: 'Implemented comprehensive model comparison framework supporting LSTM, GRU, TCN neural networks, and traditional ML models including XGBoost, Random Forest, and Prophet. Each model is optimized through automated hyperparameter tuning with time series cross-validation.',
        codeExample: `# Grid search implementation for LSTM optimization
param_grid = {
    "input_chunk_length": [12, 24, 48],
    "hidden_dim": [16, 32, 64],
    "n_rnn_layers": [2, 3, 4],
    "dropout": [0.1, 0.2, 0.3],
    "learning_rate": [1e-4, 1e-3, 1e-2]
}

results = time_series_cv(series_data, param_grid, metric='rmse', n_folds=3)`
      },
      {
        title: 'Hybrid Ensemble Methods',
        content: 'Developed advanced ensemble approaches including weighted combinations, sequential hybrid models (LSTM features → XGBoost), and adaptive hybrid systems that dynamically select models based on recent performance patterns.',
      },
      {
        title: 'Advanced Feature Engineering',
        content: 'Implemented comprehensive feature engineering including time-based covariates, lag features, moving averages, and volatility measures. The system automatically generates relevant features for improved forecasting accuracy.',
      }
    ],
    results: [
      'Achieved 85% accuracy in temperature prediction with 30-minute lead time',
      'Reduced forecasting error by 40% compared to traditional statistical methods',
      'Successfully implemented ensemble methods improving robustness by 25%',
      'Automated hyperparameter tuning reducing model development time by 70%'
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
