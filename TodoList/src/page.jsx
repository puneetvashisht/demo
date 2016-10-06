var React = require('react');

var Header = require('./header');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            todos: []
        }
    },
    addTodo: function(todo){
        this.state.todos.push(todo);
        this.setState({todos: this.state.todos})
        console.log(this.state.todos);
    },
	render: function(){
		return(
			<div>
			    
			    <Header addTodo={this.addTodo}/>
			</div>
		);
	}
});