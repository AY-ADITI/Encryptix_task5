import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobListingsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="JobListingsPage">
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <Link to={`/job/${job._id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobListingsPage;
