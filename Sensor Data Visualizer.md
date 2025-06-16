# Sensor Data Visualizer (Scatterplot.py)

## Overview

The Sensor Data Visualizer is a comprehensive Python application built with Tkinter for analyzing and comparing sensor data from multiple file formats including CSV, Excel, and TDMS files. The application provides advanced machine learning capabilities, signal comparison, and interactive data visualization specifically designed for sensor data analysis.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Format Support](#file-format-support)
- [Core Functionality](#core-functionality)
- [Machine Learning Capabilities](#machine-learning-capabilities)
- [TDMS Analysis](#tdms-analysis)
- [Signal Comparison](#signal-comparison)
- [GUI Components](#gui-components)
- [Technical Architecture](#technical-architecture)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)

## Features

### 📊 **Multi-Format Data Support**
- CSV files (.csv)
- Excel files (.xlsx, .xls)
- TDMS files (.tdms) with automatic date-based combination
- Automatic data type detection and conversion

### 🤖 **Machine Learning Analysis**
- Anomaly Detection
- Predictive Modeling
- Clustering Analysis
- Feature Engineering
- Time Series Forecasting
- Pattern Recognition

### 📈 **Advanced Visualization**
- Interactive scatter plots
- Time series analysis
- Multi-sensor comparison
- Real-time plotting with Plotly
- Customizable plot parameters

### 🔍 **Signal Analysis**
- Signal comparison over time
- Noise analysis and distribution
- Statistical signal characterization
- Cross-correlation analysis
- Frequency domain analysis

### 🗂️ **Data Management**
- Automatic dataset combination by date
- Individual dataset preservation
- Metadata tracking
- File source tracking

## Installation

### Prerequisites
```bash
pip install pandas numpy matplotlib plotly tkinter scipy scikit-learn nptdms
```

### Optional Dependencies
```bash
pip install openpyxl  # For Excel file support
pip install xlrd      # For legacy Excel files
```

### Running the Application
```bash
python Scatterplot.py
```

## Usage

### 1. **Loading Data**
1. Click "Upload Data" button
2. Select your sensor data files (CSV, Excel, or TDMS)
3. Monitor the progress window during file processing
4. Review the loaded datasets in the left panel

### 2. **Basic Visualization**
1. Select X and Y variables from dropdowns
2. Choose color coding variable
3. Apply filters if needed
4. Click "Generate Plot" to create visualization

### 3. **TDMS Analysis**
1. Upload TDMS files - files with same date are automatically combined
2. Review the dataset summary showing combined information
3. Use "Compare Signals Over Time" for advanced analysis

### 4. **Machine Learning Analysis**
1. Navigate to the ML Analysis section
2. Select desired analysis type:
   - **Anomaly Detection**: Identify unusual patterns
   - **Predictive Modeling**: Create prediction models
   - **Clustering**: Group similar data points
   - **Feature Engineering**: Automatic feature creation
   - **Time Series Forecasting**: Predict future values
   - **Pattern Recognition**: Identify recurring patterns

## File Format Support

### CSV Files
- Automatic delimiter detection
- Header detection
- Timestamp column recognition
- Numeric data conversion

### Excel Files
- Multiple worksheet support
- Mixed data type handling
- Date/time format recognition
- Formula evaluation

### TDMS Files
- Complete group and channel extraction
- Timestamp generation from filename patterns
- Automatic sensor naming
- Date-based file combination
- Metadata preservation

#### TDMS Filename Patterns Supported:
- `GEN05YYYYMMDD_HHMM.tdms`
- `YYYY-MM-DD_HHMM.tdms`
- `YYYYMMDD_HHMM.tdms`

## Core Functionality

### Data Processing Pipeline
1. **File Upload** → Progress tracking with detailed status
2. **Data Validation** → Automatic cleaning and type conversion
3. **Dataset Creation** → Organized storage with metadata
4. **Analysis Ready** → Prepared for visualization and ML

### Variable Management
- Automatic variable detection
- Type-based filtering
- Dynamic dropdown population
- Custom variable selection

### Filtering System
- Sensor-based filtering
- Time range selection
- Value-based filtering
- Custom filter expressions

## Machine Learning Capabilities

### Anomaly Detection
- Isolation Forest algorithm
- Statistical outlier detection
- Time series anomaly detection
- Real-time anomaly scoring

### Predictive Modeling
- Multiple algorithm support (Linear, Random Forest, SVM, Neural Networks)
- Automatic feature selection
- Cross-validation
- Model performance metrics

### Clustering Analysis
- K-means clustering
- Hierarchical clustering
- DBSCAN for density-based clustering
- Cluster visualization and interpretation

### Time Series Forecasting
- ARIMA models
- Seasonal decomposition
- Trend analysis
- Confidence intervals

## TDMS Analysis

### Automatic Date-Based Combination
Files with the same date are automatically combined into single datasets:

**Example:**
- 10 files from 2024-01-15 → `Test_20240115` dataset
- 10 files from 2024-01-16 → `Test_20240116` dataset

### Timeline Management
- Continuous timestamp generation
- Proper time spacing between files
- Gap handling between measurements
- Original file tracking

### Sensor Management
- Automatic sensor naming from TDMS structure
- Group and channel preservation
- Sensor metadata retention
- Multi-sensor synchronization

## Signal Comparison

### Cross-Dataset Analysis
- Compare signals between different test dates
- Identify signal degradation over time
- Equipment performance comparison
- Environmental condition impact analysis

### Statistical Comparison
- Signal statistics calculation
- Noise analysis
- Distribution comparison
- Correlation analysis

### Visualization
- Overlay plots for direct comparison
- Statistical summary displays
- Trend identification
- Change point detection

## GUI Components

### Main Interface
- **Left Panel**: Dataset management and controls
- **Right Panel**: Plot display area
- **Bottom Panel**: Status and progress information

### Control Sections
1. **File Upload**: Data loading with progress tracking
2. **Variable Selection**: X/Y axis and color variable selection
3. **Filtering**: Data filtering and subset selection
4. **ML Analysis**: Machine learning operation buttons
5. **Plot Controls**: Visualization customization

### Interactive Elements
- Checkboxes for dataset selection
- Dropdown menus for variable selection
- Progress bars for long operations
- Status messages for user feedback

## Technical Architecture

### Class Structure
```python
class SensorDataVisualizer:
    - Data management and storage
    - GUI creation and management
    - Plot generation and updating
    - ML analysis coordination
    - File I/O operations
```

### Key Data Structures
- `self.datasets`: Main dataset storage
- `self.tdms_datasets`: TDMS-specific dataset storage with metadata
- `self.combined_data`: Combined data for analysis
- `self.dataset_vars`: UI state management

### Threading and Performance
- Background processing for long operations
- Progress tracking for user feedback
- Memory-efficient data handling
- Optimized plotting for large datasets

## Dependencies

### Core Dependencies
```python
import pandas as pd           # Data manipulation
import numpy as np           # Numerical operations
import matplotlib.pyplot as plt  # Basic plotting
import plotly.graph_objects as go  # Interactive plotting
import tkinter as tk         # GUI framework
from tkinter import ttk      # Modern UI widgets
```

### Specialized Libraries
```python
import scipy.stats          # Statistical analysis
from sklearn import *       # Machine learning
import nptdms              # TDMS file support
import datetime            # Time handling
```

### Optional Libraries
```python
import openpyxl            # Excel file support
import xlrd                # Legacy Excel support
```

## Troubleshooting

### Common Issues

#### TDMS Files Not Loading
**Problem**: "nptdms package required" error
**Solution**: 
```bash
pip install nptdms
```

#### Large File Performance
**Problem**: Slow loading of large TDMS files
**Solution**: 
- Process files in smaller batches
- Use filtering to reduce data size
- Close other applications to free memory

#### Memory Issues
**Problem**: Out of memory errors with large datasets
**Solution**:
- Reduce the number of files loaded simultaneously
- Use data filtering before analysis
- Increase system RAM if possible

#### Plot Not Updating
**Problem**: Visualizations not refreshing
**Solution**:
- Check variable selection
- Verify data is loaded correctly
- Restart the application if needed

### Error Messages

#### "No valid data found"
- Check file format compatibility
- Verify file is not corrupted
- Ensure file contains numeric data

#### "Insufficient data for analysis"
- Load more data points
- Check filtering settings
- Verify data quality

### Performance Tips

1. **Large Datasets**: Use filtering to reduce data size before analysis
2. **Multiple Files**: Process files in batches rather than all at once
3. **TDMS Files**: Combine files by date for better performance
4. **Plotting**: Limit number of points displayed for better responsiveness

## Version History

### Current Version
- TDMS date-based combination
- Enhanced signal comparison
- Improved ML analysis
- Better error handling
- Optimized performance

### Future Enhancements
- Real-time data streaming
- Advanced signal processing
- Custom ML model training
- Export functionality
- Database connectivity

## Support

For issues and feature requests, please check:
1. Verify all dependencies are installed
2. Check file format compatibility
3. Review error messages for specific guidance
4. Monitor system resources during operation

---

**Note**: This application is designed for sensor data analysis with specific focus on TDMS file handling and multi-dataset comparison. The machine learning capabilities are optimized for time series and sensor data patterns.