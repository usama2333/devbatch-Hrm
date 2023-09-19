import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const PrivateRoutes = () => {
    const authCtx =  useContext(AuthContext);
    const auth = authCtx.isLoggedIn

    return(
        auth ? <Outlet/> : <Navigate to='/login'/>
    )

}

export default PrivateRoutes;