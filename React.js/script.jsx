var styles = {color: "red"}
var styles2 = {color: "green"}
var Header = React.createClass({
	render: function() {
		return (
			<div>
				<h3>(this.props.name)</h3>
				<h2>This is header component</h2>
			</div>
		);
	}
});

var Footer = React.createClass({

	getInitialState: function() {
		setTimeOut(()=>(this.setState({ user: "Jinny", id: "505"})), 5000);
		return (
			user : "Edureka",
			id : '101'
		);
	},

	render: function() {
		return (
			<div>
				<h1>User is : ( this.state.user )
					<br/> ID is : ( this.state.id )</h1>
				<h2>This is footer component</h2>
			</div>
		);
	}
});

var MyComponent = React.createClass({
	render: function () {
		return(
			<div style={styles}>
			<header name = "Alex" />
			<header name = "Max" />
			<h1>Edureka<h1>
			<h2 styles={styles2}>Hello World</h2>
			<h3> Sum is: {7+6} </h3>
			<footer/>
			</div>
		);
	}
});

ReactDOM.render(
	<MyComponent/>, document.getElementById('content')
);