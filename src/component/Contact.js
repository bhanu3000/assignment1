import React from 'react'
import {
  Link
  
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";


function Contact(){

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
            <h3 className="Auth-form-title">Contact Me</h3>
            </div>
            
            
            <div>
            <p align="centre"> 
             Address:-
                     5th Floor RAPDRP Unit,
                     Shakti Bhawan, Lucknow.
                     email-bhanurapdrp@gmail.com.
                     Mobile_No- 9140702987
            </p>
            </div>
            </form>
            </div>
  );
}


export default Contact