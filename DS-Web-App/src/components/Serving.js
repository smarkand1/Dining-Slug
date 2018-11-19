//This component redners the currently serving based on the time
import React from 'react';
import './Serving.css';

export class Serving extends React.Component {
    constructor(props){
        super(props);
    }
    
    findTimes() {
        //get the system time
        var d = new Date();
        var currTime = d.getHours() * 100 + d.getMinutes();
        var day = d.getDay();
        console.log(day)
        console.log(currTime)
        //determine whats being served
        switch(day){
            case 0:
            case 6:
                if(630 < currTime && currTime <= 1000){
                    return (<div className="open">Breakfast</div>);
                }
                else if(1000 < currTime && currTime <= 1400){
                    return (<div className="open">Brunch</div>);
                }
                else if(1400 < currTime && currTime <= 1700){
                    return (<div className="open">Limited Options</div>);
                }
                else if(1700 < currTime && currTime <= 2000){
                    return (<div className="open">Dinner</div>);
                }
                else if(2000 < currTime && currTime <= 2300){
                    return (<div className="open">Late Night</div>);
                }
                else{
                    return (<div className="closed">Closed</div>);
                } 
            default:
                if(630 < currTime && currTime <= 1130){
                    return (<div className="open">Breakfast</div>);
                }
                else if(1130 < currTime && currTime <= 1400){
                    return (<div className="open">Lunch</div>);
                }
                else if(1400 < currTime && currTime <= 1700){
                    return (<div className="open">Limited Options</div>);
                }
                else if(1700 < currTime && currTime <= 2000){
                    return (<div className="open">Dinner</div>);
                }
                else if(2000 < currTime && currTime <= 2300){
                    return (<div className="open">Late Night</div>);
                }
                else{
                    return (<div className="closed">Closed</div>);
                } 
        }
    }

    //Renders the appropriate meal time
    render(){
        //Return the rendered component
        return(
            this.findTimes()
        );
    }
}