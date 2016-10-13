// JS

document.getElementById('abc').innerHTML = "<p>"
Merginig of concerns -- P and Logic

React.createElement('p', null, "HelloWorld")
var i = 0
React.createElement("p", {className: "panel-title"}, "Hello world " + i)

// JSX
//Lgoic
var i= 0;

incrementCount: function(){
    this.i++
}


//HTML
render(){
    return (
        <p className="panel-title">
         Hello World {i}
        </p> 
    )
}
   