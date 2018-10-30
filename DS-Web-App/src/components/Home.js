import React from 'react';
import { List } from './../List';

export class Home extends React.Component {
	render() {
		return(
			<div className="App">
        <header className="App-header">
          <div className="title">
            Dining Slug
            <img src ={require('./slug.png')}/>
          </div>
          <div className="gradient"></div>
          <List/>
        </header>
        <body>
        </body>
      </div>
		);
	}
}

