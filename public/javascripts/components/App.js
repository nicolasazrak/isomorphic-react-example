var React = require("react");
var Task = require("./Task");
var $ = require('jquery');

var App = React.createClass({
	
	componentDidMount: function () {
		var self = this;
		$.ajax('http://localhost:8000/api/task').success(function (response) {
			self.setState({tasks: response})
		});
	},
	getInitialState: function () {
		return {tasks: this.props.data || JSON.parse(document.getElementById('data').innerHTML), currentTask: "" }
	},
	handleFormSubmit: function(event) {
		var self = this;
		$.post('http://localhost:8000/api/task', {description: this.state.currentTask}).success(function(response) {
			self.setState({tasks: self.state.tasks.concat([ response.data ]), currentTask: ""});
		});
		event.preventDefault();
		return false;
	},
	handleValueChange: function(event) {
		this.setState({currentTask: event.target.value});
	},
	render: function () {
		return (
			<div>
				<ol>
        			{this.state.tasks.map(function(result) {
          				return <Task key={result.id} data={result} />;
        			})}
      			</ol>
      			<form onSubmit={this.handleFormSubmit} method="POST" action="/task" >
      				<input type="text" name="description" value={this.state.currentTask} onChange={this.handleValueChange} placeholder="New Task" />
      				<input type="submit" onClick={this.handleFormSubmit} value="Add!" />
      			</form>
			</div>
		);
	}

});


module.exports = App;