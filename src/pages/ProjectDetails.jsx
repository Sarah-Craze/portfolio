// ProjectDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import showdown from 'showdown';

function ProjectDetails(props) {
  const [project, setProject] = useState(null);
  const converter = new showdown.Converter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/projects/${props.match.params.slug}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [props.match.params.slug]);

  return (
    <div>
      {project && (
        <div>
          <h2>{project.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(project.content) }}></div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
