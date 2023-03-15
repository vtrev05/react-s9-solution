import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";


const MyAccount = () => {
  const authInfo = React.useContext(AuthContext);
  return (
    <div className="page my-account">
      {authInfo && authInfo.isLoggedIn ? (
        <>
          <h1>MyAccount</h1>
          <p>Bienvenido a tu cuenta (USUARIO)</p>
        </>
      ) : (
        <Navigate to="/login" replace={true}></Navigate>
      )}
    </div>
  );
};
export default MyAccount;
