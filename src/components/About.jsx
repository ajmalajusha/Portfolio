
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>About Me</h2>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content">
              <p className="about-text">
                Passionate Full Stack Developer with 2.7 years of hands-on experience in building and maintaining scalable web applications. Possess a strong foundation in both front-end and back-end development, with proven expertise in debugging, problem-solving, and delivering robust, high-quality solutions.
              </p>
              <p className="about-text">
                Adept at working collaboratively within teams to drive project success and ensure optimal performance. Detail-oriented and committed to continuous learning, always staying current with the latest industry trends, technologies, and best practices to fuel ongoing professional growth.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/ajmal-a-a2b877246/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/ajmalajusha" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2.7+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
