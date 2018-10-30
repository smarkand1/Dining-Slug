//Listing page for Crown, THIS IS called in DiningHall.js
import React from 'react'
     
export class NineTen extends React.Component { 
        constructor(props){
        super(props);
           this.state={ recipes :[] } 
        }
    
       
        componentWillMount(){
          this.setState({
            recipes : require('./menu-ui')
          });
        } 
        renderList =() =>{
            let model = this.state.recipes[this.props.hallCode];
            let title = model.Title;
            let menu = model.Menu;

            let menuUI = menu.map((m) => {
              let time = m.Title;
              let foodArr = m.Food;
              let foodUI = foodArr.map((f) => {
                return(
                  <div>
                    <h3>{f}</h3>
                  </div>
                );          
              });
              return (
                <div>
                  <h1>{time}</h1>
                  {foodUI}
                </div>
              );
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
    export default NineTen;
    


