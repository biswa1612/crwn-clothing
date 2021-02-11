import React from 'react';


import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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
                    <FormInput name="email" type="email" handleChange={this.handleChange} label='email' value={this.state.email} required />
                   
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                   
                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;