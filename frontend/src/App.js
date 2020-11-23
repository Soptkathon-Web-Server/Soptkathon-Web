import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StartPage from './pages/HomePage/StartPage';
import LandingPage from './pages/landingpage/LandingPage';
import MyStoneList from './pages/MyStone/MyPage';
import LoginPage from './pages/Sign/LoginPage';
import SignupPage from './pages/Sign/SignupPage';
import ModalPage from './pages/MyStone/Popup'

const App = () => {
  return (
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route exact path="/start" component={StartPage} />
          <Route exact path='/mystone' component={MyStoneList}/>
          <Route exact path='/mystone/modal' component={ModalPage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={SignupPage}/>
          <Route exact path='/popup' component={Popup}/>
        </Switch>
    </Router>
  );
}

export default App;