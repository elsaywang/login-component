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
			oldPassword:'',
      newPasssword:'',
      confirmPassword:'',
			specialCharacters: ['!','@',']','#','$','%','^','&','*']
    }
	}

  handlePasswordInput = (e) => {}
  //isConfirmedPassword = ()=>{}
  handleConfirmPasswordInput = () =>{}
	handleSubmit = (e) => {
		e.preventDefault();
	}

	saveAndContinue = () => {}

	render() {
		return (<div className="screen">
			<SignInPrompt/>
			<form onSubmit={this.saveAndContinue}>
				<Input
          text="New Password"
          type="password"
          ref="password"
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
