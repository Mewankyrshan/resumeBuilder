// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Resume Builder</h1>
      <Link to="/edit">Create Your Resume</Link>
    </div>
  );
}

export default Home;
