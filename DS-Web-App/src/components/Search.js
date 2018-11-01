import React, {Component} from 'react'
import Suggestions from './Suggestions'
export class Search extends Component {
    state = {
      query: '',
      results: []
    }
    
    //Should pull information from database
    getInfoFromDatabase = () =>
    {
      this.setState({
        results: [1] //This is going to be our dummy array to test Search  
      })
    }
   
    //When user inputs something, change its output
    handleInputChange = () => {
      this.setState({
        query: this.search.value
      },
        this.getInfoFromDatabase()
      )
    }
   
    render() {
      return (
        <form>
          <input
            placeholder="Search for..." //Search U.I bar
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <Suggestions results= {this.state.query}/> 
        </form>
      )
    }
   }
   
   export default Search
   
