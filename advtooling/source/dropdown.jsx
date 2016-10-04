var Button = require('./button');
var List = require('./list')

var DropDown = React.createClass({
  render: function(){
      
      return (
          
          <div className="dropdown">
  <Button></Button>
  <ul className="dropdown-menushow" aria-labelledby="dropdownMenu1">
      <List></List>
  </ul>
</div>
      )
  }  
})

module.exports = DropDown

