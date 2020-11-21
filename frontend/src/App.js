import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Sign/LoginPage';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
    </Router>
  );
}

export default App;