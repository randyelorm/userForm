import React, { Component } from 'react';
import "./users.css"

class Users extends Component {

   

    render(props) {
        return (
            <div className = "users">
            <h1>{this.props.name}</h1>
              <h2> {this.props.email}</h2>
              <h3>{this.props.gen}</h3>
              
            </div>
        );
    }
}

export default Users;
