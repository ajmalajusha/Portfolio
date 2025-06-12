
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Asquare CMS Leads Automation",
      description: "A lead automation platform built using the MERN stack (MySQL, Express, React, Node.js), enhanced with Material UI, and Bootstrap 5. Designed to streamline lead capture and management from sources like Facebook, Google Ads, and websites. Features user authentication, secure data handling using JSON APIs, and real-time lead tracking.",
      technologies: ["MERN Stack", "Material UI", "Bootstrap 5", "DataTables"],
      image: "fas fa-chart-line",
      liveDemo: "#",
      viewCode: "#"
    },
    {
      title: "Weather App",
      description: "A responsive web application built with React.js that provides real-time weather information for any city using a weather API. Features include search functionality, display of temperature, humidity, wind speed, and weather conditions. Designed to be responsive and includes error handling.",
      technologies: ["React.js", "Weather API", "Bootstrap", "CSS3"],
      image: "fas fa-cloud-sun",
      liveDemo: "https://ajmalajusha.github.io/Weather-App/",
      viewCode: "https://github.com/ajmalajusha/Weather-App"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>My Projects</h2>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <i className={project.image}></i>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveDemo} target='_blank' className="btn btn-primary btn-sm me-2">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href={project.viewCode} target='_blank' className="btn btn-outline-primary btn-sm">
                      <i className="fab fa-github"></i> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
