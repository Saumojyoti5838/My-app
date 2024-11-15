import React from 'react';
import './education.css';
const Educations = () =>{
  return (
     <div>
    <section className='cont2'>
    <div className='image2'>
    <h2 className='ed'>Education</h2>
      <div className="education-item">
        <h3 className='cla'>B.Tech in Computer Science and Engineering</h3>
        <p className='ins'>Institute: ITER, SOA University, Bhubaneswar</p>
        <p className='ins'>Duration: 2021 - 2025</p>
        <p className='ins'>CGPA: 7.63</p>
      </div>
      <div className="education-item">
        <h3 className='cla'>Class 12</h3>
        <p className='ins'>School: DAV Public School, Asansol</p>
        <p className='ins'>Percentage: 83%</p>
        <p className='ins'>Passed Year: 2021</p>
      </div>
      <div className="education-item">
        <h3 className='cla'>Class 10</h3>
        <p className='ins'>School: DAV Public School, Asansol</p>
        <p className='ins'>Percentage: 89.16%</p>
        <p className='ins'>Passed Year: 2019</p>
      </div>
      </div>
      </section>
  </div>
  );
}
export default Educations;
