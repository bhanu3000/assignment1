import React from 'react'
import {
  Link
} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Table from 'react-bootstrap/Table';
function Skills(){

const skills = [{Technology:"C Language",Profficiency:"Intermidiate"},{Technology:"C++ Language",Profficiency:"Intermidiate"},{Technology:"Java",Profficiency:"Intermidiate"},{Technology:"React",Profficiency:"Begineer"}]
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
            <h3 className="Auth-form-title">My Skills</h3>
            </div>
             <Table striped bordered hover size="sm">
                      <thead>
        <tr>
          <th>Index</th>
          <th>Technology</th>
          <th>Profficiency</th>
          
        </tr>
      </thead>
      { skills.map((skill,index)=>{
                return(
                    <>
                   
                        <tr>
                            <td>{index+1}</td>
                            <td>{skill.Technology}</td>
                            <td>{skill.Profficiency}</td>
                             

                        </tr>
                   
                    </>
                )
                 
            })
        }
      </Table>
            </form>
            </div>
  );
}


export default Skills