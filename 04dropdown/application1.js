var options = {
    thumbnailData:  [{
        title: 'AngularJS',
        number: 12,
        header: 'Learn Angular',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: '../images/download.jpg'
    },{
        title: 'ReactJS',
        number: 15,
        header: 'Learn React',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: '../images/download.jpg'
    }]
};

var element = React.createElement(PanelList, options);
React.render(element, document.querySelector('.row'));
var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});
var Panel = React.createClass({displayName: "Panel",
    render: function(){
        return(
            React.createElement("div", {className: "col-md-3"}, 
                React.createElement("div", {className: "panel panel-default"}, 
                    React.createElement("div", {className: "panel-heading"}, 

                        React.createElement("h3", {className: "panel-title"}, this.props.header)
                    ), 
                    React.createElement("div", {className: "panel-body"}, 
                        React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
                        React.createElement("p", null, this.props.description), 
                        React.createElement("p", null, 
                            React.createElement(Badge, {title: this.props.title, number: this.props.number})
                        )
                    )
                )
            )
        )
    }
})
var PanelList = React.createClass({displayName: "PanelList",
    render: function() {
        console.log(this.props.thumbnailData)
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            console.log(thumbnailProps);
            return React.createElement(Panel, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null, 
            list
        )
    }
});