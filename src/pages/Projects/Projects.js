import React from "react";
import "./project.css";
import project1 from "../../assets/project1.avif";
import project2 from "../../assets/project2.avif";

const Projects = () => {
  const data = [
    {
      id: 1,
      image: project1,
      title: " CRM PROJECT",
    },
    {
      id: 1,
      image: project2,
      title: " TANTUM SOFTWARE",
    },
  ];

  return (
    <section id="projects"  >
      <h5>Recent works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img className="projects__img" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
