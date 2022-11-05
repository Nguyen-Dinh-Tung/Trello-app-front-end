import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useRef } from "react";

let check;

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  console.log(
    "🚀 ~ file: PrivateRoutes.js ~ line 8 ~ PrivateRoutes ~ token",
    token
  );
  if (token === null) {
    check = false;
  } else {
    check = true;
  }
  console.log(check);

  return check ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
