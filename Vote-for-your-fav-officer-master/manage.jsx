import React, { Component } from 'react';
import Counter from './counter';

class Manage extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ],
        officer: ["Peter", "Parker", "Bruce", "Wayne"]
    }
    render() {
        return (
            <React.Fragment>
                {this.state.officer.map((officers) => officers)}
                {this.state.counters.map(
                    counter => <Counter key={counter.id} value={counter.value}
                    />)}
                </React.Fragment>

        );
    }
}

export default Manage;