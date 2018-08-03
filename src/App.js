import React,{Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			textsearch: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onTextChange = (event) =>{
		this.setState({textsearch: event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter((robo) => {
					return robo.name.toLowerCase().includes(this.state.textsearch.toLowerCase())
				})
		if(this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox textchange={this.onTextChange}/>
				<Scroll>
					<CardList robotObject={filteredRobots} />
				</Scroll>
				</div>
			);
		}
		
	}
}

export default App;