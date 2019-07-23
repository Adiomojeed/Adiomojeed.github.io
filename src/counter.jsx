import React from 'react'
import './bootstrap.min.css'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    
    add=()=>{
        const old=this.state.count
        const newc=old+1
        this.setState({count: newc})
    }
    sub=()=>{
        const old=this.state.count
        const newc=old-1
        this.state.count === 0 ? this.setState({count: 0}) : this.setState({count: newc})
    }
    render(){
        return(
            <div>
                <button className="btn btn-success mr-3" onClick={this.add}>Add</button>
                <button className="btn btn-danger" onClick={this.sub}>Subtract</button>
                <p className="badge badge-dark p-3 ml-2">{this.state.count}</p>
            </div>
        )
    };
}
export default Counter;