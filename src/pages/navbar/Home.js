import React from 'react';

import { FaJava, FaLanguage, FaPython, FaBrain, FaRobot, FaCogs, FaDesktop, FaReact } from 'react-icons/fa';

import reactlogo from './images/po.jpg';
import logo from './images/arrow.jpg';
import logo1 from './images/face1.png';
import logo2 from './images/form.jpg';
import './hom.css';

const Home= () =>{

  return (
   
   <div>  
<section className='container'>
      <div className='image-container'>
          <img src={reactlogo} alt="my" />
        </div>
        <div className='text-container'>
          <h2>
            <p className="full-animation">
              H<span className='sp'>e</span>y, <span className='sp'>t</span>h<span className='sp'>i</span>s <span className='sp'>i</span>s <span className='sp'>S</span>a<span className='sp'>u</span>m<span className='sp'>o</span>j<span className='sp'>y</span>o<span className='sp'>t</span>i <span className='sp'>D</span>a<span className='sp'>s</span>
            </p>
          </h2>
        </div>
       
        
      </section>
      <section className='About'>
        <h2><p className='Me'>About Me</p></h2>
        <p className='Para'>I am an undergrad B.Tech(CSE) student at ITER college, with a keen interest in Artificial Intelligence
        and Machine Learning. My journey is not merely a pursuit of a degree but a passinate exploration of areas of Artificial Intelligence
        (AI) and Machine Learning(ML). On other hand, I knows languages like Front-end, Html, Css, Python, Java, C, React js.<break>
        Outside of this I love to play online games,watching movies and explore new places in the world</break> </p>
      </section>
      <break></break>
      <section className='Project'>
        <h2><p className='Project1'>Projects</p></h2>
       <h2><p className='para3'>1. MLP Face Recognition (To know more about it go to projects section)<img src={logo} alt="arrow" height="15px"/></p></h2>
        <div className="mlp-face-recognition-container">
        <p className='para2'>MLP Face Recognition<img src={logo1} alt="face" height="40px"/></p>
    </div>
       
        <h2><p className='para3'>2. Online-Form-Fill-up (To know more about it go to projects section)<img src={logo} alt="arrow" height="15px"/></p></h2>
        <div className="form-container">
        <p className='para4'>Form Filling <img src={logo2} alt="arrow" height="40px"/></p>
    </div>

        </section>
        <break></break>
        <section>
        <h2><p className='Skil1'>Skills</p></h2>
     
        <div className="circular-skills-container">
      <div className="skill java">
        <FaJava />
        <span>Java</span>
      </div>
      <div className="skill c">
        <FaLanguage />
        <span>C</span>
      </div>
      <div className="skill python">
        <FaPython />
        <span>Python</span>
      </div>
      <div className="skill ai">
        <FaBrain />
        <span>Artificial Intelligence</span>
      </div>
      <div className="skill ml">
        <FaCogs />
        <span>Machine Learning</span>
      </div>
      <div className="skill frontend">
        <FaDesktop/>
        <span>Front-End</span>
      </div>
      <div className="skill React">
        <FaReact />
        <span>React Js</span>
      </div>
      <div className="skill dl">
        <FaRobot />
        <span>Deep Learning</span>
      </div>
    </div>
    </section>
   
    
   </div>

  );
}
export default Home;

