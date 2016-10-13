var React = require('react');

var Header = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Welcome {this.props.name} </h1>
                <input type="text" value={this.props.name} onChange={this.handleChange} />
                
            </div>
        );
    },
    handleChange: function(event){
        // Props should not be changed, states can be changed
        this.props.changeName(event.target.value);
    }
});


module.exports = Header;
