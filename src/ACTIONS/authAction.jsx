
// Actions To sign in with email

export const registerWithEmail = (email, password, replace)=> {  // replace is from react router dom
    return (dispatch, state, {getFirebase})=> {

let firebase = getFirebase()
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    
  
    console.log(user)
 
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error)
    // ...
  });
    }
}  


// Actions to sign in with google (gmail)

export const loginWithGoogle = ()=> {
    return( dispatch, state, {getFirebase})=> {

        const firebase = getFirebase()
        var provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }

}




// Login Action for already signed in (only for email)

export const loginWIthEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          alert(error)
        });
    };
  }; 
 




// Actions for log out.

export const logout = () => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signOut()
      .then(() => {
        console.log(firebase.auth().signOut())
      })
      .catch((error) => {
        alert ("error")
      });
    }; 
  };


