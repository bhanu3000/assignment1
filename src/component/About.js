import React from 'react'
import {
  Link
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";


function About(){

  return(
    <div className="Auth-form-container">
        <form className="Auth-form">
          <div>
             <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/skills">Skills</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/experience">Experience</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/contactme">Contact Me</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/recommendations">Recommendations</Link>
            </div>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">About</h3>
            </div>
             
            <div className="text-center">
              <p> Myself Bhanu Pratap Singh . I am currently posted in ShaktiBhawan and currently undergoing a full
                stack development training program organised by IIIT Lucknow at ETI Lucknow.
              </p>
              
              
            </div>
            </form>
            </div>
  );
  
}


export default About