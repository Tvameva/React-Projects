import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked = () => console.log("Clicked");

    responseFacebook = response => {
        console.log(response);
    }
    render() {
        let fbContent;
        if (!this.state.isLoggedIn) {
            fbContent = (<FacebookLogin
                appId="2345735522142518"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }

        return (
            <div>
                {fbContent}
            </div>
        )


    }
}
