import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const PrivateRoutes = () => {
    const authCtx =  useContext(AuthContext);

    console.log('private routes')

    let auth = authCtx.isLoggedIn
    console.log(auth,'test auth')

    return(
        auth ? <Outlet/> : <Navigate to='/login'/>
    )

}

export default PrivateRoutes;