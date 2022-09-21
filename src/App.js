
import './App.css';
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import Table from 'react-bootstrap/Table';

function App() {

  let [currentPage, setCurrentPage] = useState("About");
 

if(currentPage === "Skills"){

  return(
   <div className="App">
        <a className="nav-links" href="#about" onClick={()=>setCurrentPage("About")}>About</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience"  onClick={()=>setCurrentPage("Skills")}>Skills</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Experience")}>Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("ContactMe")}>Contact Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Recommendations")}>Recommendations</a>
       
       <Skills/> 
      
    </div>
  );
}

if(currentPage === "Experience"){

  return(
   <div className="App">
        <a className="nav-links" href="#about" onClick={()=>setCurrentPage("About")}>About</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience"  onClick={()=>setCurrentPage("Skills")}>Skills</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Experience")}>Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("ContactMe")}>Contact Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Recommendations")}>Recommendations</a>
       
      <Experience/>
      
    </div>
  );
}
  
if(currentPage === "ContactMe"){

  return(
   <div className="App">
        <a className="nav-links" href="#about" onClick={()=>setCurrentPage("About")}>About</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience"  onClick={()=>setCurrentPage("Skills")}>Skills</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Experience")}>Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("ContactMe")}>Contact Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Recommendations")}>Recommendations</a>
       
       <Contact_me/>
      
    </div>
  );
}

if(currentPage === "Recommendations"){

  return(
   <div className="App">
        <a className="nav-links" href="#about" onClick={()=>setCurrentPage("About")}>About</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience"  onClick={()=>setCurrentPage("Skills")}>Skills</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Experience")}>Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("ContactMe")}>Contact Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Recommendations")}>Recommendations</a>
       
     <Recommendations/>
      
    </div>
  );
}
  return (
    <div className="App">
        <a className="nav-links" href="#about" onClick={()=>setCurrentPage("About")}>About</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience"  onClick={()=>setCurrentPage("Skills")}>Skills</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Experience")}>Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("ContactMe")}>Contact Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-links" href="#experience" onClick={()=>setCurrentPage("Recommendations")}>Recommendations</a>
       <About/>
       
      
       
    </div>
  );
  
}

function About(){

  return(
    <div className="Auth-form-container">
        <form className="Auth-form">
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
function Skills(){

const skills = [{Technology:"C Language",Profficiency:"Intermidiate"},{Technology:"C++ Language",Profficiency:"Intermidiate"},{Technology:"Java",Profficiency:"Intermidiate"},{Technology:"React",Profficiency:"Begineer"}]
  return(
     <div className="Auth-form-container">
        <form className="Auth-form">
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
function Experience(){

  const experience = [{Organisation:"UPPCL",DOJ:"02-05-2014",Designation:"EE"}]

  return(
   <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">My Experience</h3>
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

function Contact_me(){

  return(
       <div className="Auth-form-container">
        <form className="Auth-form">
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



function Recommendations(){
let [post, setPost] = useState([]);
  const postComment = () => {
  const name = document.querySelector("#inputname").value;
  const title = document.querySelector("#inputtitle").value;
  const comment = document.querySelector("#inputcomment").value;
   setPost([{name,title,comment}]);
   console.log(post);
  }

  return(
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={postComment}>
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
            <button type="submit" className="btn btn-primary">
              Post Comments
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
                            <td>{skill.name}</td>
                            <td>{skill.title}</td>
                            <td>{skill.comment}</td>
                             

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

export default App;
