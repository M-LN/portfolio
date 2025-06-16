# Wind Turbine Capability Analysis Dashboard

## Overview

This Python script provides comprehensive analysis and visualization of wind turbine operational capabilities, focusing on torque and speed relationships. The system generates detailed capability envelopes, statistical distributions, and performance heatmaps to understand turbine operational limits and characteristics.

## Features

- **Capability Envelope Generation**: Creates maximum operational envelopes from turbine data
- **Multi-Dashboard Visualization**: Provides filtered and comprehensive data views
- **Statistical Analysis**: Generates distribution plots with key statistics
- **Heatmap Analysis**: Shows operational density patterns
- **Interactive Filtering**: Allows data filtering based on operational conditions

## File Structure

```
Capabillities GEN05/
├── [Your Python Script].py    # Main analysis script
├── README.md                   # This documentation
└── data/                       # Data files (if applicable)
```

## Dependencies

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.spatial import ConvexHull
from scipy.interpolate import interp1d
import seaborn as sns
```

### Installation

```bash
pip install pandas numpy matplotlib scipy seaborn
```

## Core Functions

### 1. `generate_comprehensive_envelope(df, speed_col, torque_col)`

**Purpose**: Generates the maximum capability envelope from turbine operational data.

**Parameters**:
- `df`: DataFrame containing turbine operational data
- `speed_col`: Column name for speed data
- `torque_col`: Column name for torque data

**Process**:
1. Groups data by speed bins
2. Finds maximum torque for each speed bin
3. Creates smooth envelope using interpolation
4. Applies convex hull for optimal boundary

**Returns**: List of (speed, torque) coordinate pairs defining the envelope

### 2. `create_simple_capability_dashboard_filtered_with_heatmaps(df)`

**Purpose**: Creates a comprehensive dashboard with filtered data analysis.

**Features**:
- **Capability Plot**: Shows filtered data points with maximum envelope
- **Speed vs Torque Heatmap**: Density visualization of operational points
- **Envelope Heatmap**: Focused view on envelope boundary
- **Torque Distribution**: Histogram with statistical markers
- **Speed Distribution**: Histogram with statistical markers

### 3. `create_simple_capability_dashboard_all_data_improved(df)`

**Purpose**: Creates dashboard using complete dataset without filtering.

**Features**:
- Complete operational data visualization
- Maximum capability envelope
- Statistical distribution analysis
- Enhanced formatting and labeling

## Data Requirements

### Input Data Format

Your DataFrame should contain at minimum:
- **Speed Column**: Turbine rotational speed (typically RPM)
- **Torque Column**: Turbine torque (typically kNm)

### Optional Columns for Filtering
- Temperature data
- Wind speed
- Power output
- Operational status flags

## Capability Envelope Algorithm

### Mathematical Approach

1. **Binning Strategy**:
   ```python
   # Create speed bins for envelope calculation
   speed_bins = np.linspace(df[speed_col].min(), df[speed_col].max(), num_bins)
   ```

2. **Maximum Finding**:
   ```python
   # Find maximum torque for each speed bin
   max_torque_per_bin = df.groupby(pd.cut(df[speed_col], bins=speed_bins))[torque_col].max()
   ```

3. **Smoothing & Interpolation**:
   ```python
   # Create smooth envelope curve
   interp_func = interp1d(speeds, torques, kind='cubic', bounds_error=False)
   ```

4. **Convex Hull Application**:
   ```python
   # Apply convex hull for optimal boundary
   hull = ConvexHull(points)
   envelope_points = points[hull.vertices]
   ```

## Visualization Components

### 1. Capability Plots
- **Data Points**: Scatter plot of operational data
- **Envelope Line**: Maximum capability boundary
- **Color Coding**: Different colors for filtered vs. all data
- **Transparency**: Alpha blending for point density visualization

### 2. Distribution Histograms
- **Frequency Calculation**: Raw count of data points per bin
- **Statistical Markers**:
  - Mean (black dashed line)
  - Maximum (red dashed line)
  - Standard deviation indicators

### 3. Heatmaps
- **Density Visualization**: Shows operational concentration
- **Color Mapping**: Intensity represents frequency of operation
- **Envelope Overlay**: Maximum capability boundary on heatmap

## Frequency Calculation

### Histogram Frequency
```python
# Matplotlib automatically calculates frequency as:
counts, bin_edges, patches = plt.hist(data, bins=50)

