//This component renders how busy the dining hall is based on google's popular times
import React from 'react';
import '../App.css';
import { Capacity } from "./Capacity";
/*import PDFNine from "../Hours/HoursNine.pdf";
import PDFCowell from "../Hours/HoursCowell.pdf";
import PDFCrown from "../Hours/HoursCrown.pdf";
import PDFPorter from "../Hours/HoursPorter.pdf";
import PDFRCC from "../Hours/HoursRCC.pdf";*/

export class Header extends React.Component {
    constructor(props){
        super(props);
    }

    //Renders specific information based on what dining hall page the user is on
    render(){
        /*
        Returns a component that lists how busy a specific dining hall is
        Arguments:
            None
        Returns:
            Activity (HTML Div) - an html div with inline styling. 
            Return possiblities are: Busy, Moderate, Not Busy, Not Available, Closed
        Raises:
            None
        */
        var PDF;
        //We'll need to pass this hall code code the menu component so that 
        //we can render the correct information
        switch(this.props.pdfCode){
            case "9/10":
                PDF = "/Hours/HoursNine.pdf";
                break;
            case "Cowell/Stevenson":
                PDF = "/Hours/HoursCowell.pdf";
                break;
            case "Crown/Merrill":
                PDF = "/Hours/HoursCrown.pdf";
                break;
            case "Porter/Kresge":
                PDF = "/Hours/HoursPorter.pdf";
                break;
            default:
                PDF = "/Hours/HoursRCC.pdf";       
        }
        //Return the rendered component
        return(
            <div>
                <div className="activityHeader">
                    Activity: <Capacity hall={this.props.pdfCode}/>
                </div>
                <div class="PDF">
                    <a href={PDF} target="_blank"><u>Weekly Hours</u></a>
                </div>
            </div>
        );
    }
}