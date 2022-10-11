import React from 'react';
import { Projects } from './Projects';
import './Portfolio.css';

export const Portfolio = () => {
  const card = Projects.map((project) => {
    return (
      <div key={project.id} className="card">
        <p className="name">{project.name}</p>
        <img src={`../previews/${project.image}.png`} className="proj-img" />
        <p className="desc">{project.description}</p>
      </div>
    );
  });
  return <>{card}</>;
};
