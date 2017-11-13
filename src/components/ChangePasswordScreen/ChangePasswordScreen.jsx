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
      forbiddenWords:false,
      passsword:'',
      confirmPassword:''
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
          value={this.state.passsword}
          validator="true"
          minCharacters="7"
          requireCapitals="1"
          requireNumbers="1"
          forbiddenWords={this.state.forbiddenWords}
          emptymessage="Password is invalid"
          onChange={this.handlePasswordInput}/>
				<Input
          text="Confirm password"
          ref="passwordConfirm"
          type="password"
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
