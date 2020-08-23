import React from 'react';
import words from './words/';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.vowels = ['a', 'e', 'i', 'o', 'u'];

		this.state = {
			name: '',
			adj1: '',
			adj2: ''
		};
	}

	componentDidMount() {
		// console.log(words.nouns);
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.getAllWords();

		this.setState({ [name]: value });
	};

	getRandomWord = (wordArr, letter) => {
		const filteredWords = wordArr.filter((word) => word[0] === letter);
		return filteredWords[Math.floor(Math.random() * filteredWords.length)]
	};

	getRandomLetter = () => String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));

	getAllWords = () => {
		this.setState({
			adj1: this.getRandomWord(words.adjectives, this.getRandomLetter()),
			adj2: this.getRandomWord(words.adjectives, this.getRandomLetter()),
			nou1: this.getRandomWord(words.nouns, this.getRandomLetter()),
			nou2: this.getRandomWord(words.nouns, this.getRandomLetter())
		});
		;
	};

	render() {
		return (
			<div className="container">
			<div className="row">
				<div className="jumbotron" style={{width: '100%'}}>
					<h1 className="display-4">Insult Generator</h1>
					<label>
						<input onChange={this.handleInputChange} type="text" name="name" value={this.state.name} placeholder="Who is your enemy?" />
					</label>
					{this.state.name ?
					<p
						className="lead"
					>
						{this.state.name} is {this.vowels.includes(this.state.adj1[0]) ?
							'an' :
							'a'} {this.state.adj1} {this.state.adj2} {this.state.nou1} {this.state.nou2}.</p> :
					null}
				</div>
			</div>
		</div>
		);
	}
}

export default App;
