
import { Fragment,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment>
    
     
      <Router>
    
      <Switch>
      {authCtx.isLoggedIn && (
      <Route exact path="/home" component={Home} />
      )}

      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Signup} />
       
      </Switch>
      </Router>
      

    </Fragment>
  );
}

export default App;
