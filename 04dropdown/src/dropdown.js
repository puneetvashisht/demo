/**
 * Created by Puneet on 19-Sep-15.
 */
var React = require('react')
var Button = require('./button')
var ListItem = require('./list-item')

module.exports = React.createClass({


    handleClick: function(){
        this.setState({open: !this.state.open});

    },
    getInitialState: function(){
        return { open: false }
    },
    handleItemClick(item){
        console.log('print somethings')
        this.setState({itemTitle: item,  open: false})

    },


    render: function () {
        var list = this.props.items.map(function(item){
            console.log(item);
            return <ListItem whenItemClicked={this.handleItemClick} item={item}
                             className={this.state.itemTitle === item? "active": ""}>
                </ListItem>
        }.bind(this));

        return (
            <div className="dropdown">
                <Button whenClick={this.handleClick} subTitleClassName='caret'
                        className='btn-default'
                        title={this.state.itemTitle || this.props.title}/>
                <ul className={'dropdown-menu ' + (this.state.open ? 'show':'') }>
                    {list}

                </ul>
            </div>

        )
    }
})