# Where:
# counts = number of data points in each bin
# bin_edges = boundaries of each bin
# bin_width = (max_value - min_value) / number_of_bins
```

### Frequency Types Available
- **Raw Counts** (default): Actual number of data points
- **Density**: Normalized so total area = 1
- **Percentage**: Counts converted to percentages

## Customization Options

### Line Appearance
```python
# Envelope line customization
plt.plot(speeds, torques, 
         color='red',        # Line color
         linewidth=4,        # Line thickness
         alpha=0.9,          # Transparency (0-1)
         linestyle='-',      # Line style
         label='Envelope')   # Legend label
```

### Color Schemes
- **Named Colors**: 'red', 'blue', 'green', 'orange'
- **Hex Colors**: '#FF5733', '#33FF57', '#3357FF'
- **Transparency**: alpha=0.1 (very transparent) to alpha=1.0 (solid)

### Plot Styling
```python
# Grid and formatting
plt.grid(True, alpha=0.3)
plt.xlabel('Speed [RPM]')
plt.ylabel('Torque [kNm]')
plt.title('Wind Turbine Capability Analysis')
```

## Usage Examples

### Basic Usage
```python
# Load your data
df = pd.read_csv('turbine_data.csv')

# Generate filtered dashboard
create_simple_capability_dashboard_filtered_with_heatmaps(df)

# Generate complete data dashboard
create_simple_capability_dashboard_all_data_improved(df)

# Show plots
plt.show()
```

### Custom Envelope Generation
```python
# Generate envelope points
envelope_points = generate_comprehensive_envelope(df, 'speed', 'torque')

# Extract coordinates
speeds, torques = zip(*envelope_points)

# Custom plotting
plt.figure(figsize=(12, 8))
plt.scatter(df['speed'], df['torque'], alpha=0.4, s=20)
plt.plot(speeds, torques, 'r-', linewidth=3, label='Max Envelope')
plt.legend()
plt.show()
```

## Performance Considerations

- **Data Size**: Optimized for datasets up to several million points
- **Memory Usage**: Uses efficient pandas operations and numpy arrays
- **Plotting Speed**: Matplotlib rendering optimized with alpha blending
- **Interpolation**: Scipy interpolation for smooth envelope curves

## Troubleshooting

### Common Issues

1. **Empty Envelope**: 
   - Check data quality and range
   - Verify column names match function parameters

2. **Memory Errors**:
   - Reduce data size or use data sampling
   - Increase system memory allocation

3. **Plotting Performance**:
   - Reduce alpha transparency
   - Decrease number of data points shown
   - Use smaller figure sizes

### Debug Tips
```python
# Check data quality
print(f"Data shape: {df.shape}")
print(f"Speed range: {df['speed'].min():.2f} - {df['speed'].max():.2f}")
print(f"Torque range: {df['torque'].min():.2f} - {df['torque'].max():.2f}")
print(f"Null values: {df.isnull().sum()}")
```

## Applications

- **Turbine Design Validation**: Verify operational limits
- **Performance Monitoring**: Track capability degradation
- **Maintenance Planning**: Identify operational boundaries
- **Control System Tuning**: Optimize operational parameters
- **Reliability Analysis**: Understand failure modes and limits

## Future Enhancements

- **Real-time Data Integration**: Live capability monitoring
- **Multi-Turbine Comparison**: Comparative analysis dashboards
- **Environmental Correlation**: Weather condition impact analysis
- **Predictive Modeling**: Capability forecasting algorithms

---

**Note**: This documentation covers the wind turbine capability analysis system. Ensure your data follows the expected format and contains