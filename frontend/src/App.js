import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StartPage from './pages/HomePage/StartPage';
import LandingPage from './pages/landingpage/LandingPage';


const App = () => {
  return (
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route exact path="/start" component={StartPage} />

        </Switch>
    </Router>
  );
}

export default App;