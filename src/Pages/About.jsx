import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about-page" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <i className="fas fa-cloud-sun me-3"></i>About Weather.app
            </h1>
            <p className="lead text-muted mb-4">
              Your trusted companion for accurate weather forecasts and climate information worldwide.
            </p>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5 text-center">
                <h2 className="text-primary mb-4">
                  <i className="fas fa-bullseye me-3"></i>Our Mission
                </h2>
                <p className="lead text-muted">
                  To provide everyone with accessible, accurate, and real-time weather information 
                  that helps them make informed decisions about their daily activities and long-term planning.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-primary mb-5">
              <i className="fas fa-star me-3"></i>What We Offer
            </h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-thermometer-half fa-3x text-primary"></i>
                </div>
                <h4 className="text-primary">Real-time Weather</h4>
                <p className="text-muted">
                  Get up-to-the-minute weather conditions including temperature, 
                  humidity, wind speed, and atmospheric pressure.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-calendar-week fa-3x text-primary"></i>
                </div>
                <h4 className="text-primary">7-Day Forecasts</h4>
                <p className="text-muted">
                  Plan ahead with detailed weekly forecasts including precipitation 
                  chances, temperature ranges, and weather patterns.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-exclamation-triangle fa-3x text-primary"></i>
                </div>
                <h4 className="text-primary">Weather Alerts</h4>
                <p className="text-muted">
                  Stay safe with timely alerts for severe weather conditions, 
                  storms, and extreme temperature warnings.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-primary mb-5">
              <i className="fas fa-users me-3"></i>Our Team
            </h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x text-primary"></i>
                </div>
                <h5 className="text-primary">Dr. Sarah Johnson</h5>
                <p className="text-muted mb-2">Chief Meteorologist</p>
                <p className="small text-muted">
                  15+ years of experience in atmospheric sciences and weather prediction.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x text-primary"></i>
                </div>
                <h5 className="text-primary">Michael Chen</h5>
                <p className="text-muted mb-2">Lead Developer</p>
                <p className="small text-muted">
                  Full-stack developer specializing in real-time data systems and user experience.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow border-0">
              <Card.Body className="text-center p-4">
                <div className="team-avatar mb-3">
                  <i className="fas fa-user-circle fa-4x text-primary"></i>
                </div>
                <h5 className="text-primary">Emily Rodriguez</h5>
                <p className="text-muted mb-2">Data Analyst</p>
                <p className="small text-muted">
                  Expert in meteorological data analysis and weather pattern recognition.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Technology Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0 text-center">
                  <i className="fas fa-cogs me-3"></i>Our Technology
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <Row>
                  <Col md={6}>
                    <h5 className="text-primary">Data Sources</h5>
                    <ul className="text-muted">
                      <li>National Weather Service</li>
                      <li>Global meteorological stations</li>
                      <li>Satellite imagery</li>
                      <li>Radar networks</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h5 className="text-primary">Features</h5>
                    <ul className="text-muted">
                      <li>Real-time data processing</li>
                      <li>Machine learning predictions</li>
                      <li>Mobile-responsive design</li>
                      <li>Location-based services</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact CTA */}
        <Row>
          <Col className="text-center">
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <h3 className="text-primary mb-3">Ready to Get Started?</h3>
                <p className="lead text-muted mb-4">
                  Join millions of users who trust Weather.app for their daily weather needs.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button 
                    href="/contact" 
                    size="lg" 
                    className="bg-primary border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
                    }}
                  >
                    <i className="fas fa-envelope me-2"></i>Contact Us
                  </Button>
                  <Button 
                    href="/" 
                    variant="outline-primary" 
                    size="lg"
                  >
                    <i className="fas fa-cloud-sun me-2"></i>Check Weather
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
