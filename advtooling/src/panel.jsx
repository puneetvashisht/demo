//var React = require('react');
var Badge = require('./badge')

module.exports = React.createClass({
    render: function(){
        return(
            <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">

                        <h3 className="panel-title">{this.props.header}</h3>
                    </div>
                    <div className="panel-body">
                        <img src={this.props.imageUrl} alt="..."></img>
                        <p>{this.props.description}</p>
                        <p>
                            <Badge title={this.props.title} number={this.props.number} />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
})