import React from 'react';
import User from "../USER/User"
import { connect } from 'react-redux';

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
     return <div>{userList}</div>
        
}
    const mapStateToProps =(state)=> {

     return {
       users: state.users
     }

    }

export default connect(mapStateToProps)(UserList);

