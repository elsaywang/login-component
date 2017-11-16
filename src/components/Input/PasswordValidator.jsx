import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

export default class PasswordValidator extends React.Component {

  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    minCharacters: PropTypes.number,
    requireCapitals: PropTypes.number,
    requireLowercase: PropTypes.number,
    requireNumbers: PropTypes.number,
    specialCharacters: PropTypes.array,
    validData: PropTypes.object,
    errorMessage: PropTypes.string
  }

	constructor(props) {
    super(props);
    this.state = {
      value: '',
      minCharacters: this.props.minCharacters,
      requireCapitals: this.props.requireCapitals,
      requireLowercase: this.props.requireLowercase,
      requireNumbers: this.props.requireNumbers,
      specialCharacters: this.props.specialCharacters,
      name: this.props.name
    }
  }
  specialCharacters = () => {
    return this.state.specialCharacters.map((w, i) => {
      return (<span key={i} className="bad_word">
        {w}
      </span>)
    })
  }

  validatorTitle = () => {
    return (
      this.props.valid
      ? <h6 className="validator_title valid">
        {this.props.name} is valid
      </h6>
      : <h6 className="validator_title invalid">
        Your password must contain:
      </h6>)
  }
  getIcon = (tProps)=>{
    return classNames({'valid': tProps,'invalid': !tProps});
  }
	render() {
		const validatorClass = classNames({
      'password_validator':   true,
      'visible':              this.props.visible,
      'invisible':            !this.props.visible
    });

		return (
			<div className={validatorClass}>
        <div className="container-fluid">
          {this.validatorTitle()}
          <ul className="rules_list">
            <li className={this.getIcon(this.props.validData.minChars)}>
              <span >{this.state.minCharacters} characters minimum</span>
            </li>
            <li className={this.getIcon(this.props.validData.capitalLetters)}>
              <span >at least {this.state.requireCapitals} capital letter</span>
            </li>
            <li className={this.getIcon(this.props.validData.lowercaseLetters)}>
              <span >at least {this.state.requireLowercase} lower letter</span>
            </li>
            <li className={this.getIcon(this.props.validData.numbers)}>
              <span >at least {this.state.requireNumbers} number</span>
            </li>
            <li className={this.getIcon(this.props.validData.words)}>
              <span >{this.specialCharacters()}</span>
            </li>
          </ul>
        </div>
      </div>
		)
	}
}
