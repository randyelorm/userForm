import React from 'react';
import User from "../USER/User"
import { connect } from 'react-redux';
import "./userlist.css"

const UserList = ({users}) => {

    const userList = users.map (
        (each_user_in_store) => {
          return (
            
           <User 
           key = {each_user_in_store.id}
           each_user_in_store ={each_user_in_store}  
           />
           
          )
        }
     )
     return <div class ="users-container">
     
       <h3 className = "text-center">ALL APPLICANTS</h3>
     <span  className = "all-users">{userList}</span>  
       </div>
        
}
    const mapStateToProps =(state)=> {

     return {
       users: state.user.users
     }

    }

export default connect(mapStateToProps)(UserList);

