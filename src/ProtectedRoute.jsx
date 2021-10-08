import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  if (!auth.isLoaded) return <h1>Loading page</h1>  // if page is not loaded yet return null
 
  if (auth.uid) {
    return (
      <Route
      {...rest}
      render = {(props)=> {
        return <Component {...props} />
      }
    }/>
    );
  }

  return (
    <Route
    {...rest}
    render = {(props)=> {
      return <Redirect to ={{ pathname :"/login" }} />
    }
  }/>
  );
 
};
const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(PrivateRoute);




