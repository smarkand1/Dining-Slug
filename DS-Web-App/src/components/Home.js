import React from 'react';
import { Listhome } from './../Listhome';

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
          <Listhome/>
        </header>
        <body>
        </body>
      </div>
		);
	}
}

