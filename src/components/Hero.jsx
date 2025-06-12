import React from 'react';
import profileimg from '../../public/ajprofile.jpg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title">
                Ajmal Abbas: <span className="text-primary">Passionate Full Stack Developer</span>
              </h1>
              <p className="hero-subtitle">
                Building scalable and robust web applications with a focus on user experience.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary btn-lg me-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </button>
                <button 
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-image">
                  {/* <i className="fas fa-user-circle"></i> */}
                 <img src={profileimg}  className='rounded   ' style={{height:"20rem"}}/> 
                </div>
                <div className="code-animation">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
