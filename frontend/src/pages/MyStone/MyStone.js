import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MyStoneList from './MyStoneList';
import MyStoneDetail from './MyStoneDetail';

const MyStone = ({ match }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={match.path} component={MyStoneList} />
        <Route path={`${match.path}/:id`} component={MyStoneDetail}/>
      </Switch>
    </Router>
  );
}

export default MyStone;