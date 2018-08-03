import React,{Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			textsearch: ""
		};
	}

	onTextChange = (event) =>{
		this.setState({textsearch: event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter((robo) => {
					return robo.name.toLowerCase().includes(this.state.textsearch.toLowerCase())
				});
		return (
				<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox textchange={this.onTextChange}/>
				<CardList robotObject={filteredRobots} />
				</div>
			);
	}
}

export default App;