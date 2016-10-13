import React from "react";
import axios from "axios";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {bookId: null};
    }
    handleAllBooks(event){
        axios({
            method: 'get',
//        data: {title: 'ReactJS'},
            url: '/getBooks',
            headers: {}
        })
            .then((res) => {
            console.log("got the response!",res);
            let books = res.data;
            document.getElementById("myBooks").innerText = JSON.stringify(books);
        })
        .catch((err) =>{console.log(err)});
    }
    
    handleBook(){
        console.log(this.state.bookId);
    }
    handleGetBook(){
                axios({
            method: 'post',
            url: '/getBook/'+this.state.bookId,
            headers: {}
        })
            .then((res) => {
            console.log("got the response!",res);
        })
        .catch((err) =>{console.log(err)});
    }

    render() {
      
      /* return method can return only one element. That element can have multimple elements. */
    return (
      <div>
        <h1>This is my website page....</h1>
        <hr/>
        <h2>Welcome </h2>
        <a href="/getData">Get Data</a>
        <button onClick={this.handleAllBooks.bind(this)}>Get All Books</button>
        <div id='myBooks'></div>
        <hr/>
            <input value={this.state.bookId} onChange={this.handleBook.bind(this)} />
                    <button onClick={this.handleGetBook.bind(this)}>Get Book</button>

        
      </div>
    );
  }
}
