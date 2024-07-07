import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to Job Board</h1>
      <Link to="/jobs">View Job Listings</Link>
    </div>
  );
}

export default HomePage;

