
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Analyst (FullStack Developer)",
      company: "RH Infos",
      period: "Sept 2023 - Apr 2025",
      description: "Contributed to all stages of the software lifecycle in an Agile environment. Developed responsive web applications using React.js, Redux, JavaScript, Bootstrap 5, jQuery, PHP, CodeIgniter, SQL, MySQL, NodeJS, and Express js. Worked with CI/CD pipelines for streamlined deployments.",
      current: true
    },
    {
      title: "Front end developer",
      company: "Asquare Technologies",
      period: "OCT 2022 - July 2023",
      description: "Developed and maintained responsive web pages using HTML, CSS, and JavaScript. Collaborated with UI/UX designers. Spearheaded the development of a custom CMS-based lead generation software using the MERN Stack.",
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>My Experience</h2>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className={`timeline-item ${exp.current ? 'current' : ''}`}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="job-title">{exp.title}</h4>
                      <div className="company-period">
                        <span className="company">{exp.company}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                    <p className="job-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
