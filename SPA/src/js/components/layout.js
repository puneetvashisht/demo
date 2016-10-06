import React from 'react';
import Nav from './nav';
import Footer from './footer';

import { Link } from 'react-router'

export default class Layout extends React.Component{
    constructor(){
        super();
        console.log(this.props)
    }
    render(){
        const containerStyle = {
      marginTop: "60px"
    };
        return(
            <div>
                <Nav location={this.props.location}/>
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
                </div>
        )
    }
}