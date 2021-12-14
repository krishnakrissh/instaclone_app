import React, { Component } from 'react';

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginpage_text" type="text" placeholder="Phone number, username, or email" />
                <input className="loginpage_text" type="password" placeholder="Password" />
                <button className="loginpage_button" >Signin</button>
            </div>
        );
    }
}

export default SignIN;