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

  handlePasswordInput = (event) => {
		//console.log(event.target.value);
		if(!_.isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      newPasssword: event.target.value
    });
	}

  handleConfirmPasswordInput = (event) =>{
		//console.log(event.target.value);
		this.setState({
      confirmPassword: event.target.value
    });
	}

	handleOldPasswordInput = (event) =>{
		//console.log(event.target.value);
		this.setState({
      oldPassword: event.target.value
    });
	}

	saveAndContinue = (event) => {
		event.preventDefault();

    let canProceed = this.refs.oldPassword.isValid()
        && this.refs.newPasssword.isValid()
        && this.refs.passwordConfirm.isValid();

    if (canProceed) {
      console.log('Thanks.');
    } else {
			this.refs.oldPassword.isValid();
			this.refs.newPasssword.isValid();
			this.refs.passwordConfirm.isValid();
    }
	}

	isConfirmedPassword = (event) => {
    return (event == this.state.newPasssword)
  }

  isOldPassword = (event) => {
    return (event && this.state.newPasssword !== this.state.oldPassword)
  }

	render() {
		return (<div className="container screen">
      <div className="panel panel-default">
			<SignInPrompt/>
      <div className="panel-body contents">
			<div className='form-group'>
			<form onSubmit={this.saveAndContinue}>
				<Input
					text="Old Password"
					type="password"
					ref="oldPassword"
					value={this.state.oldPasssword}
          validate={this.isOldPassword}
					emptyMessage="Please type old password"
          errorMessage="New password must be different from old one"
					onChange={this.handleOldPasswordInput}/>
				<Input
          text="New Password"
          type="password"
          ref="newPasssword"
          value={this.state.newPasssword}
          validator
          minCharacters={7}
          requireCapitals={1}
          requireLowercase={1}
          requireNumbers={1}
          specialCharacters={this.state.specialCharacters}
          emptyMessage="Password is invalid"
          onChange={this.handlePasswordInput}/>
				<Input
          text="Confirm password"
          type="password"
					ref="passwordConfirm"
          value={this.state.confirmPassword}
          validate={this.isConfirmedPassword}
          onChange={this.handleConfirmPasswordInput}
          emptyMessage="Please confirm your password"
          errorMessage="Passwords don't match"/>
				<button type="submit" className="btn btn-primary btn-lg">
					Change Password
				</button>
			</form>
			</div>
    </div>
    </div>
		</div>)
	}
}

export default ChangePasswordScreen;
