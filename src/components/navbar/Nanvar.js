import React from 'react';
import {Link } from "react-router-dom";
import './nanv.css';

const navbar= () =>{
  return (
  <div className="navbar">
   <ul className='unord'>
    <li className='list1'>
      <Link to="/">Home</Link>
    </li>
    <li className='list1'>
      <Link to="/about">About</Link>
    </li>
    <li className='list1'>
      <Link to="/projects">Projects</Link>
    </li>
    <li className='list1'>
      <Link to="/educations">Educations</Link>
    </li>
    <li className='list1'>
      <Link to="/certificate">Certificate</Link>
    </li>
    </ul>
  </div>
  );
}
export default navbar;
