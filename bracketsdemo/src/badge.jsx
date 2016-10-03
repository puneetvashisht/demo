var Badge = React.createClass({
    render: function(){
        return (
        <button class="btn btn-primary" type="button">
            Messages <span class="badge">4</span>
        </button>
        )
        
    }
})

var obj = React.createElement(Badge)

React.render(obj, document.getElementById('abc'))