const initialState = {
users: [] 

}



const usersReducer = (state = initialState, action)=> {
    
    

   switch (action.type) {

       case "ADD_USER":
           return { ...state.users, users: [...state.users, action.payload] }
       
       case "EDIT_USER": 
          const updatedUser = state.users.map (
              (each_user)=> {
                    if (each_user.id === action.user_id) {
                        return {...each_user, ...action.updatedUser}
                    } else {
                        return each_user
                    }
              }
          ) 
             return {...state, users: updatedUser}

       case "DELETE_USER":
    
        let notDeletedUsers = state.users.filter(
            (each_item_in_array)=> {
           
                return each_item_in_array.id !== action.payload
            })

            return {users: notDeletedUsers }

        //With firebase connected you don't need add user, edit user, and delete user.
        // Becuase are reading from firebase, anything we do (edit, add or delete) 
        // with the information from firebase
        // that we are displaying with SET_ALL_USERS on our screen is sent to firebase.
        // Firebase gets what we have done (edit,add or delete) updates their system and
        // sends the information to back to us for us to display with SET_ALL_USERS.
        // So all we are doing now is performing orperations on our app, and reading from
        // from firebase the result of that operation to display on our screens. 
           
      case'SET_ALL_USERS':
    
      return {...state, users: action.payload};
           
        
   
       default:
           return state;
   }

}

export default usersReducer


// The reducer is a function that akes a state and action and updates the store with the updated state based 
// on the action. 


// Go to order and limit data to help you order the data per the time it comes


// who different is the add_data_code to the st all users code?