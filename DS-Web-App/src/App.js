//This is the main app component that contains the routing structure
//of each of the dining halls. When the route is taken, it'll render a DiningHall
//component while passing the corresponding name of the Dining Hall
import React, { Component } from 'react';
import './App.css';
import { FoodPage } from './components/FoodPage'
import { Home } from './components/Home';
import { DiningHall } from './components/DiningHall';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        /*
        Renders the quick nav bar at the top of the page. Also modifies the browser link in the url
        Arguments:
            None
        Returns:
            BrowserRouter that contains the 5 dining halls and their navlinks
        Raises:
            None
        */
        //Renders the routers so that the user can navigate to the different
        //pages for each dining hall
        return (
            <BrowserRouter>
                <Switch>
                    <Route path= "/" component = {Home} exact strict />
                    <Route path = "/9-10" exact render = {() => <DiningHall name="9/10"/>} />
                    <Route path = "/cowell-stevenson" exact render = {() => <DiningHall name="Cowell/Stevenson"/>} />
                    <Route path = "/crown-merrill" exact render = {() => <DiningHall name="Crown/Merrill"/>} />
                    <Route path = "/porter-kresge" exact render = {() => <DiningHall name="Porter/Kresge"/>} />
                    <Route path = "/rcc-oakes" exact render = {() => <DiningHall name="Rachel Carson/Oakes"/>} />
                    <Route path= "/food" component = {FoodPage} exact strict />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
