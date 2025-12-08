import React from 'react';
import '../styles/landing.css';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaCalendarAlt, FaChartLine, FaLaptopCode, FaUsers, FaVideo,FaRobot, FaShieldAlt } from 'react-icons/fa';

import Navbar from '../components/Navbar';

function Landing() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>MentorMatch</h1>
          <p>Empower your learning with expert guidance and achieve your goals faster.</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn-primary">Join Now</Link>
            <Link to="/login" className="btn-secondary">Login</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why MentorMatch?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <FaChalkboardTeacher size={40} className="feature-icon" />
            <h3>Personalized Mentorship</h3>
            <p>Connect with mentors tailored to your goals and learning style.</p>
          </div>
          <div className="feature-card">
            <FaCalendarAlt size={40} className="feature-icon" />
            <h3>Flexible Scheduling</h3>
            <p>Book sessions easily around your busy timetable.</p>
          </div>
          <div className="feature-card">
            <FaChartLine size={40} className="feature-icon" />
            <h3>Track Progress</h3>
            <p>Monitor your growth and milestones to stay on track.</p>
          </div>
          <div className="feature-card">
            <FaLaptopCode size={40} className="feature-icon" />
            <h3>Skill Development</h3>
            <p>Learn practical skills with guidance from industry experts.</p>
          </div>
          <div className="feature-card">
            <FaUsers size={40} className="feature-icon" />
            <h3>Community Support</h3>
            <p>Join a thriving community of learners and mentors.</p>
          </div>
          <div className="feature-card">
  <FaVideo size={40} className="feature-icon" />
  <h3>Live Mentorship Sessions</h3>
  <p>Interact with mentors in real-time through video-based learning.</p>
</div>

<div className="feature-card">
  <FaRobot size={40} className="feature-icon" />
  <h3>AI-Powered Recommendations</h3>
  <p>Get smart mentor suggestions based on your goals and interests.</p>
</div>

<div className="feature-card">
  <FaShieldAlt size={40} className="feature-icon" />
  <h3>Secure & Private</h3>
  <p>Your data and conversations are protected with end-to-end security.</p>
</div>

        </div>
      </section>

      {/* Mentor Spotlight */}
      <section className="mentor-spotlight">
        <h2>Meet Our Top Mentors</h2>
        <div className="mentor-cards">
          <div className="mentor-card">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Mentor" />
            <h3>Alice Johnson</h3>
            <p>Mathematics Expert with 8+ years experience in guiding students.</p>
          </div>
          <div className="mentor-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mentor" />
            <h3>Bob Smith</h3>
            <p>Physics mentor passionate about problem-solving and research.</p>
          </div>
          <div className="mentor-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Mentor" />
            <h3>Catherine Lee</h3>
            <p>Software Engineer mentoring coding and career growth.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="Student" />
            <p>"MentorMatch helped me find the perfect mentor for my career growth!"</p>
            <h4>- Sarah K.</h4>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Student" />
            <p>"Booking sessions is seamless and my mentor is fantastic!"</p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="Student" />
            <p>"I gained clarity on my career path thanks to MentorMatch mentors."</p>
            <h4>- Priya S.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="final-cta">
        <h2>Ready to Accelerate Your Learning?</h2>
        <p>Join thousands of students and mentors and start your journey today.</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MentorMatch. All rights reserved.</p>
        <p>
          Follow us on <a href="#">Twitter</a> | <a href="#">LinkedIn</a>
        </p>
      </footer>
    </>
  );
}

export default Landing;
