

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
    
   

    var obj = React.createElement(ThumbnailList, option);
    React.render(obj, document.getElementById('abc'))