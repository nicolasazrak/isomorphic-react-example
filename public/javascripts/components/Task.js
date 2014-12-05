var React = require('react');

var Task = React.createClass({

	render: function () {
		
		return(
			<li>{this.props.data.description}</li>
		);

	}

});


module.exports = Task;