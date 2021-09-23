export const ADD_USER = "ADD_USER"
export const EDIT_USER = "EDIT_USER"
export const DELETE_USER = "DELETE_USER"

export const addUser = (user) => {
  
    user.id = Math.random().toString();

      // return {
    //     type: "ADD_CONTACT",
    //     payload: contact
    // }
    

    return(dispatch,state,{getFirestore})=>{

      getFirestore().collection("users").add(user).then(
          (docs)=> {
             console.log(docs)
          }
      )


      


    }

    
}

export const EditUser = (user_id, updatedUser)=> {
    updatedUser.id = Math.random().toString();
  
    return {
        type: EDIT_USER,
        user_id : user_id,
        updatedUser : updatedUser
    }
   
    
}


export const DeleteUser = (id) => {
    
    return {
        type: DELETE_USER,
         payload: id
      }
   
    
}


export const getAllusers =()=> {
    return(dispatch, state,{getFirestore})=> {
        getFirestore().collection("users").onSnapshot(
            (snapshot)=> {
                let users = []
                snapshot.forEach(
                    (doc)=> {
                        users.push(doc.data())
                        console.log(doc.data())
                    }
                )


                dispatch(
                    {
                        type: "SET_ALL_USERS",
                        payload: users
                    }
                )
            }
        )

    }
}
