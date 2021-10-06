
import React from "react";
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import PrivateRoute from "../ProtectedRoute";
import Home from "../components/PAGES/HOME/Home";
import Signup from "./PAGES/SIGN-UP/SignUp";
import Login from "../components/LOGIN/Login"


function Router() {
  return (
    <BrowserRouter>
      {/* <NavLink to="/">Home</NavLink> */}

      <PrivateRoute exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path = "/login"component ={Login} />
    </BrowserRouter>
  );
}

export default Router;