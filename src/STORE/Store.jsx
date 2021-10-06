import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import usersReducer from "../REDUCERS/usersReducers"
import {firebaseReducer, getFirebase, reactReduxFirebase,} from "react-redux-firebase"
import {getFirestore, reduxFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import firebase from '../components/FIREBASE/Config'
// import authReducer from "../Reducers/authReducer";

let reducers = combineReducers({
    user : usersReducer,
    firebase: firebaseReducer,
})

const Store = createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)

    ))

export default Store

