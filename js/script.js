var Counter = React.createClass({
	getTnstalState: function () {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	render: function () {
		return React.createElement('div', {clasName: 'app'},
			React.createElement('span', {}, 'Counter' + this.state.counter)
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));