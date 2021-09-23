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
           
      case'SET_ALL_USERS':
      console.log(action.payload)
      return {...state, users: action.payload};
           
        
   
       default:
           return state;
   }

}

export default usersReducer


// The reducer is a function that akes a state and action and updates the store with the updated state based 
// on the action. 