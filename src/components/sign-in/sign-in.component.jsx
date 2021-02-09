import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{              //we are using class component here because we need this keyword to be used which will be used to store the data
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();   //it prevents an event from taking place here it is preventing the form to get submitted because we want full control over it
        this.setState({ email: '',password: ''});
    }

    handleChange = event => {
        const { value,name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
                    <label>Email</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required 
                    />
                    <label>Email</label>
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}

export default SignIn;