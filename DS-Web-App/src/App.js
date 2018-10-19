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
          <Route path = "/9-10" exact render = {() => <DiningHall name="9/10"/>} />
          <Route path = "/cowell-stevenson" exact render = {() => <DiningHall name="Cowell/Stevenson"/>} />
          <Route path = "/crown-merrill" exact render = {() => <DiningHall name="Crown/Merill"/>} />
          <Route path = "/porter-kresge" exact render = {() => <DiningHall name="Porter/Kresge"/>} />
          <Route path = "/rcc-oakes" exact render = {() => <DiningHall name="Rachel Carson/Oakes"/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
