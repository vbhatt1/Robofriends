import React,{Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
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

	onTextChange = (event) => {
		this.setState({textsearch: event.target.value})
	}

	render() {
		const {robots,textsearch} = this.state;
		const filteredRobots = robots.filter((robo) => {
					return robo.name.toLowerCase().includes(textsearch.toLowerCase())
				})
		return !robots.length ? 
			<h1>Loading</h1> :
			(
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

export default App;