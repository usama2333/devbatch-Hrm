import { Outlet,Navigate } from "react-router-dom";
import { useContext,useEffect,useState } from "react";
import AuthContext from "../store/auth-context";
import {useSelector } from "react-redux";

const PrivateRoutes = () => {
    

    const login = useSelector((state) => state.table.login);
    const authCtx =  useContext(AuthContext);
    
    return(
        login ? <Outlet/> : <Navigate to='/login'/>
        // true ? <Outlet/> : <Navigate to='/login'/>
    )

}

export default PrivateRoutes;