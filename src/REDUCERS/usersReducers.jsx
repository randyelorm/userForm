const initialState = {
users: [] 

}



const usersReducer = (state = initialState, action)=> {

   switch (action.type) {
       case "ADD_USER":
           return { ...state.users, users: [...state.users, action.payload] }
        
   
       default:
           return state;
   }

}

export default usersReducer


// The reducer is a function that akes a state and action and updates the store with the updated state based 
// on the action. 