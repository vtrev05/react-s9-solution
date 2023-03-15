import React from "react";
import { AuthContext } from "../App";


const Login = () => {
  const authInfo = React.useContext(AuthContext);

  return (
    <>
    {authInfo.isLoggedIn ? (
      <>
       <div>Logado</div>
      <button onClick={()=> authInfo.logout()}>LOGOUT</button>
      
      </>
    ) : (
      <>
     <div>No logado</div>
      <button onClick={()=> authInfo.login()}>LOG IN</button>
      </>
    )}
   
   </>
  );
};
export default Login;
