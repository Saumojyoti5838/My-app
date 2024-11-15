import React from 'react';
import './projects.css';
const Projects = () =>{
  return (
    <div>

    <section className='container3'>
    <div className='image3'>
    <div className="projects-bar">
      <h2 className='myi'>My Projects</h2>
      <ul className='lu'>
        <li className='il'>
          <h3 className='fac'>MLP Face Recognition</h3>
          <p className='para53'>
            Developed an MLP-based face recognition system during my internship at Internship Studio. This project involved implementing machine learning algorithms to recognize faces, providing a foundation for applications in security and access control.
          </p>
          <p className='para53'>
            <strong className='str'>Real-Life Application:</strong> The MLP face recognition system can be applied in various real-life scenarios, such as secure building access, user authentication in devices, and surveillance systems.
          </p>
        </li>
        <li>
          <h3 className='fac'>Online Form Fill-up System</h3>
          <p className='para53'>
            Designed and implemented an online form fill-up system for efficient data collection and processing. This project aimed to streamline the form submission process, making it user-friendly and accessible.
          </p>
          <p className='para53'>
            <strong className='str'>Real-Life Application:</strong> The online form fill-up system has practical use in businesses, educational institutions, and organizations for collecting and managing information, simplifying administrative tasks.
          </p>
        </li>
      </ul>
    </div>
    </div>
    </section>
    </div>
  );
}
export default Projects;
