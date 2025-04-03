import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ component: Component,adminOnly, ...rest }) => {

  const token = Cookies.get("token");
  if (!token) {
    return <Redirect to="/" />;
  }
  try {
    const decoded = jwtDecode(token);
    const isAdmin = decoded.Role === true; 

    if (adminOnly && !isAdmin) {
      return <Redirect to="/HomeLogin" />; 
    }
  
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } catch (error) {
    return <Redirect to="/" />;
  }
};
export default PrivateRoute;
