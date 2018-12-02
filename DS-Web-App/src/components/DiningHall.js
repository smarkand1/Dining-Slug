//This component dynamically renders the dining hall page and its 
//menu based on what button the user clicked on the user interface
import React from 'react';
import { Listhome } from './../Listhome';
import { Menu } from './Menu';
import { Search } from './Search';
import { Header } from './Header';

export class DiningHall extends React.Component {
    //Renders the entire dining hall page based on what page the user is in
    render(){
        /*
        Renders the menu based on what dining hall page the user is one. Hall code is passed in once the user clicks the nav bar
        9/10 - 0, cowell-stevenson - 1, crown-merrill - 2, porter-kresge - 3, rcc-oakes - 4
        Arguments:
            None
        Returns:
            Component (HTML Div) - HTML div containing the menu. menu changes based on what dining hall page the user navigates to
            Included components: ListHome.js, Search.js, Menu.js
        Raises:
            None
        */
        //Passes the hall code code the menu component so that 
        //we can render the correct menu
        var hall;
        switch(this.props.name){
            case "9/10":
                hall = 0;
                break;
            case "Cowell/Stevenson":
                hall = 1;
                break;
            case "Crown/Merrill":
                hall = 2;
                break;
            case "Porter/Kresge":
                hall = 3;
                break;
            default:
                hall = 4;       
        }

        //Return the rendered component
        return(
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        Dining Slug - {this.props.name}
                        <img class="logo" src ={require('./slug.png')}/>
                    </div>
                    <div className="gradient"></div>
                    <div>
                    <Listhome/>
                    <Header pdfCode = {this.props.name}/>
                    </div>
                    <div>
                    <Search searchWithCode = {hall}/>
                    <Menu hallCode = {hall}/>    
                    </div>
                </header>
          </div>
        );

    }

}
