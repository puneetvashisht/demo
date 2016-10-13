//var React = require('react')
var Panel = require('./panel')
module.exports = React.createClass({
    render: function() {
        console.log(this.props.thumbnailData)
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            console.log(thumbnailProps);
            return <Panel {...thumbnailProps} />
        });

        return <div>
            {list}
        </div>
    }
});