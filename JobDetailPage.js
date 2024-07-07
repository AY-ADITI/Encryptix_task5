import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobDetailPage({ match }) {
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs/${match.params.id}`)
      .then(response => setJob(response.data))
      .catch(error => console.log(error));
  }, [match.params.id]);

  return (
    <div className="JobDetailPage">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
    </div>
  );
}

export default JobDetailPage;
