import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleComponent extends Component {
    state = {
        count: 0,
        isValue: true,
    };

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("render...");
        return (
            <div className="LifeCycleComponent">
                <h4>LifeCycleComponent</h4>
                <p>
                    count: {this.state.count}
                    <button
                        onClick={() => {
                            this.setState({ count: this.state.count + 1 });
                        }}
                    >
                        증가
                    </button>
                    <p>
                        <button
                            onClick={() => {
                                this.setState({ isValue: !this.state.isValue });
                            }}
                        >
                            생성/제거
                        </button>
                    </p>
                    {this.state.isValue && <ChildComponent />}
                </p>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}
