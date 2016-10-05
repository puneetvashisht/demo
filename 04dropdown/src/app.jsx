
var React = require('react');
var Dropdown = require('./dropdown');

var options = {
    title: 'Choose your snack',
    items: ['Samosa', 'Tea', 'IceCream', 'Pudding', 'Bhel Puri']
}

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.row'));