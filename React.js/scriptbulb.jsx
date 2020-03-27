var bulb = React.createClass({

	getInitialState: function() {
		return(
			status: false
		)
	},

	switch: function() {
		this.setState(
			{ status: !this.state.status}
		);
	},

	render: function() {
		var bulb_curr = this.state.status ? 'img/1.png' : 'img/2.png';
		return (
			<div>
				<img src={bulb_curr}/>
				<button onClick={this.switch}>Click Me</button>
			</div>
		);
	}
});

ReactDOM.render(
	<bulb/>, document.getElementById('content')
);