import React, { Component } from 'react';
import Users from "./components/USERS/Users"
import UsersForm from "./components/USERSFORM/UsersForm"

class App extends Component {
  constructor (props) 
    {
        super (props)

        this.state = {

           users : [ 
            
              // { 
              //   name : "Randy",
              //   email: "randy@gmail",
              //   gen: 18,
              // },

              // { 
              //   name : "Elorm",
              //   email: "elorm@gmail",
              //   gen: 19,
              // },

              // { 
              //   name : "Davoh",
              //   email: "davoh@gmail.com",
              //   gen: 30,
              // },

          ] 
        }
    }

    handleAddUser = (newUser)=> {
          this.setState({
            users: [...this.state.users, newUser]
          })
    }


  render() {
    return (
      <div>
       <UsersForm addUser = {this.handleAddUser}/>
       {this.state.users.map (
          (item, index) => {
            return (
              <div>
             <Users name={item.name} email ={item.email} gen = {item.gen}/>
             
              </div>
            )
          }
       )}
  
      </div>
    );
  }
}

export default App;
