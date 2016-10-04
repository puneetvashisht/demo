 var Badge = React.createClass({
     
    incrementCount: function(){
        console.log('Here I"ll add some behavior');
        console.log(this.props.count);
    }, 
     
    render: function(){
        return (
        <button onClick={this.incrementCount} className="btn btn-primary" type="button">
           {this.props.text} <span className="badge">{this.props.count}</span>
        </button>
        )
        
    }
})