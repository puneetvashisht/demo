

    var option = {
        thumbnailData : [{
        title: "ReactJS",
        summary: "ReactJS .. reactive JS library. Great with performance",
        txt: "Sent",
        count: 123
    },
                        {
        title: "AngularJS",
        summary: "AngularJS .. comprehensive JS framework. Great with performance",
        txt: "Sent",
        count: 123
    },
                        {
        title: "JS",
        summary: "Javscript . core of every JS framework and the real culprit. Great with performance",
        txt: "Sent",
        count: 123
    }]
    }
    
   

    
 var Badge = React.createClass({displayName: "Badge",
     
    incrementCount: function(){
        console.log('Here I"ll add some behavior');
        console.log(this.props.count);
    }, 
     
    render: function(){
        return (
        React.createElement("button", {onClick: this.incrementCount, className: "btn btn-primary", type: "button"}, 
           this.props.text, " ", React.createElement("span", {className: "badge"}, this.props.count)
        )
        )
        
    }
})
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
 
    render: function(){
        
        console.log(this.props.thumbnailData)
        
        var list = this.props.thumbnailData.map(function(obj){
           return React.createElement(Thumbnail, React.__spread({},  obj))
        });
        
        
        return(
            React.createElement("div", null, 
                list
            )
            
        )
    }
})
var Thumbnail = React.createClass({displayName: "Thumbnail",
        render: function(){
            return (
                React.createElement("div", {className: "row"}, 
  React.createElement("div", {className: "col-sm-6 col-md-4"}, 
    React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: "http://lorempixel.com/200/200/", alt: "Image not found"}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.title), 
        React.createElement("p", null, this.props.summary), 
        React.createElement("p", null, 
            React.createElement(Badge, {text: this.props.txt, count: this.props.count})
        )
      )
    )
  )
)
            )
        }
    });

var obj = React.createElement(ThumbnailList, option);
    React.render(obj, document.getElementById('abc'))
