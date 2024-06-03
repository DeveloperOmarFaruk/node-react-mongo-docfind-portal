import React from "react";
import useFirebase from "../Hooks/useFirebase";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/MultiComponents/Loading";
import useFunction from "../Hooks/useFunction";

const AdminRoute = ({ children }) => {
  const { userInfo, loading } = useFirebase();
  const { admin } = useFunction();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (userInfo.email === "admin@admin.com") {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/" />;
  }

  // if (userInfo.email && admin) {
  //   return children;
  // } else {
  //   return <Navigate state={location.pathname} to="/" />;
  // }
};

export default AdminRoute;
