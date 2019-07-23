import React from 'react';
import './bootstrap.min.css'

class Food extends React.Component{
    render(){
    return(
        <div>
            <p onClick={this.props.clicked}>The fruit is ${this.props.price}</p>
        </div>
    )
}
}


export default Food;