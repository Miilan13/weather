import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <Container>
        {/* Header Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <i className="fas fa-shield-alt me-3"></i>Privacy Policy
            </h1>
            <p className="lead text-muted">
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
            <p className="text-muted">
              <strong>Last updated:</strong> September 19, 2025
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                
                {/* Introduction */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-info-circle me-2"></i>Introduction
                  </h2>
                  <p className="text-muted">
                    Weather.app ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    and use our weather services. Please read this privacy policy carefully. If you do not agree with 
                    the terms of this privacy policy, please do not access the site.
                  </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-database me-2"></i>Information We Collect
                  </h2>
                  
                  <h4 className="text-primary mb-3">Personal Information</h4>
                  <p className="text-muted mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="text-muted mb-4">
                    <li>Create an account or register for our services</li>
                    <li>Subscribe to our newsletter or weather alerts</li>
                    <li>Contact us through our contact forms or email</li>
                    <li>Participate in surveys or feedback forms</li>
                    <li>Report weather conditions or issues</li>
                  </ul>

                  <h4 className="text-primary mb-3">Automatically Collected Information</h4>
                  <p className="text-muted mb-3">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="text-muted mb-4">
                    <li>Your IP address and geographic location</li>
                    <li>Browser type and version</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Search terms used to find our site</li>
                  </ul>

                  <h4 className="text-primary mb-3">Location Information</h4>
                  <p className="text-muted">
                    With your permission, we may collect and process information about your precise or approximate 
                    location to provide location-specific weather information. You can control location sharing 
                    through your browser or device settings.
                  </p>
                </section>

                {/* How We Use Information */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-cogs me-2"></i>How We Use Your Information
                  </h2>
                  <p className="text-muted mb-3">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="text-muted">
                    <li>Providing accurate weather information for your location</li>
                    <li>Sending weather alerts and notifications you've requested</li>
                    <li>Personalizing your weather experience and preferences</li>
                    <li>Improving our website functionality and user experience</li>
                    <li>Analyzing usage patterns and website performance</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Sending periodic emails with weather updates and service information</li>
                    <li>Detecting and preventing fraud and unauthorized access</li>
                    <li>Complying with legal obligations and enforcing our terms</li>
                  </ul>
                </section>

                {/* Information Sharing */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-share-alt me-2"></i>How We Share Your Information
                  </h2>
                  <p className="text-muted mb-3">
                    We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                  </p>
                  
                  <h4 className="text-primary mb-3">Service Providers</h4>
                  <p className="text-muted mb-3">
                    We may share your information with trusted third-party service providers who assist us in operating 
                    our website, conducting our business, or servicing you, including:
                  </p>
                  <ul className="text-muted mb-4">
                    <li>Weather data providers and meteorological services</li>
                    <li>Cloud hosting and data storage providers</li>
                    <li>Email service providers for notifications</li>
                    <li>Analytics and website performance services</li>
                    <li>Customer support platforms</li>
                  </ul>

                  <h4 className="text-primary mb-3">Legal Requirements</h4>
                  <p className="text-muted">
                    We may disclose your information if required to do so by law or in response to valid requests 
                    by public authorities, such as a court order or subpoena.
                  </p>
                </section>

                {/* Data Security */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-lock me-2"></i>Data Security
                  </h2>
                  <p className="text-muted">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure server infrastructure and regular security updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Employee training on data protection practices</li>
                  </ul>
                  <p className="text-muted">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your information, we cannot 
                    guarantee its absolute security.
                  </p>
                </section>

                {/* Cookies and Tracking */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-cookie me-2"></i>Cookies and Tracking Technologies
                  </h2>
                  <p className="text-muted mb-3">
                    We use cookies and similar tracking technologies to enhance your experience on our website:
                  </p>
                  <ul className="text-muted mb-3">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                  <p className="text-muted">
                    You can control cookies through your browser settings. However, disabling certain cookies 
                    may affect the functionality of our website.
                  </p>
                </section>

                {/* Your Rights */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-user-shield me-2"></i>Your Rights and Choices
                  </h2>
                  <p className="text-muted mb-3">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Delete your personal information (right to be forgotten)</li>
                    <li>Restrict or object to certain processing of your data</li>
                    <li>Data portability (receive your data in a portable format)</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                  <p className="text-muted">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </section>

                {/* Data Retention */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-calendar-times me-2"></i>Data Retention
                  </h2>
                  <p className="text-muted">
                    We retain your personal information only for as long as necessary to fulfill the purposes 
                    outlined in this privacy policy, unless a longer retention period is required or permitted by law. 
                    When we no longer need your personal information, we will securely delete or anonymize it.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-child me-2"></i>Children's Privacy
                  </h2>
                  <p className="text-muted">
                    Our services are not intended for children under the age of 13. We do not knowingly collect 
                    personal information from children under 13. If you are a parent or guardian and believe 
                    your child has provided us with personal information, please contact us immediately.
                  </p>
                </section>

                {/* International Users */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-globe me-2"></i>International Users
                  </h2>
                  <p className="text-muted">
                    If you are accessing our services from outside the United States, please be aware that your 
                    information may be transferred to, stored, and processed in the United States. By using our 
                    services, you consent to the transfer of your information to the United States.
                  </p>
                </section>

                {/* Changes to Privacy Policy */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-edit me-2"></i>Changes to This Privacy Policy
                  </h2>
                  <p className="text-muted">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                    advised to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-envelope me-2"></i>Contact Us
                  </h2>
                  <p className="text-muted mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="contact-info bg-light p-3 rounded">
                    <p className="mb-2"><strong>Email:</strong> privacy@weather.app</p>
                    <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className="mb-2"><strong>Address:</strong> 123 Weather Street, Climate City, CC 12345</p>
                    <p className="mb-0"><strong>Contact Form:</strong> <a href="/contact" className="text-primary">weather.app/contact</a></p>
                  </div>
                </section>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;