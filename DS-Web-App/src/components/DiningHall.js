//This component dynamically renders the dining hall page and its 
//menu based on what button the user clicked on the user interface
import React from 'react';
import { Listhome } from './../Listhome';
import { Menu } from './Menu';
import { Search } from './Search';


//Now all we need to do here is grab the information from the server on what the dining halls are serving
export class DiningHall extends React.Component {
    //Renders the entire dining hall page based on what page the user 
    //is in
    render(){
        var hall;
        //We'll need to pass this hall code code the menu component so that 
        //we can render the correct menu
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
                        {this.props.name}
                        <img src ={require('./slug.png')}/>
                    </div>
                    <div className="gradient"></div>
                    <Listhome/>
                    <Search/>
                    <Menu hallCode = {hall}/>    
                </header>
          </div>
        );

    }

}
