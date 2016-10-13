var React = require('react');
//var ReactDOM = require('react-dom');

var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            open: false
        }
    },
    handleShow: function(){
        this.setState({open: !this.state.open})
    },
    handleTitleChange: function(newTitle){
        this.setState({title: newTitle, open: false})
    },
    render: function(){
        console.log(this.props.items);
        console.log(this.props.title);
        
        var list = this.props.items.map(function(item, index){
//            return <li key={index}><a href="#">{item}</a></li>
            return <ListItem key={index} item={item} titleChange={this.handleTitleChange}/>
        }.bind(this))
        
        return(
            <div className="dropdown">
                <Button whenClick={this.handleShow} btnTitle={this.state.title || this.props.title}/>
  
                  <ul className={"dropdown-menu"+(this.state.open ? 'show':'')} aria-labelledby="dropdownMenu1">
    {list}
  </ul>
</div>
        )
    }
});
