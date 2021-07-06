import React, { Component } from 'react';
import "./form.css"



class UsersForm extends Component {

    constructor (props) {
        super (props)  
        
        this.state = {

            name : "",
            email: "",
            gen: ""
    
        }
        
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)

       this.setState( 
           this.state = {
            name : "",
            email: "",
            gen: ""
        }
        )
    }
   



    render() {
        return (
            <form onSubmit ={this.handleSubmit} className ="classForm-section">
            
            <label htmlFor=""> Name
             <input type="text" value = {this.state.name} name = "name" onChange = {this.handleChange} required ="required" /> 
             </label>
             <br/>
             <br />

           
             <label htmlFor=""> Email
             <input type="email" value ={this.state.email} name = "email" onChange = {this.handleChange} required ="required" /> 
             </label>
             <br/>
             <br />


             <label htmlFor=""> Gen
             <input type="number" value = {this.state.gen} name = "gen" onChange = {this.handleChange} required ="required"/> 
             </label>
             <br/>
             <br />

             <input className= "submit-btn "  type="submit" />

            </form>
        );
    }
}

export default UsersForm;
