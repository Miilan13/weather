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
        setCurrentLocation('Current Location');
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
                  <Row className="align-items-end">
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
                    <Col md={3}>
                      <Button 
                        type="submit" 
                        className="w-100 bg-primary border-0"
                        disabled={loading}
                      >
                        <i className="fas fa-search me-2"></i>Search
                      </Button>
                    </Col>
                    <Col md={3}>
                      <Button 
                        variant="outline-primary" 
                        className="w-100"
                        onClick={handleCurrentLocation}
                        disabled={loading}
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
                <Col lg={8} className="mx-auto">
                  <Card className="shadow border-0">
                    <Card.Header className="bg-success text-white">
                      <h4 className="mb-0">
                        <i className="fas fa-lungs me-2"></i>Air Quality Index
                      </h4>
                    </Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={3} className="text-center mb-3">
                          <h5 className="text-primary">PM2.5</h5>
                          <h3 className="mb-0">{weatherData.airQuality.pm2_5}</h3>
                          <small className="text-muted">μg/m³</small>
                        </Col>
                        <Col md={3} className="text-center mb-3">
                          <h5 className="text-primary">PM10</h5>
                          <h3 className="mb-0">{weatherData.airQuality.pm10}</h3>
                          <small className="text-muted">μg/m³</small>
                        </Col>
                        <Col md={3} className="text-center mb-3">
                          <h5 className="text-primary">O3</h5>
                          <h3 className="mb-0">{weatherData.airQuality.o3}</h3>
                          <small className="text-muted">μg/m³</small>
                        </Col>
                        <Col md={3} className="text-center mb-3">
                          <h5 className="text-primary">NO2</h5>
                          <h3 className="mb-0">{weatherData.airQuality.no2}</h3>
                          <small className="text-muted">μg/m³</small>
                        </Col>
                      </Row>
                    </Card.Body>
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
                      <div key={index} className="forecast-day p-3 border-bottom">
                        <Row className="align-items-center">
                          <Col xs={3}>
                            <h6 className="mb-0 fw-bold">
                              {index === 0 ? 'Today' : formatDate(day.date)}
                            </h6>
                            <small className="text-muted">{day.date}</small>
                          </Col>
                          <Col xs={3} className="text-center">
                            <img 
                              src={WeatherService.getWeatherIconUrl(day.day.condition.icon)} 
                              alt={day.day.condition.text}
                              style={{ width: '48px', height: '48px' }}
                            />
                          </Col>
                          <Col xs={4}>
                            <div className="text-muted small">
                              {day.day.condition.text}
                            </div>
                            <div className="small">
                              <i className="fas fa-tint text-primary me-1"></i>
                              {day.day.daily_chance_of_rain}%
                            </div>
                          </Col>
                          <Col xs={2} className="text-end">
                            <div className="fw-bold text-primary">
                              {unit === 'celsius' ? `${day.day.maxtemp_c}°` : `${day.day.maxtemp_f}°`}
                            </div>
                            <div className="text-muted">
                              {unit === 'celsius' ? `${day.day.mintemp_c}°` : `${day.day.mintemp_f}°`}
                            </div>
                          </Col>
                        </Row>
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
