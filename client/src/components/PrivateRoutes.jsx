import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
  const currentUser = false;
  return <>{currentUser ? <Outlet /> : <Navigate to={"signin"} />}</>;
};

export default PrivateRoutes;
