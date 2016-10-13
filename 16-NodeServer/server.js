/**
 * Created by Danish Gahlout on 3/28/14.
 */

var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("config.json"));
//var host = config.host;
var port = config.port;
var bodyParser   = require('body-parser');


var app = express();

app.use('/', express.static(__dirname + '/static'));
app.use(bodyParser.json()); // get information from html forms

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


/*

app.get("/", function(request, response){
    console.log('T1')
    response.send("Hello!");
});
*/
app.get("/getData", function(request, response){
    console.log("server gets the request");
    response.json({"success":true});
});

app.get("/getBooks", function(req, res){
    console.log("returning books")
//    res.json({"success":true});
    res.json(loadAllBooks());
    
})


app.post("/abc", function(req, res){
    console.log("hello")
});

app.post("/getBook/:id", function(request, response){
    console.log(request.params.id)
    var books = loadAllBooks();
    console.log(books);
    var book = books.filter(function(book){
        if(book.id === request.params.id){
            response.status(200);
            return book;
        } else {
            response.status(404);
//            return null;
        }
    })
    console.log(book);
    response.set({'Content-Type': 'application/json'}).json(book);
    /*getUser(request.params.id, function(user){
        if(!user){
            response.send("User does not exist", 404);
        }else {
            response.send("<a href='http://twitter.com'" + user.twitter + "> Follow " + user.name + " on twitter</a>");
        }
    });*/

});


function getUser(id, callback){

    var db = new mongo.Db("userDb", new mongo.Server(dbHost, dbPort, {}));
    db.open(function(error){
        console.log("We are connected!" +host + ":" +port);

        db.collection("user", function(error, collection){
            console.log("We have the collection");
            if(error){
                console.log("Error")
                console.log(error)
            }
            collection.find({"id":id.toString()}, function(error, cursor){
                if(error){
                    console.log("Error")
                    console.log(error)
                }

                cursor.toArray(function(error, users){
                    if(users.length == 0){
                        console.log("No user found");
                        callback(false);
                    } else{
                        callback(users[0])
                        console.log("Found a user", users[0]);
                    }

                });
            });
        });

    });
}

function loadAllBooks(){
        var books = [
        {
            "id": 1,
            "title":"ReactJS"
        },
        {
            "id": 2,
            "title":"Basic JavaScript"
        },
        {
            "id": 3,
            "title":"Advanced JS"
        },
        {
            "id": 4,
            "title":"AngularJS"
        }
    ];
    return books;
}