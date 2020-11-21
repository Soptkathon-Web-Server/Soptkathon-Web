import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import MyStone from './pages/MyStone/MyStone';


const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/my-stone" component={MyStone} />
        </Switch>
    </Router>
  );
}

export default App;