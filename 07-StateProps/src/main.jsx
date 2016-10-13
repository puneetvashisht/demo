var React = require('react');
var Header = require('./header');
// Footer = ....

var Main = React.createClass({
    getInitialState: function(){
        return {
            name: "Carl"
        }
    },
    render: function(){

        return(
            <div>
               <Header name={this.state.name} changeName={this.changeState}/><hr/>
                <h1>Main Page</h1><hr/>
                
            </div>
        );
    },
    changeState: function(text){
        this.setState({name: text});
    }
});


module.exports = Main ;
