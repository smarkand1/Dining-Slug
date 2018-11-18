//Renders the home page of the website
import React from 'react';
import { HomeNav } from './HomeNav';
import { Search } from './Search';
import { Serving } from './Serving';
import './Home.css'

export class Home extends React.Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        Dining Slug
                        <img src ={require('./slug.png')}/>
                    </div>
                    <div className="gradient"></div>
                    <div className="topBar">
                        /*<div className="searchItem">
                            <Search />
                        </div>*/
                        <div className="serving">
                            Currently Serving: 
                        </div>
                        <div className="serving">
                            <Serving/>
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

