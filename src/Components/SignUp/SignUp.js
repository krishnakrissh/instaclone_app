import React, {Component} from 'react';

class SignUp extends Component{
    constructor(props){
super(props);
this.state = {  }
    }
    render(){
        return (
            <div>
            <input className="loginpage_text" type="text" placeholder="Mobile Number or Email" />
            <input className="loginpage_text" type="text" placeholder="Full Name" />
            <input className="loginpage_text" type="text" placeholder="Username" />
            <input className="loginpage_text" type="password" placeholder="Password" />
            <button className="loginpage_button" >Signin</button>

            </div>
        );
    }
}


export default SignUp;