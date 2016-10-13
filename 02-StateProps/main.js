var Header = React.createClass({
    getInitialState: function(){
        return { name: 'Mike' }
    },
    render: function(){
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
                <input type="text" value={this.state.name} onChange={this.handleStateChange}  />
            
                <hr/>
            
                <Footer fName={this.state.name} changeProps={this.handleChangeProps}/>
            </div>
        )
    },
    handleStateChange: function(event){
        console.log(event.target.value);
        this.setState({name: event.target.value});
    },
    handleChangeProps: function(name){
        console.log(name);
        this.setState({name: name})
    }
});


var Footer = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Welcome {this.props.fName}</h1>
                <input type="text" value={this.props.fName} onChange={this.handlePropChange}/>
            </div>
        )
    },
    handlePropChange: function(event){
        console.log(event.target.value);
        this.props.changeProps(event.target.value);
    }
})



var pageElement = React.createElement(Header, {});

React.render(pageElement, document.getElementById('my-app'));