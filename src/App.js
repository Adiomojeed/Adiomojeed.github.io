import React, { Component } from 'react';
import './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Greeting from './Greeting.js';
import Food from './food.js';
import Counter from './counter.jsx';
import Toggle from './toggle.jsx';
import Twitter from './twitter.jsx';

class App extends Component {
    state = {
        food: [
            { price: 10 },
            { price: 20 },
            { price: 30 }
        ],
        click: 0
    }
    item = () => {
        const old = this.state.click;
        const newc = old + 1;
        this.setState({ click: newc })
    }
    render() {
        let styles = this.getClassBadge();
        return (

            <
            div className = "mt-5 ml-5" >
            <
            Toggle / > o <
            Greeting / > {
                this.state.food.map(am => {
                    return <Food price = { am.price }
                    clicked = { this.item }
                    />
                })
            } <
            span className = { styles } > { this.Clicks() } < /span> <
            Counter / >
            <
            Twitter className = "mt-5" / >
            <
            /div>
        );
    }
    Clicks() {
        return (this.state.click === 0 ? "zero" : this.state.click)
    }
    getClassBadge() {
        let styles = "badge badge-";
        styles += this.state.click === 0 ? "success" : "danger";
        return styles;
    }
}


export default App;