import React from 'react';
import './register.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            email: null
        }
    }

    handleChange(event) {

    }

    render() {
        return (
            <div className="Register">
                <h1>Sign Up</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    // TODO: prevent the default behavior of the event and use the registerUser function by passing it the data from the form
                }}>
                    <label>Username</label>
                    <input type="text" name="username" id="usernameReg"/>
                    <label>Email</label>
                    <input type="text" name="password" id="emailReg"/>
                    <label>Password</label>
                    <input type="password" name="email" id="passwordReg"/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default RegisterForm;