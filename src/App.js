import React, { Component } from 'react';
import "./App.css"
import UsersForm from "./components/USERSFORM/UsersForm"
import UserList from "./components/USERLIST/UserList"

class App extends Component {
  constructor (props) 
    {
        super (props)

        this.state = {

           users : [] 
        }
    }

    handleAddUser = (newUser)=> {
          newUser.id = Math.random().toString();
          this.setState({
            users: [...this.state.users, newUser]
          })
    }

    handleDeleteUser =(userId)=> {
      const savedusers = this.state.users.filter(
            (user)=>{
               return user.id !==userId;
            })
            this.setState({users: savedusers})
    }

    handleEditUser = (updatedUser) => {
      this.setState({
        users: this.state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        ),
      });
    };


  render() {
    return (
      <div>
       <UsersForm addUser = {this.handleAddUser}/>
       <UserList
          users={this.state.users}
          deleteUser = {this.handleDeleteUser}
          editUser = {this.handleEditUser}
       
       />
  
      </div>
    );
  }
}

export default App;
