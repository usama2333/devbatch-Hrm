
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';


function App() {
  return (
    <Fragment>
    
     
      <Router>
     

      <Switch>
      <Route exact path="/home" component={Home} />

      <Route exact path="/login" component={Login} />
      
      <Route exact path="/" component={Signup} />
      </Switch>
      </Router>
      

    </Fragment>
  );
}

export default App;
