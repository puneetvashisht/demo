(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/app.jsx":[function(require,module,exports){

//var React = require('react');
var PanelList = require('./panellist');

var options = {
    thumbnailData:  [{
        title: 'JavaScript',
        number: 12,
        header: 'Learn Angular',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: 'http://lorempixel.com/200/200'
    },{
        title: 'ReactJS',
        number: 15,
        header: 'Learn React',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: 'http://lorempixel.com/200/200'
    }]
};

var element = React.createElement(PanelList, options);
React.render(element, document.querySelector('.row'));

},{"./panellist":"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/panellist.jsx"}],"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/badge.jsx":[function(require,module,exports){
//var React = require('react')
module.exports = React.createClass({displayName: "exports",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

},{}],"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/panel.jsx":[function(require,module,exports){
//var React = require('react');
var Badge = require('./badge')

module.exports = React.createClass({displayName: "exports",
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

},{"./badge":"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/badge.jsx"}],"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/panellist.jsx":[function(require,module,exports){
//var React = require('react')
var Panel = require('./panel')
module.exports = React.createClass({displayName: "exports",
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

},{"./panel":"/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/panel.jsx"}]},{},["/Users/puneetvashisht/workspaces/reactkoenig/advtooling/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcHVuZWV0dmFzaGlzaHQvd29ya3NwYWNlcy9yZWFjdGtvZW5pZy9hZHZ0b29saW5nL3NyYy9hcHAuanN4IiwiL1VzZXJzL3B1bmVldHZhc2hpc2h0L3dvcmtzcGFjZXMvcmVhY3Rrb2VuaWcvYWR2dG9vbGluZy9zcmMvYmFkZ2UuanN4IiwiL1VzZXJzL3B1bmVldHZhc2hpc2h0L3dvcmtzcGFjZXMvcmVhY3Rrb2VuaWcvYWR2dG9vbGluZy9zcmMvcGFuZWwuanN4IiwiL1VzZXJzL3B1bmVldHZhc2hpc2h0L3dvcmtzcGFjZXMvcmVhY3Rrb2VuaWcvYWR2dG9vbGluZy9zcmMvcGFuZWxsaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0EsK0JBQStCO0FBQy9CLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFdkMsSUFBSSxPQUFPLEdBQUc7SUFDVixhQUFhLEdBQUcsQ0FBQztRQUNiLEtBQUssRUFBRSxZQUFZO1FBQ25CLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLGVBQWU7UUFDdkIsV0FBVyxFQUFFLHlJQUF5STtRQUN0SixRQUFRLEVBQUUsK0JBQStCO0tBQzVDLENBQUM7UUFDRSxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLFdBQVcsRUFBRSx5SUFBeUk7UUFDdEosUUFBUSxFQUFFLCtCQUErQjtLQUM1QyxDQUFDO0FBQ04sQ0FBQyxDQUFDOztBQUVGLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQ3JCckQsOEJBQThCO0FBQzlCLG9DQUFvQyx1QkFBQTtJQUNoQyxNQUFNLEVBQUUsV0FBVztRQUNmLE9BQU8sb0JBQUEsUUFBTyxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxpQkFBQSxFQUFpQixDQUFDLElBQUEsRUFBSSxDQUFDLFFBQVMsQ0FBQSxFQUFBO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLEdBQUEsRUFBQyxvQkFBQSxNQUFLLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLE9BQVEsQ0FBQSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBYyxDQUFBO1FBQ2hFLENBQUE7S0FDWjtDQUNKLENBQUM7OztBQ1BGLCtCQUErQjtBQUMvQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOztBQUU5QixvQ0FBb0MsdUJBQUE7SUFDaEMsTUFBTSxFQUFFLFVBQVU7UUFDZDtZQUNJLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsVUFBVyxDQUFBLEVBQUE7Z0JBQ3RCLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMscUJBQXNCLENBQUEsRUFBQTtBQUNyRCxvQkFBb0Isb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxlQUFnQixDQUFBLEVBQUE7O3dCQUUzQixvQkFBQSxJQUFHLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLGFBQWMsQ0FBQSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBWSxDQUFBO29CQUNsRCxDQUFBLEVBQUE7b0JBQ04sb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxZQUFhLENBQUEsRUFBQTt3QkFDeEIsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxHQUFBLEVBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxDQUFDLEdBQUEsRUFBRyxDQUFDLEtBQU0sQ0FBTSxDQUFBLEVBQUE7d0JBQy9DLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFnQixDQUFBLEVBQUE7d0JBQy9CLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUE7NEJBQ0Msb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxLQUFBLEVBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDLE1BQUEsRUFBTSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTyxDQUFBLENBQUcsQ0FBQTt3QkFDN0QsQ0FBQTtvQkFDRixDQUFBO2dCQUNKLENBQUE7WUFDSixDQUFBO1NBQ1Q7S0FDSjtDQUNKOzs7QUN2QkQsOEJBQThCO0FBQzlCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDOUIsb0NBQW9DLHVCQUFBO0lBQ2hDLE1BQU0sRUFBRSxXQUFXO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxjQUFjLENBQUM7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixPQUFPLG9CQUFDLEtBQUssRUFBQSxnQkFBQSxHQUFBLENBQUUsR0FBRyxjQUFlLENBQUEsQ0FBRyxDQUFBO0FBQ2hELFNBQVMsQ0FBQyxDQUFDOztRQUVILE9BQU8sb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtZQUNQLElBQUs7UUFDSixDQUFBO0tBQ1Q7Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG4vL3ZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBQYW5lbExpc3QgPSByZXF1aXJlKCcuL3BhbmVsbGlzdCcpO1xyXG5cclxudmFyIG9wdGlvbnMgPSB7XHJcbiAgICB0aHVtYm5haWxEYXRhOiAgW3tcclxuICAgICAgICB0aXRsZTogJ0phdmFTY3JpcHQnLFxyXG4gICAgICAgIG51bWJlcjogMTIsXHJcbiAgICAgICAgaGVhZGVyOiAnTGVhcm4gQW5ndWxhcicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgZnJvbnQgZW5kIGxpYnJhcnkgZm9yIHJlbmRlcmluZyB3ZWIgcGFnZXMuIFJlYWN0IGlzIGEgZmFudGFzdGljIG5ldyBmcm9udCBlbmQgbGlicmFyeSBmb3IgcmVuZGVyaW5nIHdlYiBwYWdlcy4nLFxyXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cDovL2xvcmVtcGl4ZWwuY29tLzIwMC8yMDAnXHJcbiAgICB9LHtcclxuICAgICAgICB0aXRsZTogJ1JlYWN0SlMnLFxyXG4gICAgICAgIG51bWJlcjogMTUsXHJcbiAgICAgICAgaGVhZGVyOiAnTGVhcm4gUmVhY3QnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGZyb250IGVuZCBsaWJyYXJ5IGZvciByZW5kZXJpbmcgd2ViIHBhZ2VzLiBSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgZnJvbnQgZW5kIGxpYnJhcnkgZm9yIHJlbmRlcmluZyB3ZWIgcGFnZXMuJyxcclxuICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9sb3JlbXBpeGVsLmNvbS8yMDAvMjAwJ1xyXG4gICAgfV1cclxufTtcclxuXHJcbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChQYW5lbExpc3QsIG9wdGlvbnMpO1xyXG5SZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdycpKTsiLCIvL3ZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlXCI+e3RoaXMucHJvcHMubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIH1cclxufSk7IiwiLy92YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgQmFkZ2UgPSByZXF1aXJlKCcuL2JhZGdlJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1hZ2VVcmx9IGFsdD1cIi4uLlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSBudW1iZXI9e3RoaXMucHJvcHMubnVtYmVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59KSIsIi8vdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxyXG52YXIgUGFuZWwgPSByZXF1aXJlKCcuL3BhbmVsJylcclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudGh1bWJuYWlsRGF0YSlcclxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMucHJvcHMudGh1bWJuYWlsRGF0YS5tYXAoZnVuY3Rpb24odGh1bWJuYWlsUHJvcHMpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aHVtYm5haWxQcm9wcyk7XHJcbiAgICAgICAgICAgIHJldHVybiA8UGFuZWwgey4uLnRodW1ibmFpbFByb3BzfSAvPlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn0pOyJdfQ==
