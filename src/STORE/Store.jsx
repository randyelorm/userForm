import {createStore, compose, applyMiddleware} from "redux"
import usersReducer from "../REDUCERS/usersReducers"
import {getFirebase, reactReduxFirebase,} from "react-redux-firebase"
import {getFirestore, reduxFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import firebase from '../components/FIREBASE/Config'
// import firestore from '../components/FIREBASE/Config'

const Store = createStore(usersReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)

    ))

export default Store
