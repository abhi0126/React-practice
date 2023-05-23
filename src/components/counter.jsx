import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        title: 'Counter Component',
        count: 0
    }

    constructor() {
        super();
    }

    render() { 
        return (
            <div className='container m-5'>
                <h2 className='text-primary'>{this.state.title}</h2>
                <button className='btn btn-danger m-4' onClick={this.handleDecrement}>-</button>
                <span>{this.state.count}</span>
                <button className='btn btn-success m-4' onClick={this.handleIncremnt}>+</button>
            </div>
        );
    }

    handleDecrement = () => {
        this.setState({count: this.state.count - 1});
    }

    handleIncremnt = () => {
        this.setState({count: this.state.count + 1});
    }


}
 
export default Counter;