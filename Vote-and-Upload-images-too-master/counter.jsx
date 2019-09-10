import React, { Component } from 'react';
//import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';



class Counter extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: this.props.value,
            officer: this.props.officer,
            file: this.props.file
        }; 
    }
    //state is used for those data that are visible in UI and will be updated at some point
    

    handleIncrement = () => {
        if(this.state.value < 5)
        this.setState({ value: this.state.value + 1 })
    }

    handleDecrement = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 })
        }
    }

    handleOfficer = () => {
        //this.setState({ officer: this.state.officer })
        this.setOfficer();
    }

    sendValue() {
        //return (this.state.officer);
        //return (this.state.value);
        var min = 65;
        var max = 87;
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        return (String.fromCharCode(random));
    }

    imgCheck(k) {
        let files = k.target.files;
        console.log("uploaded files is :", files);
        this.setState({ file: files });
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (k) => {
            console.log("data read is :", k.target.result);
        }
    }
    /*
    updateFile(mk) {
        let img = mk.target.img;
        console.log("attachment:", img);
        this.setState({ files: this.state.files });

    }*/

    numberList(prod) {
        if (prod === 1) {
            return prod;
        }
        return prod;
        
            }


    styles = {
        fontSize : 25,
        fontWeight: "bold",
        color : "yellow"
    }
    render() {
        return (
            <div>
                
            <div>
                    <div>
            
                        <h5>Officer name:</h5>
                        <span style={this.styles} className={this.getBadgeClasses()}>{this.setOfficer()}</span>
                    
                   </div>
               <div>
                <span>{this.increButt()}</span>
                        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        <span>{this.decreButt()}</span>
               </div>
                <div>
                    <span><h5>Review:</h5></span>
                    <div>
                            <textarea cols={80} rows={3} />
                            <div>
                            
                            <label for="avatar">Upload officer's picture (if any)</label>

                            <input type="file"
                                id="avatar" name="avatar"
                                accept="image/png, image/jpeg"
                                onChange={(k) => this.imgCheck(k)}
                                />
                                <button onClick={(mk) => { this.updateFile(mk) }}>Upload</button>
                            </div>
                            <div>
                                
                            </div>


                    </div>
                </div>
            </div>
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
        >Click to add rating</button>);
    }

    decreButt() {
        return (
            <button
                onClick={this.handleDecrement}
                className="btn btn-secondary btn-sm"
            >Click to reduce rating</button>);
    }



    setOfficer() {
       // const { officer } = this.state;
        return this.props.officer;
    }

    formatCount() {
        const { value } = this.state;
        if (value < 5)
        {
            return (value === 0 ? 0 : value);
        }
        return (value === 0 ? 0 : 5);
    }
}

export default Counter;