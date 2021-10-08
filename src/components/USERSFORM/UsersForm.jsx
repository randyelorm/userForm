import React, { Component } from 'react';
import "./form.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addUser, getAllusers } from '../../ACTIONS/UserAction'
import { connect } from 'react-redux';
import {logout} from "../../ACTIONS/authAction"



class UsersForm extends Component {

    constructor (props) {
        super (props)  
        
        this.state = {

            name : "",
            email: "",
            number: ""
    
        }
        
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
     
        this.props.addNewUser(this.state)
       

       this.setState( 
           this.state = {
            name : "",
            email: "",
            number: ""
        }
        )
    }


    componentDidMount(){
        this.props.getAllusers()
    }

    render() {
        return (
            <>
           
            {/* <button style ={{float:"right"}}>Logout</button> */}
            <Form onSubmit ={this.handleSubmit} className = "user-form">
            
           <h3> ENTER APPLICANTS INFORMATION</h3> 
            <Form.Group className="mb-3" controlId="">
                <Form.Label className = "form-label">Name</Form.Label>
                <Form.Control type="text" 
                 name = "name"  
                 value = {this.state.name}  
                 placeholder="Enter Fullname"
                 onChange = {this.handleChange} 
                 required ="required" 
                 className = "form-input" 
                 
                 />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className = "form-label">Email</Form.Label>
                <Form.Control type="email" 
                 name = "email"  
                 value = {this.state.email}  
                 placeholder="Enter Email"
                 onChange = {this.handleChange} 
                 required ="required"
                 className = "form-input" 
                 
                 />
            </Form.Group>


            <Form.Group className="mb-3" controlId="">
                <Form.Label className = "form-label">Contact</Form.Label>
                <Form.Control type="number" 
                 name = "number"  
                 value = {this.state.number}  
                 placeholder="Enter Contact"
                 onChange = {this.handleChange} 
                 required ="required" 
                 className = "form-input" 
                 
                 />
            </Form.Group>


           
           
        <Button variant="primary" type="submit">
             Submit <i class="fas fa-plus"></i>
            </Button>


       <Button
       variant="secondary" 
       className ="logout-btn"
        onClick = { this.props.logout}
       >
         Logout  <i class="fas fa-reply"></i>
         </Button>
      
     
       
         </Form>
      
            </>
        );
    }
}

const mapDispatchToProps = {
    addNewUser: addUser,
    getAllusers:getAllusers,
    logout:logout
}

export default connect(null, mapDispatchToProps) (UsersForm);
