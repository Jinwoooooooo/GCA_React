import React, { Component } from "react";

export default class StateComponent extends Component {
    // state 선언, 반드시 이름은 state
    state = { num1: 1, num2: 2 };

    render() {
        return (
            <div className="StateComponent">
                <h4>StateComponent</h4>
                <p>num1: {this.state.num1}</p>
                <button
                    onClick={() => this.setState({ num1: this.state.num1 + 1 })}
                >
                    +
                </button>
                <button
                    onClick={() => this.setState({ num1: this.state.num1 - 1 })}
                >
                    -
                </button>
                <p>num2: {this.state.num2}</p>
                <button
                    onClick={() => this.setState({ num2: this.state.num2 + 2 })}
                >
                    +
                </button>
                <button
                    onClick={() => this.setState({ num2: this.state.num2 - 2 })}
                >
                    -
                </button>
            </div>
        );
    }
}
