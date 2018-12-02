//Renders the home page of the website
import React from 'react';
import { HomeNav } from './HomeNav';
import { Search } from './Search';
import { Serving } from './Serving';
import '../App.css'

export class Home extends React.Component {
    render() {
        /*
        Renders the entire home page for the website with buttons to go to each dining hall. Each button contains information
        about the dining hall including the activity, name, and ratings
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the home page rendering. Components: Search.js, Serving.js, HomeNav.js
        Raises:
            None
        */
        return(
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        Dining Slug
                        <img class="logo" src ={require('./slug.png')}/>
                    </div>
                    <div className="gradient"></div>
                    <div className="topBar">
                        <div className="searchItem">
                            <Search searchWithCode = {5}/>
                        </div>
                        <div className="serving">
                            Currently Serving:  <Serving/>
                        </div>
                    </div>
                    <HomeNav/>
                </header>
                <body>
                </body>
            </div>
        );
    }
}

