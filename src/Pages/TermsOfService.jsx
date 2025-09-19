import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page" style={{ 
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
              <i className="fas fa-file-contract me-3"></i>Terms of Service
            </h1>
            <p className="lead text-muted">
              Please read these terms carefully before using our weather services.
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
                    <i className="fas fa-handshake me-2"></i>Agreement to Terms
                  </h2>
                  <p className="text-muted">
                    These Terms of Service ("Terms") govern your use of Weather.app ("the Service") operated by 
                    Weather.app Inc. ("us", "we", or "our"). By accessing or using our Service, you agree to be 
                    bound by these Terms. If you disagree with any part of these terms, then you may not access 
                    the Service.
                  </p>
                </section>

                {/* Acceptance */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-check-circle me-2"></i>Acceptance of Terms
                  </h2>
                  <p className="text-muted">
                    By accessing and using Weather.app, you accept and agree to be bound by the terms and provision 
                    of this agreement. Additionally, when using this website's particular services, you shall be 
                    subject to any posted guidelines or rules applicable to such services.
                  </p>
                </section>

                {/* Use License */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-certificate me-2"></i>Use License
                  </h2>
                  <p className="text-muted mb-3">
                    Permission is granted to temporarily download one copy of Weather.app materials for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Use the service to violate any local, state, national, or international law</li>
                  </ul>
                  <p className="text-muted">
                    This license shall automatically terminate if you violate any of these restrictions and may be 
                    terminated by us at any time. Upon terminating your viewing of these materials or upon the 
                    termination of this license, you must destroy any downloaded materials in your possession.
                  </p>
                </section>

                {/* Weather Data Disclaimer */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-exclamation-triangle me-2"></i>Weather Data Disclaimer
                  </h2>
                  <p className="text-muted mb-3">
                    Weather information provided by Weather.app is for general informational purposes only. While we 
                    strive to provide accurate and up-to-date weather data, we make no representations or warranties 
                    of any kind regarding:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>The accuracy, completeness, or reliability of weather forecasts</li>
                    <li>The timeliness of weather data updates</li>
                    <li>The availability of the service at all times</li>
                    <li>The suitability of weather information for any particular purpose</li>
                  </ul>
                  <p className="text-muted">
                    Weather conditions can change rapidly and forecasts may not always be accurate. Users should not 
                    rely solely on our weather information for making critical decisions. Always consult official 
                    weather services and local authorities for severe weather warnings and emergency situations.
                  </p>
                </section>

                {/* User Accounts */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-user-circle me-2"></i>User Accounts
                  </h2>
                  <p className="text-muted mb-3">
                    When you create an account with us, you must provide information that is accurate, complete, 
                    and current at all times. You are responsible for:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>Safeguarding the password and all activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account</li>
                    <li>Ensuring your contact information is current for service notifications</li>
                    <li>Maintaining the security of your account credentials</li>
                  </ul>
                  <p className="text-muted">
                    We reserve the right to refuse service, terminate accounts, or remove content at our sole 
                    discretion if we believe you have violated these Terms.
                  </p>
                </section>

                {/* Prohibited Uses */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-ban me-2"></i>Prohibited Uses
                  </h2>
                  <p className="text-muted mb-3">
                    You may not use our Service:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To collect or track the personal information of others</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of the Service</li>
                  </ul>
                  <p className="text-muted">
                    We reserve the right to terminate your use of the Service for violating any of the prohibited uses.
                  </p>
                </section>

                {/* Content and Intellectual Property */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-copyright me-2"></i>Content and Intellectual Property
                  </h2>
                  <p className="text-muted mb-3">
                    The Service and its original content, features, and functionality are and will remain the 
                    exclusive property of Weather.app and its licensors. The Service is protected by copyright, 
                    trademark, and other laws. Our trademarks and trade dress may not be used in connection with 
                    any product or service without our prior written consent.
                  </p>
                  <p className="text-muted">
                    Weather data is sourced from various meteorological services and data providers. We respect 
                    the intellectual property rights of our data sources and expect users to do the same.
                  </p>
                </section>

                {/* Privacy Policy */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-shield-alt me-2"></i>Privacy Policy
                  </h2>
                  <p className="text-muted">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                    of the Service, to understand our practices. By using our Service, you agree to the collection 
                    and use of information in accordance with our Privacy Policy.
                  </p>
                </section>

                {/* Service Availability */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-server me-2"></i>Service Availability
                  </h2>
                  <p className="text-muted">
                    We strive to maintain the availability of our Service, but we do not guarantee that the Service 
                    will be available at all times. The Service may be temporarily unavailable due to maintenance, 
                    updates, technical issues, or circumstances beyond our control. We reserve the right to withdraw 
                    or amend our Service without notice.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-gavel me-2"></i>Limitation of Liability
                  </h2>
                  <p className="text-muted mb-3">
                    In no event shall Weather.app, nor its directors, employees, partners, agents, suppliers, or 
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including without limitation:
                  </p>
                  <ul className="text-muted mb-3">
                    <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                    <li>Damages resulting from your use or inability to use the Service</li>
                    <li>Damages resulting from reliance on weather information provided</li>
                    <li>Damages resulting from any unauthorized access to or use of our servers</li>
                    <li>Damages resulting from any interruption or cessation of transmission to or from our Service</li>
                  </ul>
                  <p className="text-muted">
                    This limitation applies whether the alleged liability is based on contract, tort, negligence, 
                    strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                  </p>
                </section>

                {/* Governing Law */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-balance-scale me-2"></i>Governing Law
                  </h2>
                  <p className="text-muted">
                    These Terms shall be interpreted and governed by the laws of the State of [Your State], United States, 
                    without regard to its conflict of law provisions. Any disputes arising from these Terms or your use 
                    of the Service shall be resolved in the courts of [Your State].
                  </p>
                </section>

                {/* Changes to Terms */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-edit me-2"></i>Changes to Terms
                  </h2>
                  <p className="text-muted">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will try to provide at least 30 days notice prior to any new 
                    terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p className="text-muted">
                    By continuing to access or use our Service after those revisions become effective, you agree 
                    to be bound by the revised terms.
                  </p>
                </section>

                {/* Termination */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-times-circle me-2"></i>Termination
                  </h2>
                  <p className="text-muted">
                    We may terminate or suspend your account and bar access to the Service immediately, without 
                    prior notice or liability, under our sole discretion, for any reason whatsoever, including 
                    without limitation if you breach the Terms. Upon termination, your right to use the Service 
                    will cease immediately.
                  </p>
                </section>

                {/* Severability */}
                <section className="mb-5">
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-puzzle-piece me-2"></i>Severability
                  </h2>
                  <p className="text-muted">
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will 
                    be changed and interpreted to accomplish the objectives of such provision to the greatest 
                    extent possible under applicable law and the remaining provisions will continue in full force and effect.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-primary mb-3">
                    <i className="fas fa-envelope me-2"></i>Contact Information
                  </h2>
                  <p className="text-muted mb-3">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="contact-info bg-light p-3 rounded">
                    <p className="mb-2"><strong>Email:</strong> legal@weather.app</p>
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

export default TermsOfService;