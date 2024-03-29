import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { tableActions } from "../store/table";
import Swal from 'sweetalert2';
const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email: '',
  name:'',
});

export const AuthContextProvider = (props) => {
  const dispatch = useDispatch();


    const initialToken = localStorage.getItem('token');

    const [token, setToken] = useState(initialToken);
  
    const userIsLoggedIn = !!token;
    dispatch(tableActions.setLogin(userIsLoggedIn));
    
    const logoutHandler = () => {
       setToken(null);
       localStorage.removeItem('token');
       Swal.fire(
        'Logged out!',
        'See you soon',
        'success'
      )
       console.log('token is removed from local storage');
    };
  
    const loginHandler = (token, email,name,id) => {
     setToken(token);
     localStorage.setItem('token' , token);
     console.log('Data is found');
     console.log(token);
    };

  
    const contextValue = {
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
    };

    useEffect(() => {
       console.log(userIsLoggedIn,'log state')
    } , [userIsLoggedIn])
  
    return (
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;