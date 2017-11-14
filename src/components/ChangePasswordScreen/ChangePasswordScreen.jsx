import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Icon from '../Icon/Icon';
import SignInPrompt from '../SignInPrompt/SignInPrompt';
import Input from '../Input/Input';

class ChangePasswordScreen extends React.Component {
	static propTypes = {
		//store: PropTypes.object
	}

	constructor(props) {
		super(props);
    this.state = {
			oldPasssword:'',
      newPasssword:'',
      confirmPassword:'',
			specialCharacters: ['!','@',']','#','$','%','^','&','*']
    }
	}

  handlePasswordInput = (event) => {
		if(!_.isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      password: event.target.value
    });
	}

  handleConfirmPasswordInput = (event) =>{
		this.setState({
      confirmPassword: event.target.value
    });
	}

	handleOldPasswordInput = (event) =>{
		this.setState({
      oldPasssword: event.target.value
    });
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	saveAndContinue = () => {}

	render() {
		return (<div className="screen">
			<SignInPrompt/>
			<form onSubmit={this.saveAndContinue}>
				<Input
					text="Old Password"
					type="password"
					ref="oldPassword"
					value={this.state.oldPasssword}
					emptymessage="Please type old password"
					onChange={this.handleOldPasswordInput}/>
				<Input
          text="New Password"
          type="password"
          ref="newPasssword"
          value={this.state.newPasssword}
          validator
          mincharacters={7}
          requirecapitals={1}
          requirenumbers={1}
          specialcharacters={this.state.specialCharacters}
          emptymessage="Password is invalid"
          onChange={this.handlePasswordInput}/>
				<Input
          text="Confirm password"
          type="password"
					ref="passwordConfirm"
          value={this.state.confirmPassword}
          validate={this.isConfirmedPassword}
          onChange={this.handleConfirmPasswordInput}
          emptymessage="Please confirm your password"
          errormessage="Passwords don't match"/>
				<button type="submit" className="btn btn-primary btn-lg">
					Change Password
				</button>
			</form>
		</div>)
	}
}

export default ChangePasswordScreen;
