import React, { Component } from 'react';


class Counter extends Component {

    state = {
        value: this.props.value,
        preText: "Please leave a short review",
        
        
    };

    handleIncrement = () => {
        this.setState({value: this.state.value+1})
    }

    styles = {
        fontSize : 25,
        fontWeight: "bold",
        color : "yellow"
    }
    render() {
        return (
            <div>
                
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <span>{this.increButt()}</span>
                <span>Review:</span>
                <textarea value={this.state.preText} cols={80} rows={5} />
            </div>

        );
    }
    renderTags() {
        if (this.state.tags.length === 0) return (<p>No tags attached!</p>);
        return (<ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    increButt() {
        return(
            <button
                onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
        >Increment</button>);
    }

    formatCount() {
        const { value } = this.state;
        return (value === 0 ? 0 : value);
    }
}

export default Counter;