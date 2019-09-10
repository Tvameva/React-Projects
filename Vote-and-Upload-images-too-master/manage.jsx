import React, { Component } from 'react';
import Counter from './counter';

class Manage extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            counters: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 20 },
                { id: 4, value: 10 }
            ],
            officers: [
                { id: 1, value: "Perter" },
                { id: 2, value: "Parker" },
                { id: 3, value: "Bruce" },
                { id: 4, value: "Wayne" }
            ],
            files: [
                { id: 1, value: "" },
                { id: 2, value: "" },
                { id: 3, value: "" },
                { id: 4, value: "" }
            ]
        }

    }

    styles = {
        fontSize: 25,
        fontWeight: "bold",
        color: "blue"
    }
  /*
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ],
        officers: [
            { id: 1, value: "Perter" },
            { id: 2, value: "Parker" },
            { id: 3, value: "Bruce" },
            { id: 4, value: "Wayne"}
        ]
    }*/
    restButton() {
        return (
            /*<button
                onClick={this.handleEntailmentRequest()}
                className="btn btn-secondary btn-sm"
            >Submit</button>
            <button type="button" onClick={this.refreshPage()}> <span>Reload</span> </button> */
            <button type="button" onClick={() => this.refreshPage()}> <span>Submit Review</span> </button>
            );
    }
    refreshPage() {
        window.parent.location = window.parent.location.href;
    }

    render() {
        return (
            <React.Fragment>
                <span style={this.styles}><h2 color="red">Rate my Officer</h2></span>
                {this.state.counters.map(
                    (counter, index) => <Counter
                        key={counter.id} value={counter.value}
                        officer={this.state.officers[index].value}
                        file={this.state.files[index].value}
                    />)}
                
                <span>{this.restButton()}</span>
                </React.Fragment>

        );
    }
}

export default Manage;