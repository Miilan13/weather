import React, { useState } from 'react';
import SEO from '../Components/SEO';
import { Container, Row, Col, Card, Accordion, Form, Button } from 'react-bootstrap';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: '0',
      category: 'General',
      question: 'How accurate is your weather data?',
      answer: 'Our weather data is sourced from multiple reliable meteorological services including the National Weather Service, global weather stations, and satellite imagery. We update our data every 15 minutes to ensure maximum accuracy. Our forecasts typically have an accuracy rate of 85-90% for the next 24 hours and 70-80% for 7-day forecasts.'
    },
    {
      id: '1',
      category: 'General',
      question: 'How often is the weather data updated?',
      answer: 'Weather data is automatically updated every 15 minutes for current conditions and hourly for forecasts. During severe weather events, updates may occur more frequently to provide the most current information.'
    },
    {
      id: '2',
      category: 'Features',
      question: 'Do you provide weather alerts and notifications?',
      answer: 'Yes! We provide real-time weather alerts for severe weather conditions including thunderstorms, tornadoes, hurricanes, extreme temperatures, and other dangerous weather phenomena. You can customize which alerts you receive in your settings.'
    },
    {
      id: '3',
      category: 'Features',
      question: 'Can I get weather information for multiple locations?',
      answer: 'Absolutely! You can search for and save multiple locations to easily switch between them. You can also set a primary location that will be displayed by default when you visit the site.'
    },
    {
      id: '4',
      category: 'Technical',
      question: 'Is there a mobile app available?',
      answer: 'Currently, we offer a fully responsive web application that works excellently on mobile devices. We are actively developing dedicated iOS and Android apps which will be available soon with additional features like push notifications and offline access.'
    },
    {
      id: '5',
      category: 'Technical',
      question: 'Do you have an API for developers?',
      answer: 'Yes, we offer a comprehensive weather API for developers. Our API provides access to current weather data, forecasts, historical data, and weather maps. Contact us for API documentation and pricing information.'
    },
    {
      id: '6',
      category: 'Data',
      question: 'What weather parameters do you provide?',
      answer: 'We provide comprehensive weather information including temperature, humidity, wind speed and direction, atmospheric pressure, visibility, UV index, precipitation amounts, cloud cover, and weather conditions. Extended forecasts include daily high/low temperatures and precipitation probability.'
    },
    {
      id: '7',
      category: 'Data',
      question: 'How far ahead can you forecast the weather?',
      answer: 'We provide detailed hourly forecasts for the next 48 hours and daily forecasts for up to 14 days. While accuracy decreases with time, our 7-day forecasts are generally reliable for planning purposes.'
    },
    {
      id: '8',
      category: 'Account',
      question: 'Do I need to create an account to use Weather.app?',
      answer: 'No account is required for basic weather information. However, creating a free account allows you to save favorite locations, customize alert preferences, and access additional features like historical weather data and extended forecasts.'
    },
    {
      id: '9',
      category: 'Account',
      question: 'Is my location data stored or tracked?',
      answer: 'We respect your privacy. Location data is only used to provide weather information and is not stored permanently unless you save it as a favorite location in your account. Please see our Privacy Policy for complete details on data handling.'
    },
    {
      id: '10',
      category: 'Troubleshooting',
      question: 'Why is the weather data different from other sources?',
      answer: 'Different weather services may use varying data sources, update frequencies, and forecasting models. We aggregate data from multiple reliable sources to provide the most accurate information. Slight variations are normal and typically resolve within a few hours.'
    },
    {
      id: '11',
      category: 'Troubleshooting',
      question: 'What should I do if I notice incorrect weather data?',
      answer: 'If you notice significantly incorrect data, please report it through our contact form or email us directly. Include the location, time, and specific data that appears incorrect. We investigate all reports and work to improve our data accuracy.'
    }
  ];

  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqData.map(faq => faq.category))];

  return (
    <div className="faq-page" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <SEO
        title="Weather.app FAQ | Common Questions Answered"
        description="Find answers about data accuracy, forecasts, air quality, features, accounts, and technical details for Weather.app."
        canonical="https://weather-eve3.onrender.com/faq"
        schema={{
          '@context':'https://schema.org',
          '@type':'FAQPage',
          'mainEntity': faqData.map(f => ({
            '@type':'Question',
            'name': f.question,
            'acceptedAnswer': { '@type':'Answer', 'text': f.answer }
          }))
        }}
      />
      <Container>
        {/* Header Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <i className="fas fa-question-circle me-3"></i>Frequently Asked Questions
            </h1>
            <p className="lead text-muted">
              Find answers to common questions about Weather.app and our services.
            </p>
          </Col>
        </Row>

        {/* Search Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    <i className="fas fa-search me-2 text-primary"></i>Search FAQs
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type your question or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-2"
                    size="lg"
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Categories */}
        <Row className="mb-4">
          <Col className="text-center">
            <h4 className="text-primary mb-3">Browse by Category</h4>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setSearchTerm(category)}
                  className="mb-2"
                >
                  <i className="fas fa-tag me-1"></i>{category}
                </Button>
              ))}
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setSearchTerm('')}
                className="mb-2"
              >
                <i className="fas fa-times me-1"></i>Clear
              </Button>
            </div>
          </Col>
        </Row>

        {/* FAQ Accordion */}
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">
                  <i className="fas fa-list me-2"></i>
                  {searchTerm ? `Search Results (${filteredFAQs.length})` : 'All Questions'}
                </h3>
              </Card.Header>
              <Card.Body className="p-0">
                {filteredFAQs.length > 0 ? (
                  <Accordion flush>
                    {filteredFAQs.map((faq) => (
                      <Accordion.Item key={faq.id} eventKey={faq.id}>
                        <Accordion.Header>
                          <div className="d-flex align-items-center w-100">
                            <span className="badge bg-primary me-3">{faq.category}</span>
                            <span className="fw-semibold">{faq.question}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="text-muted">
                          {faq.answer}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center p-5">
                    <i className="fas fa-search fa-3x text-muted mb-3"></i>
                    <h5 className="text-muted">No questions found</h5>
                    <p className="text-muted">Try different keywords or browse by category.</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="mt-5">
          <Col className="text-center">
            <Card className="shadow border-0">
              <Card.Body className="p-5">
                <h3 className="text-primary mb-3">
                  <i className="fas fa-headset me-2"></i>Still Have Questions?
                </h3>
                <p className="lead text-muted mb-4">
                  Can't find what you're looking for? Our support team is here to help!
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
                    <i className="fas fa-envelope me-2"></i>Contact Support
                  </Button>
                  <Button 
                    href="mailto:support@weather.app" 
                    variant="outline-primary" 
                    size="lg"
                  >
                    <i className="fas fa-paper-plane me-2"></i>Email Us
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

export default FAQ;