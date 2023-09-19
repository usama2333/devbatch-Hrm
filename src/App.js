import { Fragment, useContext,useEffect,useLayoutEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Reset from './pages/reset/Reset';
import Home from "./pages/home/Home";
import AuthContext from "./store/auth-context";
import Error from "./pages/error/Error";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
    <Router>
      <Routes>
       <Route element={<PrivateRoutes/>}>
          <Route element={<Home/>} path="/home" exact/>
       </Route>

       <Route element={<Login/>} path="/login" exact/>
       <Route element={<Signup/>} path="/" exact/>
       <Route element={<Reset/>} path="/reset" exact/>

      </Routes>
    </Router>

    </Fragment>
  );
}

export default App;
