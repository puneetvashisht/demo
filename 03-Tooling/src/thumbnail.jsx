var Badge = require("./badge")

var abc = React.createClass({
        render: function(){
            return (
                <div className="row">
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="http://lorempixel.com/200/200/" alt="Image not found"/>
      <div className="caption">
        <h3>{this.props.title}</h3>
        <p>{this.props.summary}</p>
        <p>
            <Badge text={this.props.txt} count={this.props.count}></Badge>
        </p>
      </div>
    </div>
  </div>
</div>
            )
        }
    });
