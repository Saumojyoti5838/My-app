import React from 'react';
import './Riju1.css';

function Riju1() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer with
          experience in building responsive and user-friendly web applications.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="Project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* Add more projects as needed */}
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourusername</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
      <footer className="App-footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Riju1;
