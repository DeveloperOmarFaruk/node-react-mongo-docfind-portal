import React from "react";
import useFirebase from "../Hooks/useFirebase";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/MultiComponents/Loading";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = useFirebase();

  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (userInfo.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login" />;
    // state={location.pathname}
  }
};

export default PrivateRoute;
