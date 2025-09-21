import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert, Spinner, Form, Badge } from 'react-bootstrap';
import WeatherService from '../services/WeatherService';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [unit, setUnit] = useState('celsius'); // celsius or fahrenheit
  const [hasSearched, setHasSearched] = useState(false);

  // Load weather data on component mount
  useEffect(() => {
    if (currentLocation) {
      loadWeatherData(currentLocation);
    }
  }, [currentLocation]);

  const loadWeatherData = async (location) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      // Get current weather
      const currentWeatherResult = await WeatherService.getCurrentWeather(location);
      if (currentWeatherResult.success) {
        const formattedData = WeatherService.formatWeatherData(currentWeatherResult.data);
        setWeatherData(formattedData);
      } else {
        setError(currentWeatherResult.error);
      }

      // Get 7-day forecast
      const forecastResult = await WeatherService.getWeatherForecast(location, 7);
      if (forecastResult.success) {
        setForecastData(forecastResult.data);
      }
    } catch (err) {
      console.error('Error loading weather data:', err);
      setError('Failed to load weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchLocation.trim()) {
      setCurrentLocation(searchLocation.trim());
      setSearchLocation('');
    }
  };

const handleCurrentLocation = async () => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const result = await WeatherService.getCurrentLocationWeather();
      if (result.success) {
        const formattedData = WeatherService.formatWeatherData(result.data);
        setWeatherData(formattedData);
        // Set the actual location name from the API response instead of hardcoded string
        setCurrentLocation(`${formattedData.location.name}, ${formattedData.location.region}`);
        
        // Also get the forecast for the current location
        const forecastResult = await WeatherService.getWeatherForecast(
          `${formattedData.location.name}, ${formattedData.location.region}`, 
          7
        );
        if (forecastResult.success) {
          setForecastData(forecastResult.data);
        }
      } else {
        setError(result.error);
      }
    } catch (err) {
      console.error('Error getting current location weather:', err);
      setError('Failed to get current location weather. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };
  const getTemperature = (temp) => {
    return unit === 'celsius' ? `${temp.celsius}°C` : `${temp.fahrenheit}°F`;
  };

  const getWeatherSeverityClass = (conditionCode) => {
    const severity = WeatherService.getWeatherSeverity(conditionCode);
    switch (severity) {
      case 'severe': return 'danger';
      case 'dangerous': return 'warning';
      case 'moderate': return 'info';
      default: return 'primary';
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString([], {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="home-page" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <Container>
        {/* Header Section */}
        <Row className="mb-4">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <i className="fas fa-cloud-sun me-3"></i>Weather Forecast
            </h1>
            <p className="lead text-muted">
              Get real-time weather information for any location worldwide
            </p>
          </Col>
        </Row>

        {/* Search Section */}
        <Row className="mb-4">
          <Col lg={8} className="mx-auto">
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <Form onSubmit={handleSearch}>
                  <Row className="align-items-end g-3 g-md-2">
                    <Col md={6}>
                      <Form.Group className="mb-3 mb-md-0">
                        <Form.Label className="fw-semibold">
                          <i className="fas fa-search me-2 text-primary"></i>Search Location
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter city name..."
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                          className="border-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3} className="d-grid">
                      <Button
                        type="submit"
                        className="bg-primary border-0"
                        disabled={loading}
                      >
                        <i className="fas fa-search me-2"></i>Search
                      </Button>
                    </Col>
                    <Col md={3} className="d-grid">
                      <Button
                        variant="outline-primary"
                        onClick={handleCurrentLocation}
                        disabled={loading}
                        className="mt-1 mt-md-0"
                      >
                        <i className="fas fa-location-arrow me-2"></i>Current Location
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Temperature Unit Toggle */}
        <Row className="mb-4">
          <Col className="text-center">
            <div className="btn-group" role="group">
              <Button 
                variant={unit === 'celsius' ? 'primary' : 'outline-primary'}
                onClick={() => setUnit('celsius')}
              >
                Celsius (°C)
              </Button>
              <Button 
                variant={unit === 'fahrenheit' ? 'primary' : 'outline-primary'}
                onClick={() => setUnit('fahrenheit')}
              >
                Fahrenheit (°F)
              </Button>
            </div>
          </Col>
        </Row>

        {/* Loading State */}
        {loading && (
          <Row className="mb-4">
            <Col className="text-center">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2 text-muted">Loading weather data...</p>
            </Col>
          </Row>
        )}

        {/* Error State */}
        {error && (
          <Row className="mb-4">
            <Col lg={8} className="mx-auto">
              <Alert variant="danger">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {error}
              </Alert>
            </Col>
          </Row>
        )}

        {/* Current Weather */}
        {weatherData && !loading && (
          <>
            {/* Main Weather Card */}
            <Row className="mb-4">
              <Col lg={8} className="mx-auto">
                <Card className="shadow-lg border-0">
                  <Card.Header className="bg-primary text-white">
                    <Row className="align-items-center">
                      <Col>
                        <h3 className="mb-0">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          {weatherData.location.name}, {weatherData.location.region}
                        </h3>
                        <small>{weatherData.location.country}</small>
                      </Col>
                      <Col xs="auto">
                        <Badge 
                          bg={getWeatherSeverityClass(weatherData.current.condition.code)}
                          className="fs-6"
                        >
                          {weatherData.current.condition.text}
                        </Badge>
                      </Col>
                    </Row>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      <Col md={6} className="text-center">
                        <img 
                          src={WeatherService.getWeatherIconUrl(weatherData.current.condition.icon)} 
                          alt={weatherData.current.condition.text}
                          className="weather-icon mb-3"
                          style={{ width: '120px', height: '120px' }}
                        />
                        <h1 className="display-2 fw-bold text-primary mb-0">
                          {getTemperature(weatherData.current.temperature)}
                        </h1>
                        <p className="text-muted lead">
                          Feels like {getTemperature(weatherData.current.feelsLike)}
                        </p>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col xs={6} className="mb-3">
                            <div className="weather-detail">
                              <i className="fas fa-wind text-primary me-2"></i>
                              <strong>Wind</strong><br/>
                              <span className="text-muted">
                                {weatherData.current.wind.speed} km/h {weatherData.current.wind.direction}
                              </span>
                            </div>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <div className="weather-detail">
                              <i className="fas fa-tint text-primary me-2"></i>
                              <strong>Humidity</strong><br/>
                              <span className="text-muted">{weatherData.current.humidity}%</span>
                            </div>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <div className="weather-detail">
                              <i className="fas fa-thermometer-half text-primary me-2"></i>
                              <strong>Pressure</strong><br/>
                              <span className="text-muted">{weatherData.current.pressure} mb</span>
                            </div>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <div className="weather-detail">
                              <i className="fas fa-eye text-primary me-2"></i>
                              <strong>Visibility</strong><br/>
                              <span className="text-muted">{weatherData.current.visibility} km</span>
                            </div>
                          </Col>
                          <Col xs={6}>
                            <div className="weather-detail">
                              <i className="fas fa-sun text-primary me-2"></i>
                              <strong>UV Index</strong><br/>
                              <span className="text-muted">{weatherData.current.uvIndex}</span>
                            </div>
                          </Col>
                          <Col xs={6}>
                            <div className="weather-detail">
                              <i className="fas fa-cloud text-primary me-2"></i>
                              <strong>Cloud Cover</strong><br/>
                              <span className="text-muted">{weatherData.current.cloudCover}%</span>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col className="text-center">
                        <small className="text-muted">
                          Last updated: {formatTime(weatherData.current.lastUpdated)} | 
                          Local time: {formatTime(weatherData.location.localtime)}
                        </small>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Air Quality */}
            {weatherData.airQuality && (
              <Row className="mb-4">
                <Col lg={10} className="mx-auto">
                  <Card className="shadow border-0 airq-card">
                    <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-lungs fa-lg"></i>
                        <h4 className="mb-0">Air Quality</h4>
                      </div>
                      <small className="fw-semibold aqi-badge" aria-label="EPA Index">EPA Index: {weatherData.airQuality.usEpaIndex}</small>
                    </Card.Header>
                    <Card.Body>
                      {(() => {
                        const aq = weatherData.airQuality;
                        const epa = aq.usEpaIndex; // 1-6 scale
                        const epaMap = {
                          1: { label: 'Good', color: '#16a34a' },
                          2: { label: 'Moderate', color: '#65a30d' },
                          3: { label: 'Unhealthy (Sensitive)', color: '#ca8a04' },
                          4: { label: 'Unhealthy', color: '#dc2626' },
                          5: { label: 'Very Unhealthy', color: '#9333ea' },
                          6: { label: 'Hazardous', color: '#6d28d9' }
                        };
                        const cat = epaMap[epa] || { label: 'Unknown', color: '#64748b' };
                        const pollutants = [
                          { key: 'pm2_5', name: 'PM2.5', value: aq.pm2_5, max: 250 },
                          { key: 'pm10', name: 'PM10', value: aq.pm10, max: 300 },
                          { key: 'o3', name: 'Ozone (O3)', value: aq.o3, max: 300 },
                          { key: 'no2', name: 'NO₂', value: aq.no2, max: 200 },
                          { key: 'so2', name: 'SO₂', value: aq.so2, max: 200 },
                          { key: 'co', name: 'CO', value: aq.co, max: 1000 }
                        ];
                        return (
                          <div className="airq-wrapper">
                            <div className="airq-summary mb-4">
                              <div className="airq-category" style={{ background: cat.color }} aria-label={`Overall category: ${cat.label}`}>
                                {cat.label}
                              </div>
                              <div className="airq-scale">
                                {[1,2,3,4,5,6].map(n => (
                                  <div key={n} className={`airq-scale-step ${n === epa ? 'active' : ''}`} aria-label={`EPA level ${n}`}></div>
                                ))}
                              </div>
                            </div>
                            <div className="row g-3">
                              {pollutants.map(p => {
                                const pct = Math.min(100, Math.round((p.value / p.max) * 100));
                                return (
                                  <div key={p.key} className="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <div className="pollutant-tile h-100">
                                      <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="pollutant-name" title={p.name}>{p.name}</span>
                                        <span className="pollutant-value">{p.value.toFixed ? p.value.toFixed(1) : p.value}<small className="unit ms-1">μg/m³</small></span>
                                      </div>
                                      <div className="progress airq-progress" role="progressbar" aria-valuemin={0} aria-valuemax={p.max} aria-valuenow={p.value} aria-label={`${p.name} concentration`}> 
                                        <div className="progress-bar" style={{ width: pct + '%', background: cat.color }}></div>
                                      </div>
                                      <div className="scale small text-muted">{pct}% of reference max</div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        );
                      })()}
                    </Card.Body>
                    <Card.Footer className="bg-light small text-muted d-flex flex-wrap gap-3 justify-content-between">
                      <span>Based on US EPA Air Quality Index</span>
                      {weatherData.airQuality.gbDefraIndex && (
                        <span>DEFRA: {weatherData.airQuality.gbDefraIndex}</span>
                      )}
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            )}
          </>
        )}

        {/* 7-Day Forecast */}
        {forecastData && !loading && (
          <Row className="mb-4">
            <Col lg={10} className="mx-auto">
              <Card className="shadow-lg border-0">
                <Card.Header className="bg-primary text-white">
                  <h3 className="mb-0">
                    <i className="fas fa-calendar-week me-2"></i>7-Day Forecast
                  </h3>
                </Card.Header>
                <Card.Body className="p-0">
                  <div className="forecast-container">
                    {forecastData.forecast.forecastday.map((day, index) => (
                      <div key={index} className="forecast-row-item">
                        <div className="forecast-grid">
                          <div className="fg-date">
                            <span className="fg-label">{index === 0 ? 'Today' : formatDate(day.date)}</span>
                            <span className="fg-sub d-none d-sm-inline">{day.date}</span>
                          </div>
                          <div className="fg-icon">
                            <img
                              src={WeatherService.getWeatherIconUrl(day.day.condition.icon)}
                              alt={day.day.condition.text}
                              loading="lazy"
                            />
                          </div>
                          <div className="fg-condition">
                            <span className="fg-text" title={day.day.condition.text}>{day.day.condition.text}</span>
                            <span className="fg-rain"><i className="fas fa-tint"></i> {day.day.daily_chance_of_rain}%</span>
                          </div>
                          <div className="fg-temps" aria-label="Temperature high and low">
                            <span className="fg-max">{unit === 'celsius' ? `${day.day.maxtemp_c}°` : `${day.day.maxtemp_f}°`}</span>
                            <span className="fg-min">{unit === 'celsius' ? `${day.day.mintemp_c}°` : `${day.day.mintemp_f}°`}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {/* Indian Cities - Show only when no search has been performed */}
        {!hasSearched && (
          <Row>
            <Col className="text-center">
              <Card className="shadow border-0">
                <Card.Body className="p-4">
                  <h4 className="text-primary mb-3">
                    <i className="fas fa-map-marked-alt me-2"></i>Popular Indian Cities
                  </h4>
                  <p className="text-muted mb-4">
                    Click on any city to get current weather information
                  </p>
                  <div className="d-grid gap-3">
                    <Row>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Mumbai')}
                        >
                          <i className="fas fa-city me-2"></i>Mumbai
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Delhi')}
                        >
                          <i className="fas fa-landmark me-2"></i>Delhi
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Bangalore')}
                        >
                          <i className="fas fa-tree me-2"></i>Bangalore
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Chennai')}
                        >
                          <i className="fas fa-water me-2"></i>Chennai
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Kolkata')}
                        >
                          <i className="fas fa-bridge me-2"></i>Kolkata
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Hyderabad')}
                        >
                          <i className="fas fa-mosque me-2"></i>Hyderabad
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Pune')}
                        >
                          <i className="fas fa-graduation-cap me-2"></i>Pune
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Ahmedabad')}
                        >
                          <i className="fas fa-industry me-2"></i>Ahmedabad
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Jaipur')}
                        >
                          <i className="fas fa-crown me-2"></i>Jaipur
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Lucknow')}
                        >
                          <i className="fas fa-mosque me-2"></i>Lucknow
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Kanpur')}
                        >
                          <i className="fas fa-cog me-2"></i>Kanpur
                        </Button>
                      </Col>
                      <Col md={3} className="mb-3">
                        <Button 
                          variant="outline-primary"
                          className="w-100"
                          onClick={() => setCurrentLocation('Surat')}
                        >
                          <i className="fas fa-gem me-2"></i>Surat
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
