import React, { Component } from 'react';
import "./App.css"
import UsersForm from "./components/USERSFORM/UsersForm"
import UserList from "./components/USERLIST/UserList"

class App extends Component {
  
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
       <UserList />
  
      </div>
    );
  }
}

export default App;
