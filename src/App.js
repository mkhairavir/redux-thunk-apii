import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Mockapi from './Pages/Mockapi'
import JsonP from './Pages/JsonP'
import Header from './Component/Header'
import FoodApi from './Pages/FoodApi'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Mockapi />
          </Route>
          <Route path="/jsonp">
            <JsonP />
          </Route>
          <Route path="/foodapi">
            <FoodApi />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
