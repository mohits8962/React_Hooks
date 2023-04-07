import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} Times`
            console.log("Updating Document Title")
        }

    }

    render() {
        return (
            <div>
                <h3>Class Counter</h3>
                <input type="text"
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }}
                />
                <br />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} Times
                </button>
            </div>
        );
    }
}

export default ClassCounterOne;
