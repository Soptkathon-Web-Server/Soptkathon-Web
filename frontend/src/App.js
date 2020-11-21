import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import StartPage from './pages/HomePage/StartPage';


const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/start" component={StartPage} />
        </Switch>
    </Router>
  );
}

export default App;