var React = require('react');
var ReactDOM = require('react-dom');

var Dropdown = require('./dropdown');

var options = {
    title: "Select your country",
    items : ["India", "Australia", "Japan", "USA"]
}
var element = React.createElement(Dropdown, options);

ReactDOM.render(element, document.querySelector('.row'));