import React, { Component } from 'react';
import './App.css';
import { Home } from './components/Home';
import { DiningHall } from './components/DiningHall';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component = {Home} exact strict />
          <Route path = "/9-10" exact component = {DiningHall} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
