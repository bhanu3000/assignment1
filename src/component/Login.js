
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }


const mySignUp = async(e)=>{
 
  e.preventDefault();
  const inputsapid = document.querySelector("#inputsapid").value;
  const inputpassword = document.querySelector("#inputpassword").value;
  const inputfirstname = document.querySelector("#inputfirstname").value;
  const inputlastname = document.querySelector("#inputlastname").value;
  const inputemail = document.querySelector("#inputemail").value;
  const inputdesignation = document.querySelector("#inputdesignation").value;
  const inputcurrentpostingaddress = document.querySelector("#inputcurrentpostingaddress").value;
  const inputreportingofficersapid = document.querySelector("#inputreportingofficersapid").value;
   console.log(inputsapid + "   " +inputfirstname+ "   "+inputlastname+"         "+ inputemail+"     "+inputdesignation+ "     "+inputreportingofficersapid);
  
   try{
    const response = await axios({
    method: 'post',
    url: "http://localhost:8080/signUp/",
  params: {inputsapid,inputpassword,inputfirstname,inputlastname,inputemail,inputdesignation,inputcurrentpostingaddress,inputreportingofficersapid},
       
    
   });
   
 
  
  } catch (err) {
    console.log(err);
  }
 };
 

const navigate = useNavigate();
const myLogin = async(e)=>{
 
    
  e.preventDefault();
  const inputloginsapid = document.querySelector("#inputloginsapid").value;
  const inputloginpassword = document.querySelector("#inputloginpassword").value;
 console.log(inputloginsapid+"   "+inputloginpassword);
   try{
   const response = await axios({
    method: 'get',
    url: "http://localhost:8080/login/",
    params: {inputloginsapid},
   });
   
 
  
   if(inputloginpassword === response.data.user.Password )
   {
       alert("Welcome User");
       localStorage.setItem("sapid" , inputloginsapid);
       navigate("/about");
      
   }
   else{
    alert("Username/Password is wrong please check");
   }
  } catch (err) {
    console.log(err);
  }
 };
 
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form"  onSubmit = {myLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>SAPID</label>
              <input
                type="text"
                className="form-control mt-1"
                id="inputloginsapid"
                placeholder="Enter email/SAPID"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                id="inputloginpassword"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit = {mySignUp}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>SAP ID</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputsapid"
              placeholder="SAP ID"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="inputpassword"
              placeholder="Password"
            />
          </div>


          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputfirstname"
              placeholder="First Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputlastname"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="inputemail"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Designation</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputdesignation"
              placeholder="Designation"
            />
          </div>
          <div className="form-group mt-3">
            <label>Current Posting Office</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputcurrentpostingaddress"
              placeholder="Current Posting Office"
            />
          </div>

           <div className="form-group mt-3">
            <label>Reporting Officer SAP ID</label>
            <input
              type="text"
              className="form-control mt-1"
              id="inputreportingofficersapid"
              placeholder="Reporting Officer SAP ID"
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
  )
}