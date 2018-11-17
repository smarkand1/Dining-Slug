//This renders the now v o i d home component. 
//Im not sure what we're gonna use to fill up the space,
//most likely the list interface that was proposed on Sunday
//(I think i have a picture of it idk)
import React from 'react';
import { HomeNav } from './HomeNav';
import { Search } from './Search';
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
                    <div className="searchItem">
                        <Search/> 
                    </div>
                    <HomeNav/>
                </header>
                <body>
                </body>
            </div>
        );
    }
}

