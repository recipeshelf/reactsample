import React, { Component } from 'react';
import axios from 'axios';

class Number extends Component {
    constructor(props) {
        super(props)
        this.state = { currentNumber: props.initialNumber };
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.updateNumber = this.updateNumber.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initialNumber !== this.props.initialNumber)
            this.setState({ currentNumber: nextProps.initialNumber });
    }

    updateNumber(number) {
        axios.put('/number/' + number).then(res => {
            this.setState({ currentNumber: number });
        });
    }

    decrement(e) {
        this.updateNumber(this.state.currentNumber - 1);
    }

    increment(e) {
        this.updateNumber(this.state.currentNumber + 1);
    }    

    render() {
        return (
            <div>
                <button className="App-button" onClick={this.decrement}>Minus</button>
                <span>{this.state.currentNumber}</span>
                <button className="App-button" onClick={this.increment}>Plus</button>
            </div>
        );
    }
}

export default Number;
