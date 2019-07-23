import React, { Component } from 'react';
import './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Twitter from './twitter.jsx';

class Newapp extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
            <Twitter />
            </div>
        )
    }

}
export default Newapp;