import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			numbers: [],
		};

		this.setNumbers = this.setNumbers.bind(this);
	}

	setNumbers() {
		const arr = Array.from({ length: 20 }, () =>
			Math.floor(Math.random() * 100 + 1)
		);
		this.setState({ numbers: arr });
	}

	render() {
		const numbers = this.state.numbers;
		const even = [];
		const odd = [];
		numbers.forEach((element) => {
			if (element % 2 === 0) {
				even.push(element);
				return even.sort((a, b) => a - b);
			}
			if (element !== 0) {
				odd.push(element);
				return odd.sort((a, b) => a - b);
			}
		});

		return (
			<div className="App">
				<h1>1. Przeglądarka</h1>
				<button className="button" onClick={this.setNumbers}>
					Generate numbers
				</button>
				<div className="container">
					<div className="column">
						<h4 className="header">Liczby parzyste</h4>
						{even.length > 0 ? (
							even.map((el, index) => (
								<p className="paragraph" key={index}>
									{el}
								</p>
							))
						) : (
							<p className="clickTheButton">Click the button!</p>
						)}
					</div>
					<div className="column">
						<h4 className="header">Liczby nieparzyste</h4>
						{odd.length > 0 ? (
							odd.map((el, index) => (
								<p className="paragraph" key={index}>
									{el}
								</p>
							))
						) : (
							<p className="clickTheButton">Click the button!</p>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
