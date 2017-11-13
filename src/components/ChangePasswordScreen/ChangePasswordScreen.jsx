import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Icon from '../Icon/Icon';
import SignInPrompt from '../SignInPrompt/SignInPrompt';

class ChangePasswordScreen extends React.Component {
	static propTypes = {
		store: PropTypes.object
	}

	constructor(props) {
		super(props);
    this.state = {
      forbiddenWords:false,
      passsword:'',
      confirmPassword:''
    }
	}

	handleChange = (e) => {}

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
          ref="password"
          validator="true"
          minCharacters="7"
          requireCapitals="1"
          requireNumbers="1"
          forbiddenWords={this.state.forbiddenWords}
          value={this.state.passsword}
          emptyMessage="Password is invalid"
          onChange={this.handlePasswordInput}/>
				<Input
          text="New password"
          ref="passwordConfirm"
          type="password"
          validate={this.isConfirmedPassword}
          value={this.state.confirmPassword}
          onChange={this.handleConfirmPasswordInput}
          emptyMessage="Please confirm your password"
          errorMessage="Passwords don't match"/>
				<button type="submit" className="btn btn-primary btn-lg">
					Change Password
				</button>
			</form>
		</div>)
	}
}

export default ChangePasswordScreen;
