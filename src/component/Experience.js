import axios from "axios";
import {Link} from 'react-router-dom';
import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from 'react-bootstrap/Table';

function Experience(){

  //const experience = [{Organisation:"UPPCL",DOJ:"02-05-2014",Designation:"EE"}]
  const [experience, setExperience] = useState([]);

  const getExperienceDetails = async(e)=>{
    e.preventDefault();
    try{
        const sapid = localStorage.getItem("sapid");
        console.log("sapid", sapid);
    axios({
    method: 'get',
    url: "http://localhost:8080/getExperienceDetails/",
    params: {sapid}
   }).then(res=>{
    console.log(res)
   setExperience(res.data.experience)
   
   
  
    
  });
   
  } catch (err) {
    console.log(err);
  }
  }

  

  const updateExperience = async(e)=>{
 
  e.preventDefault();
  const inputsapID = localStorage.getItem("sapid");
  const inputOrganisation = document.querySelector("#inputOrganisation").value;
  const inputdateofJoining = document.querySelector("#inputDateofJoining").value;
  const inputDesignation = document.querySelector("#inputDesignation").value;
  const inputprojectDetails = document.querySelector("#inputProject").value;
  
   console.log(inputsapID + "   " +inputOrganisation+ "   "+inputdateofJoining+"         "+ inputDesignation+"     "+inputprojectDetails);
  
   try{
    const response = await axios({
    method: 'post',
    url: "http://localhost:8080/experienceUpdate/",
  params: {inputsapID,inputOrganisation,inputdateofJoining,inputDesignation,inputprojectDetails},
       
    
   });
   
 
  
  } catch (err) {
    console.log(err);
  }
 };




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
            <h3 className="Auth-form-title">My Experience</h3>
            </div>
           <div>
            <input
              type="text"
              id="inputOrganisation"
              placeholder="Organisation Name"
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="inputDateofJoining"
              placeholder="Date of Joining"
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="inputDesignation"
              placeholder="Designation"
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              id="inputProject"
              placeholder="Project Details"
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" onClick={updateExperience}>
              Post_Exp
            </button>&nbsp;
            <button type="button" className="btn btn-primary" onClick={getExperienceDetails}>
              Get_All_Details
            </button> 

           </div>

            <Table striped bordered hover size="sm">
                      <thead>
        <tr>
          <th>Index</th>
          <th>Organisation</th>
          <th>Date Of Joining</th>
           <th>Designation</th>
          
        </tr>
      </thead>
      { experience.map((skill,index)=>{
                return(
                    <>
                   
                        <tr>
                            <td>{index+1}</td>
                            <td>{skill.Organisation}</td>
                            <td>{skill.DOJ}</td>
                            <td>{skill.Designation}</td>
                             

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


export default Experience