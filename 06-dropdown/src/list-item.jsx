var React = require('react');

module.exports = React.createClass({
    handleItemClick: function(e){
        this.props.titleChange(this.props.item);
    },
    render: function(){
        return(
          <li onClick={this.handleItemClick}><a href="#">{this.props.item}</a></li>
        );
    }
})