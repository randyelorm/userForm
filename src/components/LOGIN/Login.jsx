import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import googlelogo from "../../Images/google-logo.png"
import "./Login.css"
import { connect } from 'react-redux';
import { Link} from "react-router-dom";
import {loginWIthEmail, loginWithGoogle } from "../../ACTIONS/authAction"

import loginImg from "../../Images/login.gif"


const Login = (props) => {
   
    if(!props.auth.isLoaded) return <h1>Loading Page</h1>
     
    if(props.auth.uid) props.history.push("/")

    const handleSubmit = (e)=> {
        e.preventDefault()
         let email = e.target.elements.email.value // to get user input.
         let password = e.target.elements.password.value
         props.loginWIthEmail(email,password)
    
       
   
         
     }
    return (
        <>
 <div className = "log-in-container">
            <Form className = "log-in-form" onSubmit = {handleSubmit}>
          
            <h2 >Students Scholarship Admin<span className ="login"> Login Page</span> </h2> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name = "email" className = "login-form-input" required = "required" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name = "password" className = "login-form-input" required = "required"  />
            </Form.Group>
           
     
          <Button variant="primary" className = "login-btn" type="submit">
               Login <i class="fas fa-sign-in-alt"></i>
            </Button>
            <br/>
            <Button  className = "google-btn" onClick = {props.loginWithGoogle}>
            <img src={googlelogo} className ="userForm-input"  className = "google-logo" alt="" /> Or Login With Google 
            </Button>
            <br/>
            <br/>
            <h3>Don't have an account yet?</h3>
            <Link to = "/signup">
            <Button variant="secondary" className = "sign-up-btn-in-login" type="submit">
               Sign Up <i class="fas fa-user-plus"></i>
            </Button>
            </Link>

           
         
         </Form>

            <img src={loginImg} className = "login-img" alt="" />
            
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
    loginWIthEmail,
    loginWithGoogle
}

export default  connect(mapStateToProps, mapDispatchToProps)(Login);
