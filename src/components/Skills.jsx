
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "HTML", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" },
        { name: "Bootstrap5", icon: "fab fa-bootstrap" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React JS", icon: "fab fa-react" },
        { name: "Redux.js", icon: "fas fa-code" },
        { name: "jQuery", icon: "fas fa-code" },
        { name: "Material UI", icon: "fas fa-palette" },
        { name: "Vite", icon: "fas fa-bolt" },
        { name: "Prime React", icon: "fas fa-gem" },
        { name: "radix", icon: "fas fa-palette" }
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "Core PHP", icon: "fab fa-php" },
        { name: "CodeIgniter", icon: "fas fa-fire" },
        { name: "NodeJS", icon: "fab fa-node-js" },
        { name: "Express", icon: "fas fa-server" }
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", icon: "fab fa-react" },
        { name: "Android Studio", icon: "fa-brands fa-android" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "fas fa-database" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "RDBMS", icon: "fas fa-table" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "VS-Code", icon: "fas fa-code" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Github", icon: "fab fa-github" },
        { name: "Bitbucket", icon: "fab fa-bitbucket" }
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Canva", icon: "fas fa-paint-brush" },
        { name: "Photoshop", icon: "fas fa-image" },
        { name: "CorelDRAW", icon: "fas fa-vector-square" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>My Skill Set</h2>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="skill-category">
                <h4 className="category-title">{category.title}</h4>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
