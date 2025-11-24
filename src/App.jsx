import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Form State
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Enterprise SaaS'
  });

  // Handlers
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', inquiryType: 'Enterprise SaaS' });
    }, 2000);
  };

  return (
    <div className="app-container">

      {/* --- Navigation --- */}
      <header className="navbar">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <h1 className="company-name">CLOUD DECK</h1>
        </div>
        <nav className="nav-links">
          <a href="#services">Solutions</a>
          <a href="#contact">Contact</a>
          <button className="btn-login" onClick={toggleLoginModal}>
            Client Login
          </button>
        </nav>
      </header>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="hero-content">
          <h2>Building Next-Generation Digital Experiences</h2>
          <p style={{ fontStyle: 'italic' }}>
            A technology lab dedicated to AI-driven applications and seamless global commerce solutions.
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            Request Demo
          </button>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="services-section">
        <div className="section-header">
          <h3>Core Infrastructure</h3>
          <div className="divider"></div>
        </div>

        <div className="cards-grid">
          {/* Card 1: AI - 芯片图标 */}
          <div className="service-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <path d="M9 1L9 4"></path><path d="M15 1L15 4"></path>
                <path d="M9 20L9 23"></path><path d="M15 20L15 23"></path>
                <path d="M20 9L23 9"></path><path d="M20 14L23 14"></path>
                <path d="M1 9L4 9"></path><path d="M1 14L4 14"></path>
              </svg>
            </div>
            <h4>AI Solutions</h4>
            <p>Developing intuitive AI-powered tools that enhance personal productivity and digital interaction for global users.</p>
          </div>

          {/* Card 2: Commerce - 地球网络图标 */}
          <div className="service-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h4>Commerce Operations</h4>
            <p>Seamlessly connect supply networks with market demands through our integrated management infrastructure.</p>
          </div>

          {/* Card 3: Data - 增长趋势图标 */}
          <div className="service-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h4>Consumer Insights</h4>
            <p>Leveraging data analytics to understand market trends and optimize user experiences in real-time.</p>
          </div>
        </div>
      </section>


      {/* --- Contact Section --- */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Partner with Cloud Deck</h3>
            <p style={{ fontStyle: 'italic' }}>
              We engage with select partners to build resilient business infrastructure.
              Fill out the form to request an institutional demo.
            </p>
          </div>

          <div className="contact-form-wrapper">
            {formStatus === 'success' ? (
              <div className="success-message">
                <div className="checkmark">✓</div>
                <h4>Message Received</h4>
                <p>Our compliance team will review your inquiry and contact you within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="btn-text">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div className="form-group">
                  <label>Corporate Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div className="form-group">
                  <label>Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    disabled={formStatus === 'submitting'}
                  >
                    <option>AI Solutions</option>
                    <option>Comsumer Insights</option>
                    <option>Investor Relations</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending secure data...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* --- Footer (Compliance) --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h5>Cloud Deck LLC</h5>
            <p className="legal-text">
              Cloud Deck LLC provides AI solutions and global commerce solutions.
              <br />
              Unauthorized access to the platform is prohibited.
            </p>
          </div>
          <div className="footer-col">
            <h5>Contact & Compliance</h5>
            <p><strong>Address:</strong> 30 N Gould St, Ste N, Sheridan, WY 82801</p>
            <p><strong>Email:</strong> <a href="mailto:contact@clouddeckglobal.com">contact@clouddeckglobal.com</a></p>
            <p><strong>Phone:</strong> +1 (818) 729-5676</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cloud Deck LLC. All Rights Reserved.</p>
        </div>
      </footer>

      {/* --- Modal (Restricted Access) --- */}
      {isLoginModalOpen && (
        <div className="modal-overlay" onClick={toggleLoginModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>Portal Access Restricted</h4>
              <button className="close-btn" onClick={toggleLoginModal}>&times;</button>
            </div>
            <div className="modal-body">
              <p>
                The Cloud Deck Platform is currently in <strong>Private Beta</strong>.
                Public registration is closed.
              </p>
              <p>
                Please contact your dedicated account manager or the compliance office for access credentials.
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn-primary-small" onClick={toggleLoginModal}>Understood</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;