import React, { Fragment, useContext,} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect 
} from "react-router-dom";
import { Outlet,Navigate } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Reset from './pages/reset/Reset';
import Home from "./pages/home/Home";
import AuthContext from "./store/auth-context";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";
import User from "./components/user/User";
import AddUser from "./components/addUser/AddUser";
import UserDetail from "./components/userdetail/UserDetail";
import {useSelector } from "react-redux";

function App() {
  
  
  const login = useSelector((state) => state.table.login);
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
    <Router>
      <Routes>
       <Route element={<PrivateRoutes/>}>
          <Route element={<Home/>} path='/' exact>
          
            {login ? (
          <Route path="/" element={<Navigate to="/dashboard" />} />
        ) : null}
         
             <Route element={<Dashboard/>} path="dashboard" exact/> 
             <Route element={<User/>} path="user" exact/>
             <Route element={<AddUser/>} path="adduser" exact  />
             <Route element={<UserDetail/>} path="userdetail" exact/>
            
          </Route>
        
       </Route>

       <Route element={<Login/>} path="/login" exact/>
       <Route element={<Signup/>} path="/signup" exact/>
       <Route element={<Reset/>} path="/reset" exact/>

      </Routes>
    </Router>

    </Fragment>
  );
}

export default App;
