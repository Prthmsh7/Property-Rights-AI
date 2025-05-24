import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBalanceScale, FaChartLine, FaLock, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBars } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Property Rights Protection",
    description: "Get instant legal guidance on property ownership, inheritance, and dispute resolution."
  },
  {
    icon: <FaBalanceScale />,
    title: "Expert Legal Insights",
    description: "Access comprehensive legal information about Indian property laws and regulations."
  },
  {
    icon: <FaChartLine />,
    title: "Market Intelligence",
    description: "Stay updated with property market trends and investment opportunities."
  },
  {
    icon: <FaLock />,
    title: "Secure Platform",
    description: "Your data is encrypted and protected with enterprise-grade security."
  }
];

const testimonials = [
  {
    text: "Rightful Properties helped me resolve a complex property dispute within weeks. Their AI assistant provided clear guidance throughout the process.",
    author: "Rajesh Kumar",
    role: "Property Owner",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    text: "The platform's legal insights are invaluable. I was able to understand my property rights and make informed decisions about my inheritance.",
    author: "Priya Sharma",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    text: "As a lawyer, I'm impressed by the accuracy of the legal information provided. It's a great tool for quick property law references.",
    author: "Dr. Amit Patel",
    role: "Property Law Expert",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];

const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "50,000+", label: "Legal Queries Resolved" },
  { value: "95%", label: "User Satisfaction" },
  { value: "24/7", label: "AI Support" }
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="navbar-brand">Rightful Properties</a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="nav-buttons">
          <SignInButton mode="modal">
            <button className="btn-secondary">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="btn-primary">
              Get Started
              <FaArrowRight />
            </button>
          </SignUpButton>
        </div>
        <button className="mobile-menu">
          <FaBars />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>
              <span className="gradient-text">Rightful Properties</span>
              <br />
              Your Legal AI Companion
            </h1>
            <p>
              Get instant answers to your property law questions. 
              Powered by advanced AI technology.
            </p>
            <div className="hero-buttons">
              <SignUpButton mode="modal">
                <button className="btn-primary">
                  Get Started Free
                  <FaArrowRight />
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="btn-secondary">Sign In</button>
              </SignInButton>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="floating-card">
              <div className="card-content">
                <h3>Property Rights</h3>
                <p>Get instant legal guidance</p>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <h3>Legal Documents</h3>
                <p>Access verified templates</p>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <h3>Market Insights</h3>
                <p>Real-time property data</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h2>Our Mission</h2>
            <p>
              Rightful Properties was born from a vision to democratize access to property law knowledge in India. 
              We understand that property disputes and legal matters can be overwhelming and expensive to navigate.
            </p>
            <p>
              Our AI-powered platform combines cutting-edge technology with comprehensive legal expertise to provide 
              instant, accurate guidance on property rights, inheritance laws, and dispute resolution.
            </p>
            <p>
              We're committed to making property law accessible to everyone, ensuring that no one has to face 
              property-related challenges alone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="Property Rights" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2>Why Choose Rightful Properties?</h2>
          <p>Everything you need to protect your property rights</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of satisfied property owners</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="stat-card"
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We're here to help with your property law questions</p>
        </div>
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <span>support@rightfulproperties.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123 Legal Street, Mumbai, India</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
                <FaArrowRight />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Protect Your Property Rights?</h2>
          <p>Join thousands of property owners who trust Rightful Properties</p>
          <SignUpButton mode="modal">
            <button className="btn-primary">
              Start Free Trial
              <FaArrowRight />
            </button>
          </SignUpButton>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage; 