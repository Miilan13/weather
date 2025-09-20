import React, { useState } from 'react';
import SEO from '../Components/SEO';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const mailto = (email, subject, body) => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-page" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <SEO
        title="Contact Weather.app | Get Support & Feedback"
        description="Contact Weather.app for support, feedback, partnership inquiries, API access, or general questions. We're here to help."
        canonical="https://weather-eve3.onrender.com/contact"
        schema={{ '@context':'https://schema.org', '@type':'ContactPage', 'name':'Contact Weather.app' }}
      />
      <Container>
        {/* Header Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <i className="fas fa-envelope me-3"></i>Contact Us
            </h1>
            <p className="lead text-muted">
              We'd love to hear from you! Get in touch with our weather experts.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Form */}
          <Col lg={8} className="mb-4">
            <Card className="shadow-lg border-0 h-100">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">
                  <i className="fas fa-paper-plane me-2"></i>Send us a Message
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                {showAlert && (
                  <Alert variant="success" className="mb-4">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">
                          <i className="fas fa-user me-2 text-primary"></i>Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="border-2"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">
                          <i className="fas fa-envelope me-2 text-primary"></i>Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                          className="border-2"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      <i className="fas fa-tag me-2 text-primary"></i>Subject
                    </Form.Label>
                    <Form.Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-2"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="weather-data">Weather Data Question</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      <i className="fas fa-comment me-2 text-primary"></i>Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                      className="border-2"
                    />
                  </Form.Group>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-100 bg-primary border-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      transition: 'all 0.3s ease'
                    }}
                    disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                    onClick={() => mailto(`miilansolanki9955@gmail.com`, `Contact Form Submission: ${formData.subject}`, `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}
                  >
                    <i className="fas fa-paper-plane me-2"></i>Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={4}>
            <Card className="shadow-lg border-0 mb-4">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">
                  <i className="fas fa-info-circle me-2"></i>Contact Information
                </h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <h6 className="mb-0 ms-3 fw-semibold">Address</h6>
                  </div>
                  <p className="text-muted ms-5 mb-0">
                    390001 ,Vadodra<br />
                    Gujarat<br />
                    India
                  </p>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="contact-icon">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <h6 className="mb-0 ms-3 fw-semibold">Phone</h6>
                  </div>
                  <p className="text-muted ms-5 mb-0">
                    <a href="tel:+15551234567" className="text-decoration-none text-muted">
                      +91 97XXX XXXXX
                    </a>
                  </p>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="contact-icon">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <h6 className="mb-0 ms-3 fw-semibold">Email</h6>
                  </div>
                  <p className="text-muted ms-5 mb-0">
                    <a href="mailto:miilansolanki9955@gmail.com" className="text-decoration-none text-muted">
                      miilansolanki9955@gmail.com
                    </a>
                  </p>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center mb-2">
                    <div className="contact-icon">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <h6 className="mb-0 ms-3 fw-semibold">Business Hours</h6>
                  </div>
                  <p className="text-muted ms-5 mb-0">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </Card.Body>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-primary text-white">
                <h4 className="mb-0">
                  <i className="fas fa-link me-2"></i>Quick Links
                </h4>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="d-grid gap-2">
                  <Button variant="outline-primary" href="/about" className="text-start">
                    <i className="fas fa-info-circle me-2"></i>About Us
                  </Button>
                  <Button variant="outline-primary" href="/faq" className="text-start">
                    <i className="fas fa-question-circle me-2"></i>FAQ
                  </Button>
                  <Button variant="outline-primary" href="/privacy" className="text-start">
                    <i className="fas fa-shield-alt me-2"></i>Privacy Policy
                  </Button>
                  <Button variant="outline-primary" href="/terms" className="text-start">
                    <i className="fas fa-file-contract me-2"></i>Terms of Service
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mt-5">
          <Col>
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-primary text-white">
                <h3 className="mb-0">
                  <i className="fas fa-question-circle me-2"></i>Frequently Asked Questions
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <Row>
                  <Col md={6}>
                    <div className="faq-item mb-4">
                      <h6 className="fw-bold text-primary">How accurate is your weather data?</h6>
                      <p className="text-muted mb-0">
                        Our weather data is sourced from reliable meteorological services and updated every 15 minutes for maximum accuracy.
                      </p>
                    </div>
                    <div className="faq-item mb-4">
                      <h6 className="fw-bold text-primary">Do you provide weather alerts?</h6>
                      <p className="text-muted mb-0">
                        Yes! We provide real-time weather alerts for severe weather conditions in your area.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="faq-item mb-4">
                      <h6 className="fw-bold text-primary">Is there a mobile app available?</h6>
                      <p className="text-muted mb-0">
                        Our web application is fully responsive and works great on mobile devices. A dedicated app is coming soon!
                      </p>
                    </div>
                    <div className="faq-item mb-4">
                      <h6 className="fw-bold text-primary">How can I report incorrect weather data?</h6>
                      <p className="text-muted mb-0">
                        Please use the contact form above or email us directly. We take data accuracy seriously and investigate all reports.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
