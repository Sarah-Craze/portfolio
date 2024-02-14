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
      <div className="contact-info">
        <h3>Projet :</h3>
        <ul>
          <li>Trouvetonasso : <a href="[https://github.com/TrouveTonAssoTeam/TrouveTonAsso.git]">Trouvetonasso</a></li>
        </ul>
      </div>
    </div>

    
  );
}

export default Projects;
