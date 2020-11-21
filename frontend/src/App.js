import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StartPage from './pages/HomePage/StartPage';
import LandingPage from './pages/landingpage/LandingPage';
import MyStoneList from './pages/MyStone/MyStoneList';
import LoginPage from './pages/Sign/LoginPage';
import SignupPage from './pages/Sign/SignupPage';


const App = () => {
  return (
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route exact path="/start" component={StartPage} />
          <Route exact path='/mystone' component={MyStoneList}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={SignupPage}/>

        </Switch>
    </Router>
  );
}

export default App;