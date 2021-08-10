import {createStore} from "redux"
import usersReducer from "../REDUCERS/usersReducers"

const Store = createStore(usersReducer)

export default Store