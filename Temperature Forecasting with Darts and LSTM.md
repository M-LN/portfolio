# Temperature Forecasting with Darts - Grid Search Notebook Documentation

## Overview

This Jupyter notebook implements a comprehensive temperature forecasting system using the Darts library. It features advanced time series forecasting techniques including LSTM, TCN, and various regression models, with hyperparameter optimization through grid search and hybrid model approaches.

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Notebook Structure](#notebook-structure)
- [Core Components](#core-components)
- [Model Types](#model-types)
- [Hyperparameter Tuning](#hyperparameter-tuning)
- [Hybrid Approaches](#hybrid-approaches)
- [Usage Examples](#usage-examples)
- [Output and Results](#output-and-results)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

## Features

### 🤖 **Advanced Forecasting Models**
- **LSTM (Long Short-Term Memory)**: Deep learning for sequential data
- **GRU (Gated Recurrent Unit)**: Simplified LSTM variant
- **TCN (Temporal Convolutional Network)**: CNN-based time series modeling
- **Linear Regression**: Statistical baseline model
- **Random Forest**: Ensemble tree-based method
- **XGBoost**: Gradient boosting framework
- **LightGBM**: Fast gradient boosting
- **Prophet**: Facebook's time series forecasting

### 📊 **Comprehensive Analysis**
- Grid search hyperparameter optimization
- Time series cross-validation
- Steady state detection
- Forecast error analysis
- Model comparison framework
- Hybrid ensemble methods

### 🔧 **Advanced Features**
- Automatic feature engineering
- Covariate integration (hour of day, day of week)
- Multi-step forecasting
- Real-time model evaluation
- Enhanced visualization

## Dependencies

### Core Libraries
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import torch
import darts
from sklearn.model_selection import ParameterGrid
```

### Darts Components
```python
from darts import TimeSeries
from darts.models import (
    RNNModel, TCNModel, LinearRegressionModel, 
    RandomForest, XGBModel, LightGBMModel, Prophet
)
from darts.metrics import rmse, mape
from darts.dataprocessing.transformers import Scaler
from darts.utils.timeseries_generation import datetime_attribute_timeseries
```

### System Requirements
- Python 3.7+
- PyTorch (with CUDA support for GPU acceleration)
- Darts library for time series forecasting
- Standard data science libraries (pandas, numpy, matplotlib, seaborn)

## Notebook Structure

### Cell 1: Environment Setup and Imports
- Library imports and dependency checking
- CUDA availability detection
- Automatic package installation if needed
- Global parameter configuration

### Cell 2: Hyperparameter Tuning Functions
- Grid search implementation
- Time series cross-validation
- Covariate extension utilities
- Best parameter selection

### Cell 3: Visualization and Evaluation
- Prediction visualization functions
- Steady state calculation
- Model evaluation metrics
- Error analysis utilities

### Cell 4: Forecast Error Analysis
- Point-by-point error calculation
- Comparison with actual future data
- Visualization of forecast accuracy
- Bias and variance analysis

### Cell 5: Enhanced Comparison Framework
- Full dataset comparison
- Rate of change analysis
- Enhanced visualization
- Comprehensive model evaluation

### Cell 6-7: Execution Examples
- Practical implementation examples
- Custom parameter configuration
- Full workflow demonstrations

### Cell 8-9: Regression Model Training
- Implementation of regression-based models
- Linear, Random Forest, XGBoost support
- Feature engineering for regression models

### Cell 10-11: Model Comparison
- Multi-model comparison framework
- Performance metrics calculation
- Visual comparison plots
- Best model selection

### Cell 12-15: Hybrid Model Approaches
- Ensemble hybrid models
- Sequential hybrid models
- Adaptive hybrid models
- Comprehensive hybrid comparison

### Cell 16-17: Working Examples
- Complete execution examples
- Grid search demonstrations
- Real dataset applications

## Core Components

### Global Configuration System
```python
lstm_params = {
    "model_type": "LSTM",
    "input_chunk_length": 24,
    "output_chunk_length": 1,
    "hidden_dim": 32,
    "n_rnn_layers": 3,
    "batch_size": 16,
    "n_epochs": 50,
    "learning_rate": 1e-3,
    "dropout": 0.1,
    "forecast_horizon": 24,
    "training_percentage": 0.8
}
```

### Data Loading Pipeline
1. **File Detection**: Automatic CSV file discovery
2. **Timestamp Processing**: Timezone-aware datetime parsing
3. **Data Validation**: NaN handling and quality checks
4. **TimeSeries Conversion**: Darts-compatible format conversion

### Feature Engineering
- **Time-based Covariates**: Hour of day, day of week
- **Lag Features**: Historical value incorporation
- **Moving Averages**: Trend smoothing
- **Volatility Measures**: Variance-based features

## Model Types

### Neural Network Models

#### LSTM (Long Short-Term Memory)
- **Purpose**: Sequential pattern learning with memory
- **Best For**: Long-term dependencies, complex patterns
- **Configuration**:
  ```python
  RNNModel(
      model="LSTM",
      input_chunk_length=24,
      hidden_dim=32,
      n_rnn_layers=3,
      dropout=0.1
  )
  ```

#### GRU (Gated Recurrent Unit)
- **Purpose**: Simplified LSTM with faster training
- **Best For**: Shorter sequences, faster computation
- **Advantages**: Fewer parameters, reduced overfitting risk

#### TCN (Temporal Convolutional Network)
- **Purpose**: CNN-based temporal modeling
- **Best For**: Parallel processing, long sequences
- **Features**: Dilated convolutions, residual connections

### Regression Models

#### Linear Regression
- **Purpose**: Statistical baseline, interpretability
- **Best For**: Linear relationships, simple patterns
- **Advantages**: Fast training, interpretable coefficients

#### Random Forest
- **Purpose**: Ensemble tree-based learning
- **Best For**: Non-linear relationships, feature importance
- **Advantages**: Robust to outliers, handles mixed data types

#### XGBoost
- **Purpose**: Gradient boosting optimization
- **Best For**: Structured data, competition-grade performance
- **Features**: Regularization, parallel processing

#### LightGBM
- **Purpose**: Fast gradient boosting
- **Best For**: Large datasets, memory efficiency
- **Advantages**: Faster training, lower memory usage

## Hyperparameter Tuning

### Grid Search Implementation
```python
param_grid = {
    "model_type": ["LSTM", "GRU"],
    "input_chunk_length": [12, 24, 48],
    "hidden_dim": [16, 32, 64],
    "n_rnn_layers": [2, 3, 4],
    "dropout": [0.1, 0.2, 0.3],
    "learning_rate": [1e-4, 1e-3, 1e-2],
    "batch_size": [16, 32, 64],
    "n_epochs": [20, 50, 100]
}
```

### Time Series Cross-Validation
- **Expanding Window**: Progressive training set expansion
- **Temporal Ordering**: Respects time-based data structure
- **Multiple Folds**: Robust performance estimation
- **Metric Selection**: RMSE, MAPE, or custom metrics

## Hybrid Approaches

### Ensemble Hybrid
- **Concept**: Weighted combination of multiple models
- **Implementation**: Dynamic weight calculation based on performance
- **Benefits**: Reduced variance, improved robustness
- **Formula**: `Prediction = Σ(weight_i × model_i_prediction)`

### Sequential Hybrid
- **Concept**: LSTM features fed into regression models
- **Implementation**: Two-stage training process
- **Benefits**: Combines deep learning with traditional ML
- **Process**: LSTM → Feature Extraction → XGBoost

### Adaptive Hybrid
- **Concept**: Dynamic model selection based on recent performance
- **Implementation**: Sliding window performance evaluation
- **Benefits**: Adapts to changing data patterns
- **Strategy**: Recent error-based model weighting

## Usage Examples

### Basic Forecasting
```python
# Load and prepare data
df = load_sensor_data("temperature_data.csv")
series_data = prepare_darts_timeseries(df)

# Train LSTM model
model_result = train_rnn_model(
    series_data[component_id]['series'],
    series_data[component_id]['covariates'],
    model_type="LSTM"
)

# Generate predictions
predictions = visualize_predictions(
    model_result,
    series_data[component_id],
    component_id,
    forecast_horizon=60
)
```

### Grid Search Optimization
```python
# Define parameter grid
param_grid = {
    "input_chunk_length": [12, 24, 48],
    "hidden_dim": [16, 32, 64],
    "n_rnn_layers": [2, 3],
    "dropout": [0.1, 0.2],
    "learning_rate": [1e-4, 1e-3]
}

# Run grid search
results = time_series_cv(
    series_data[component_id],
    param_grid,
    metric='rmse',
    n_folds=3
)

# Train final model with best parameters
best_model = train_model_with_best_params(
    series_data[component_id],
    results['best_params']
)
```

### Model Comparison
```python
# Compare multiple models
comparison_results = compare_forecasting_models(
    series_data,
    forecast_horizon=60,
    models_to_compare=["LSTM", "xgboost", "random_forest"]
)

# Access results
metrics_df = comparison_results['metrics_df']
best_model = metrics_df.loc[metrics_df['validation_rmse'].idxmin()]
```

### Hybrid Model Creation
```python
# Create ensemble hybrid
ensemble_result = create_ensemble_hybrid(
    series_data,
    forecast_horizon=60,
    models_to_combine=["LSTM", "xgboost", "random_forest"],
    weights=[0.5, 0.3, 0.2]
)

# Create sequential hybrid
sequential_result = create_sequential_hybrid(
    series_data,
    forecast_horizon=60
)
```

## Output and Results

### Prediction Files
- **CSV Format**: `{component_id}_predictions.csv`
- **Columns**: timestamp, actual_temperature, predicted_temperature, rate_of_change, steady_state_indicator
- **Location**: `results/` directory

### Visualization Files
- **Forecast Plots**: `{component_id}_forecast.png`
- **Comparison Plots**: `{component_id}_model_comparison.png`
- **Error Analysis**: `{component_id}_error_analysis.png`
- **Rate Analysis**: `{component_id}_rate_comparison.png`

### Performance Metrics
- **Validation RMSE**: Root Mean Squared Error on validation set
- **Validation MAPE**: Mean Absolute Percentage Error
- **Forecast RMSE**: Error on future predictions (if available)
- **Steady State Temperature**: Predicted equilibrium temperature
- **Time to Steady State**: Minutes to reach equilibrium

### Grid Search Results
- **JSON Format**: `grid_search_results_{timestamp}.json`
- **Contents**: All parameter combinations, scores, best parameters
- **Metrics**: Cross-validation scores, parameter rankings

## Configuration

### Model Parameters
```python
# LSTM Configuration
lstm_config = {
    "input_chunk_length": 24,      # Lookback window
    "hidden_dim": 32,              # Hidden layer size
    "n_rnn_layers": 3,             # Number of RNN layers
    "dropout": 0.1,                # Dropout rate
    "learning_rate": 1e-3,         # Learning rate
    "batch_size": 16,              # Batch size
    "n_epochs": 50                 # Training epochs
}

# Regression Configuration
regression_config = {
    "n_estimators": 100,           # Tree count (RF/XGB)
    "max_depth": 6,                # Tree depth
    "learning_rate": 0.1           # XGB learning rate
}
```

### Data Processing
```python
# Training split
training_percentage = 0.8

# Forecast horizon
forecast_horizon = 60  # minutes

# Steady state threshold
rate_threshold = 1.0   # °C/hour
```

### Hardware Configuration
```python
# GPU acceleration
accelerator = "cuda" if torch.cuda.is_available() else "cpu"

# Memory optimization
torch.backends.cudnn.benchmark = True
```

## Troubleshooting

### Common Issues

#### Memory Errors
**Problem**: Out of memory during training
**Solutions**:
- Reduce batch size: `batch_size = 8`
- Decrease hidden dimensions: `hidden_dim = 16`
- Use gradient checkpointing
- Process data in chunks

#### CUDA Errors
**Problem**: GPU compatibility issues
**Solutions**:
- Check PyTorch CUDA version compatibility
- Fallback to CPU: `accelerator = "cpu"`
- Update GPU drivers
- Reduce model complexity

#### Convergence Issues
**Problem**: Model not learning effectively
**Solutions**:
- Adjust learning rate: `learning_rate = 1e-4`
- Increase epochs: `n_epochs = 100`
- Check data quality and preprocessing
- Try different model architectures

#### Data Format Errors
**Problem**: TimeSeries conversion failures
**Solutions**:
- Verify timestamp format consistency
- Check for missing values
- Ensure proper timezone handling
- Validate data types

### Performance Optimization

#### Training Speed
- Use GPU acceleration when available
- Optimize batch size for hardware
- Implement early stopping
- Use mixed precision training

#### Memory Usage
- Monitor memory consumption
- Use data generators for large datasets
- Implement gradient accumulation
- Clear unused variables: `del variable`

#### Model Selection
- Start with simpler models for baseline
- Use grid search strategically
- Implement model ensembles carefully
- Monitor overfitting indicators

## Advanced Features

### Custom Metrics
```python
def custom_metric(y_true, y_pred):
    """Custom evaluation metric"""
    return np.mean(np.abs(y_true - y_pred))
```

### Feature Engineering
```python
def create_custom_features(series):
    """Create domain-specific features"""
    # Add seasonal components
    # Include external variables
    # Create interaction terms
    return enhanced_series
```

### Model Persistence
```python
# Save trained models
model.save("models/lstm_temperature_model")

# Load saved models
loaded_model = RNNModel.load("models/lstm_temperature_model")
```

## Version History

### Current Version Features
- Comprehensive model comparison framework
- Hybrid model implementations
- Advanced error analysis
- GPU acceleration support
- Automatic hyperparameter tuning

### Future Enhancements
- Real-time streaming predictions
- Automated model retraining
- Advanced ensemble methods
- Integration with external APIs
- Enhanced visualization capabilities

---

**Note**: This notebook is specifically designed for temperature forecasting applications with sensor data. The models and techniques can be adapted for other time series forecasting tasks with appropriate modifications to the preprocessing and feature engineering steps.