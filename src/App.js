import React, { Component } from 'react';
import "./App.css"
import Signup from './components/PAGES/SIGN-UP/SignUp';
import Login from "./components/LOGIN/Login"
import UsersForm from "./components/USERSFORM/UsersForm"
import UserList from "./components/USERLIST/UserList"
import Router from "../src/components/Router"


class App extends Component {
  
   

  render() {
    return (
   
       <div>
       <Router/>
       </div>
    
    );
  }
}

export default App;
