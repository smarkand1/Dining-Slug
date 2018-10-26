//Listing page for RachelCarson, NOT YET called in DiningHall.js
import React from 'react'
         
export class Rachel extends React.Component { 
        constructor(props){
        super(props);
           this.state={ recipes :[] } 
        }
    
       
        componentWillMount(){
          this.setState({
            recipes : require('./menu-ui')
          });
        } 
        render() {
         return (
          <div className="App">
             <h2>Welcome to the RachelCarson Listing!</h2>
             <dl>
             {this.state.recipes.map(recipe => {
                 return ( <div key={recipe.Menu}>
                     <dt>{recipe.Menu[0]}</dt><br></br> 
                     <dt>{recipe.Menu[1]}</dt>
                     <br></br> 
                     <dd>{recipe.Food.join(',')}</dd>
                     <br></br> 
                     <dt>{recipe.Menu[2]}</dt>
                     <br></br> 
                     <dd>{recipe.Food.join(',')}</dd>
                     <br></br> 
                     <dt>{recipe.Menu[3]}</dt>
                     <br></br> 
                     <dd>{recipe.Food.join(',')}</dd>
                     <br></br> 
                     <hr></hr>
                    </div>
                   )
                 })
             }
          </dl>
          </div>
        );
     }
    }
    export default NineTen;
    


