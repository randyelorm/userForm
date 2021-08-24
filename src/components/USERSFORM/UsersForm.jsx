import React, { Component } from 'react';
import "./form.css";

import { addUser } from '../../ACTIONS/UserAction'
import { connect } from 'react-redux';



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
   



    render() {
        return (
            <form onSubmit ={this.handleSubmit} className ="classForm-section">
            
            <label htmlFor=""> Name
             <input 
             type="text" 
              value = {this.state.name} 
              name = "name" 
              onChange = {this.handleChange} 
              required ="required" /> 
             </label>
             <br/>
             <br />

           
             <label htmlFor=""> Email
             <input
              type="email"
               value ={this.state.email} 
               name = "email" 
               onChange = {this.handleChange}
                required ="required" /> 
             </label>
             <br/>
             <br />


             <label htmlFor=""> Number
             <input
              type="number" 
             value = {this.state.number} 
             name = "number" 
             onChange = {this.handleChange} 
             required ="required"/> 
             </label>
             <br/>
             <br />

             <input className= "submit-btn "  type="submit" />

            </form>
        );
    }
}

const mapDispatchToProps = {
    addNewUser: addUser
}

export default connect(null, mapDispatchToProps) (UsersForm);
