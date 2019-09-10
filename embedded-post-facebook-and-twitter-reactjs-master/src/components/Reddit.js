import React, { Component } from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import TweetEmbed from 'react-tweet-embed'
import Iframe from 'react-iframe'

export default class FacebookPost extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        console.log(this.state.value);
        
        event.preventDefault();
    }


    render() {
        //let url =   "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2345735522142518"
        let url = this.state.value
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Facebook Url:
          <input type="text" value={this.state.value} onChange={this.handleChange} width="10000" height="500"/>
                    </label>
                    
                </form>
                <p>
                    <FacebookProvider appId="2345735522142518">
                        <EmbeddedPost href={this.state.value} width="500" />
                    </FacebookProvider>
                </p>
                <TweetEmbed id="1146441019644211202" />
            </div>
            
            
                );
    }
}
