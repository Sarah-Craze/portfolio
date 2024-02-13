// Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:1337/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={`/projects/${project.slug}`}>{project.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
