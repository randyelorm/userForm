

export const addUser = (user) => {
  
    // user.id = Math.random().toString();

      // return {
    //     type: "ADD_CONTACT",
    //     payload: contact
    // }
    

    return(dispatch,state,{getFirestore})=>{

      getFirestore().collection("users")
      .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then(
          (docs)=> {
            //  console.log(docs)
          }
      )
      


    }

    
}

export const EditUser = (updatedUser)=> {
 return (dispatch, state, {getFirestore})=> {
    
        getFirestore().collection("users").doc(updatedUser.id).update(updatedUser)
       
        .then(
            ()=> {
                console.log("Document Successfuly updated")
            }
        )
        .catch(
            (error)=> {
                console.error("Error removing document.", error);
            }
        )

    }

       
    // return {
    //     type: EDIT_USER,
    //     user_id : user_id,
    //     updatedUser : updatedUser
    // }


   
    // doc is allows you to get a particular document and you need to pass in a particular id.
    // If you use set with an id it's updating. 
}


export const DeleteUser = (id) => {

    return (dispatch, state, {getFirestore})=> {
        getFirestore().collection("users").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

     // return {
    //     type: DELETE_USER,
    //      payload: id
    //   }

     
    
}



export const getAllusers =()=> {
    return(dispatch, state,{getFirestore})=> {
        getFirestore().collection("users").orderBy("timestamp", "desc")
        .onSnapshot(
            (snapshot)=> {
                let users = []
                snapshot.forEach(
                    (doc)=> {
                        users.push({...doc.data(),id:doc.id }) // Adding id from firebase that gets added when we add the user
                       
                       
                    }
                )


                dispatch(
                   
                    {
                        type: "SET_ALL_USERS",
                        payload: users,
                       
                    }
                )
              
            }
        )

    }
}

// Why did we choose this particular code from firebase?
// Codes don't match exactly as they are in the documentation. Why is that?
// dispatch and state parameters are not always used. But when we take it off, the
// code breaks. 