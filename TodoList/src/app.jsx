var React = require('react');
var ReactDOM = require('react-dom');

var Page = require('./page')

var element = React.createElement(Page, {});
ReactDOM.render(element, document.querySelector('.row'));
