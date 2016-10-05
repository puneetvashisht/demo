var React = require('react');

module.exports = React.createClass({
    render: function(){
        return(
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={this.props.whenClick}>
            {this.props.btnTitle}
            <span className="caret"></span>
          </button>

        );
    }
})