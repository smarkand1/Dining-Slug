import React, {Component} from 'react'
import dataList from './dataTest.json' //importing dataList
import {Card, CardBody, CardTitle} from 'mdbreact'; //Styling


export class Search extends Component {
    //Set initial States
    state = {
      query: "",
    }

    //Upon entering information into search bar...
    onchangeOne = e =>{
        this.setState({query: e.target.value}); //Log in target value
    }

    //This function will render our results
    renderResults = r =>{
        return <div className="col-md-3" style={{ marginTop : '10px' }}>
            <Card>
                <CardBody>
                    <CardTitle title={r.Food}>{r.Food.substring(0, 15)}{ r.Food.length > 15 && "..."}</CardTitle>
                </CardBody>
            </Card>
        </div>
    }     

    render() {
      const {query} = this.state; //query is now set to the given state
      
      /*
      Declaration of a filtered variable that will look through the data.json
      list and create an array containing only those options that match
      the query result
      */
      const filteredItems = dataList.filter(r=>
        {
            return r.Food.indexOf(query) !== -1
        })

       
      return (
        <div>
          <input
            placeholder="Search for..." //Search U.I bar
            ref={input => this.search = input}
            onChange={this.onchangeOne}
          />
            
            {filteredItems.map((r) => 
             {
                return this.renderResults(r) //print out results in a loop
            })}
        </div>
      )
    }
}
export default Search
   
