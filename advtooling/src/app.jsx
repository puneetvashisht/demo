
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