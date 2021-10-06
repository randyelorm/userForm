import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import "./Sign-up.css";
import dancegif from "../../../Images/dance2.gif"
import {registerWithEmail, loginWithGoogle } from "../../../ACTIONS/authAction";

import googlelogo from "../../../Images/google-logo.png"

const Signup = (props) => {

  if(!props.auth.isLoaded) return null
     
  if(props.auth.uid) props.history.push("/")


 const handleSubmit = (e)=> {
     e.preventDefault()
      let email = e.target.elements.email.value // to get user input.
      let password = e.target.elements.password.value
      props.registerWithEmail(email,password)

      
    

      
  }

 



    return (
        <>
<div className = "sign-up-box">

      

<div className = "sign-up-body" >


        <Form onSubmit = {handleSubmit}>
            <br />
            <h2>Students Scholarship Admin <span className = "sign-in">SIGN-UP</span></h2> <br />
   
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name = "email" className ="userForm-input" placeholder="Enter email" required = "required"  />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className ="userForm-input"  placeholder="Password" name = "password" required = "required" />
            </Form.Group>
           
          <Button variant="secondary" type="submit">
          Sign-up with email <i class="fas fa-user-plus"></i>
            </Button>
              <br/>
              <br/>
            <Button  className = "google-btn" onClick = {props.loginWithGoogle}>
            <img src={googlelogo} className ="userForm-input"  className = "google-logo" alt="" /> Or Sign-up with Google 
            </Button>
      
          <br />
          <br/>
          <h4>Already have an account?</h4>
          
          <Link to = "/login">
          <Button variant="primary" className = "login-btn"> Login  <i class="fas fa-sign-in-alt"></i></Button>
          </Link>
        
         </Form>

        </div>

        <div className = "sign-bottom">
          <img src={dancegif} className ="dance-gif" alt="" />
        </div>
        

        
       
</div> 

  

        
        </>
    );
}

const mapStateToProps = (state)=> {
  return {
      auth:state.firebase.auth
  }
}

const mapDispatchToProps = {
  registerWithEmail, 
  loginWithGoogle
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
