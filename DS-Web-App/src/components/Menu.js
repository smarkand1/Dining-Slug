//Listing page for all menus, THIS IS called in DiningHall.js
import React from 'react'
     
export class Menu extends React.Component { 
    constructor(props){
      super(props);
       this.state={ recipes :[] } 
    }

    //Grab the array of JSON objects from the text file
    componentWillMount(){
      this.setState({
        recipes : require('./menu-ui')
      });
    } 

    //Render the menu list
    renderList =() =>{
        //Determine which JSON objecy to look at based on what the user clicked
        let model = this.state.recipes[this.props.hallCode];
        let title = model.Title; //Dining hall title
        let menu = model.Menu;   //Dining hall menu, which is an array of more objects

        //Render the menu
        let menuUI = menu.map((indMenu) => {
          let time = indMenu.Title; //Breakfast/lunch/Dinner/Late Night
          let foodArr = indMenu.Food; //Array of food items for the given time
          // Here we're gonna need to figure out how to separate the food lists so that
          // We can make them render as columns
          //Render the list of food items
          let foodUI = foodArr.map((foodItem) => {
            return(
              <div>
                <h3>{foodItem}</h3>
              </div>
            );          
          });
          // If we have an empty array (IE no food being served at that time)
          // Do not render
          if(foodArr.length > 0){
            return (
              <div>
                <h1>{time}</h1>
                {foodUI}
              </div>
            );
          } else {
            return;
          }
        });
        return menuUI;
   }
    render() {
     return (
  
      <div className="App">
        {this.renderList()}  
      </div>
    );
 }
}
export default Menu;



