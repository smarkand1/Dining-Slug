import React from 'react';
import { List } from './../List'

export class Home extends React.Component {
	render() {
		return(
			<div className="App">
        <header className="App-header">
          <p>
            Welcome to Dining Slug!
          </p>
          <List />
        </header>
      </div>
		);
	}
}

