import React from "react";
import { Redirect, Route } from "react-router-dom";
import ReactLoading from "react-loading";

const ProtectedRoute = ({
  onFailureRedirectToPath = "/login",
  isLoading,
  user,
  ...rest
}) => {
  return isLoading ? (
    // loading animation component
    <ReactLoading color="red" height={500} width={500} type="bars"/>
  ) : user ? (
    <Route {...rest} />
  ) : (
    <Redirect to={onFailureRedirectToPath} />
  );
};

export default ProtectedRoute;
