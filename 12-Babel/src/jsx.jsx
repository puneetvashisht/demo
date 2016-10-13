var Element = React.createClass({
    render: function(){
        return(
            <h1>Hello Friends!</h1>
        );
    }
})

ReactDOM.render(<Element />, document.getElementById('my-app'));