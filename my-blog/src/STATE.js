import React, { Component } from 'react'
import './style.css'

export default class STATE extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
    
    handleInrement = () => {
        this.setState({
            count : this.state.count + 1 
        })
    }

    handleDeInrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {

        const { count } = this.state

        return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick={this.handleInrement}>+</button>
                <button onClick={this.handleDeInrement} disabled={count === 0 ? true : false}>-</button>
            </div>
        )
    }
}
