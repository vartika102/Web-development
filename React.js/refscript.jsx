var refComponent = React.createClass({

	display: function() {
		var name = this.inputname.valuex;
		document.getElementById('dispname').innerHTML = name;
	},

	render: function() {
		return(
			<div>
				<label for="name">Name: </label>
				<input type="text" name="name" ref={input => this.inputname=input} /></br>
				<button onClick={this.display}>Click Me</button>
				<h3>HI...<span id="dispname"></span></h3>
		);
	}
});

ReactDOM.render(
	<refComponent/>, document.getElementById('content')
);