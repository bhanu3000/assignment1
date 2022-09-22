import React from 'react'
import axios from "axios";
import {
  Link  
} from 'react-router-dom'
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import Table from 'react-bootstrap/Table';
function Recommendations(){
// let [post, setPost] = useState([]);
//   const postComment = () => {
//   const name = document.querySelector("#inputname").value;
//   const title = document.querySelector("#inputtitle").value;
//   const comment = document.querySelector("#inputcomment").value;
//    setPost([{name,title,comment}]);
//    console.log(post);
//   }

const [post, setPost] = useState([]);

  const getCommentsDetails = async(e)=>{
    e.preventDefault();
    try{
        const sapid = localStorage.getItem("sapid");
        console.log("sapid", sapid);
    axios({
    method: 'get',
    url: "http://localhost:8080/getCommentsDetails/",
    params: {sapid}
   }).then(res=>{
    console.log(res)
   setPost(res.data.comments)
   
   
  
    
  });
   
  } catch (err) {
    console.log(err);
  }
  }

  

  const updateComments = async(e)=>{
 
  e.preventDefault();
  const inputsapID = localStorage.getItem("sapid");
  const inputname = document.querySelector("#inputname").value;
  const inputtitle = document.querySelector("#inputtitle").value;
  const inputcomment = document.querySelector("#inputcomment").value;
  
  
   console.log(inputname + "   " +inputtitle+ "   "+inputcomment);
  
   try{
    const response = await axios({
    method: 'post',
    url: "http://localhost:8080/commentsUpdate/",
  params: {inputsapID,inputname,inputtitle,inputcomment},
       
    
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
            
            <h3 className="Auth-form-title">Recommendations</h3>
            </div>
            <p></p>
            <input
              type="text"
              className="form-control mt-1"
              id="inputname"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control mt-1"
              id="inputtitle"
              placeholder="Title"
            />
            <input
              type="text"
              className="form-control mt-1"
              id="inputcomment"
              placeholder="You can post your comment here"
            />
            <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={updateComments}>
              Post Comments
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={getCommentsDetails}>
              View All Comments
            </button>
          </div>

           <Table striped bordered hover size="sm">
                      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Title</th>
           <th>Recommendations</th>
          
        </tr>
      </thead>
      { post.map((skill,index)=>{
                return(
                    <>
                   
                        <tr>
                            <td>{index+1}</td>
                            <td>{skill.Name}</td>
                            <td>{skill.Title}</td>
                            <td>{skill.Comments}</td>
                             

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


export default Recommendations