var ThumbnailList = React.createClass({
 
    render: function(){
        
        console.log(this.props.thumbnailData)
        
        var list = this.props.thumbnailData.map(function(obj){
           return <Thumbnail {...obj}></Thumbnail>
        });
        
        
        return(
            <div>
                {list}
            </div>
            
        )
    }
})