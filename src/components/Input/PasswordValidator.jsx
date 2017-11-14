import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import _ from 'underscore';

export default class PasswordValidator extends React.Component {

  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    minCharacters: PropTypes.number,
    requireCapitals: PropTypes.number,
    requireNumbers: PropTypes.number,
    specialCharacters: PropTypes.array,
    errorMessage: PropTypes.string
  }

	constructor(props) {
    super(props);
    this.state = {
      value: '',
      minCharacters: this.props.minCharacters,
      requireCapitals: this.props.requireCapitals,
      requireNumbers: this.props.requireNumbers,
      specialCharacters: this.props.specialCharacters,
      name: this.props.name
    }
  }
  specialCharacters = () => {
    return this.state.specialCharacters.map((w, i) => {
      return (<span key={i} className="bad_word">
        "{w}"
      </span>)
    })
  }

  validatorTitle = () => {
    return (
      this.props.valid
      ? <h4 className="validator_title valid">
        {this.props.name}
        IS OK
      </h4>
      : <h4 className="validator_title invalid">
        {this.props.name}
        RULES
      </h4>)
  }
	render() {
		const validatorClass = classNames({
      'password_validator':   true,
      'visible':              this.props.visible,
      'invisible':            !this.props.visible
    });
		return (
			<div className={validatorClass}>
        <div className="validator_container">

          {this.validatorTitle()}

          <ul className="rules_list">

            <li className={classNames({'valid': this.props.validData.minChars})}>
              <i className="icon_valid"> <Icon iconType="circle_tick_filled"/> </i>
              <i className="icon_invalid"> <Icon iconType="circle_error"/> </i>
              <span className="error_message">{this.state.minCharacters} characters minimum</span>
            </li>

            <li className={classNames({'valid': this.props.validData.capitalLetters})}>
              <i className="icon_valid"> <Icon iconType="circle_tick_filled"/> </i>
              <i className="icon_invalid"> <Icon iconType="circle_error"/> </i>
              <span className="error_message">Contains at least {this.state.requireCapitals} capital letter</span>
            </li>

            <li className={classNames({'valid': this.props.validData.numbers})}>
              <i className="icon_valid"> <Icon iconType="circle_tick_filled"/> </i>
              <i className="icon_invalid"> <Icon iconType="circle_error"/> </i>
              <span className="error_message">Contains at least {this.state.requireNumbers} number</span>
            </li>

            <li className={classNames({'valid': this.props.validData.words})}>
              <i className="icon_valid"> <Icon iconType="circle_tick_filled"/> </i>
              <i className="icon_invalid"> <Icon iconType="circle_error"/> </i>
              <span className="error_message">Can't be {this.specialCharacters()}</span>
            </li>
          </ul>
        </div>
      </div>
		)
	}
}
