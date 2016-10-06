var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return {todoText: ''}
    },
    handleChange: function(event){
//        console.log(event.target.value);
        this.state.todoText = event.target.value;
    },
    handleAddTodo: function(){
//        console.log('Add todo '+this.state.todoText);
         this.props.addTodo(this.state.todoText)
    },
	render: function(){
		return(
			<div>
			    <input type='text' onChange={this.handleChange}/>
			    <button onClick={this.handleAddTodo}>Add Todo</button>
			</div>
		);
	}
});