import React, { Component } from 'react';
import "./App.css"
import UsersForm from "./components/USERSFORM/UsersForm"
import UserList from "./components/USERLIST/UserList"

class App extends Component {
  
   

  render() {
    return (
      <div>
       <UsersForm/>
       <UserList />
  
      </div>
    );
  }
}

export default App;
