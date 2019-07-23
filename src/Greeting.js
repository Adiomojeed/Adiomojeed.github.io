import React from 'react';
import './bootstrap.min.css'
import './App.css'

class Greeting extends React.Component{
    state = {
        counter: 0
    }
    clickHandler = () =>{
        const old= this.state.counter;
        const newc= old + 1;
        this.setState({counter: newc})
    }
    render(){
    return(
        <div>
            <button className="btn btn-dark" onClick={this.clickHandler}>Click</button>
            <p className="ml-4 style">{this.state.counter}</p>
        </div>
    )
}
}


export default Greeting;