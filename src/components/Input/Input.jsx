import React from 'react';
import PropTypes from 'prop-types';

import InputError from './InputError';
import PasswordValidator from './PasswordValidator';
import _ from 'underscore';

class Input extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    validator: PropTypes.bool,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    minCharacters: PropTypes.number,
    requireCapitals: PropTypes.number,
    requireLowercase: PropTypes.number,
    requireNumbers: PropTypes.number,
    specialCharacters: PropTypes.array,
    emptyMessage: PropTypes.string,
    errorMessage: PropTypes.string
  }

  constructor(props) {
    super(props);
    let valid = (this.props.isValid && this.props.isValid()) || true;
    this.state = {
      valid: valid,
      empty: _.isEmpty(this.props.value),
      focus: false,
      value: '',
      iconsVisible: !this.props.validator,
      errorMessage: this.props.emptyMessage,
      validator: this.props.validator,
      validatorVisible: false,
      type: this.props.type,
      minCharacters: this.props.minCharacters,
      requireCapitals: this.props.requireCapitals,
      requireLowercase: this.props.requireLowercase,
      requireNumbers: this.props.requireNumbers,
      specialCharacters: this.props.specialCharacters,
      isValidatorValid: {
        minChars: false,
        capitalLetters: false,
        lowercaseLetters: false,
        numbers: false,
        words: false,
        all: false
      },
      allValidatorValid: false
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      empty: _.isEmpty(event.target.value)
    });

    if (this.props.validator) {
      console.log(this.props.validator);
      this.checkRules(event.target.value)
    }

    // call input's validation method
    if (this.props.validate) {
      this.validateInput(event.target.value);
    }

    // call onChange method on the parent component for updating it's state
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  validateInput = (value) => {
    // trigger custom validation method in the parent component
    if (this.props.validate && this.props.validate(value)) {
      this.setState({valid: true, errorVisible: false});
    } else {
      this.setState({
        valid: false,
        errorMessage: !_.isEmpty(value)
          ? this.props.errorMessage
          : this.props.emptyMessage
      });
    }
  }

  componentWillReceiveProps(newProps) {
    // perform update only when new value exists and not empty
    if (newProps.value) {
      if (!_.isUndefined(newProps.value) && newProps.value.length) {
        if (this.props.validate) {
          this.validateInput(newProps.value);
        }
        this.setState({
          value: newProps.value,
          empty: _.isEmpty(newProps.value)
        });
      }
    }
  }

  isValid = () => {
    if (this.props.validate) {
      if (_.isEmpty(this.state.value) || !this.props.validate(this.state.value)) {
        this.setState({valid: false, errorVisible: true});
      }
    }
    return this.state.valid;
  }

  handleFocus = () => {
    this.setState({focus: true, validatorVisible: true});
    // hide error when validator is active
    if (this.props.validator) {
      this.setState({errorVisible: false})
    }
  }

  handleBlur = () => {
    this.setState({
      focus: false,
      errorVisible: !this.state.valid,
      validatorVisible: false
    });
  }

  mouseEnterError = () => {
    this.setState({errorVisible: true});
  }

  hideError = () => {
    this.setState({errorVisible: false, validatorVisible: false});
  }

  // validator function
  checkRules = (value) => {
    let validData = {
      minChars: !_.isEmpty(value)
        ? value.length >= parseInt(this.state.minCharacters)
        : false,
      capitalLetters: !_.isEmpty(value)
        ? this.countCapitals(value)
        : false,
      lowercaseLetters: !_.isEmpty(value)
        ? this.countLowercases(value)
        : false,
      numbers: !_.isEmpty(value)
        ? this.countNumbers(value) > 0
        : false,
      words: !_.isEmpty(value)
        ? this.checkWords(value)
        : false
    }
    let allValid = (validData.minChars && validData.capitalLetters && validData.numbers && validData.words);

    this.setState({isValidatorValid: validData, allValidatorValid: allValid, valid: allValid})
  }

  countCapitals = (value) => {
    let str = value;
    return str.replace(/[^A-Z]/g, "").length;
  }

  countLowercases = (value) => {
    let str = value;
    return str.replace(/[^a-z]/g, "").length;
  }
  countNumbers = (value) => {
    return /\d/.test(value);
  }

  checkWords = (value) => {
    return _.some(this.state.specialCharacters, (word) => {
      let matched = (value.includes(word))
        ? true
        : "";
      return matched
    })
  }

  validatorContainer = () => {
    return (
      this.state.validator
      ? <PasswordValidator
        ref="passwordValidator"
        visible={this.state.validatorVisible}
        name={this.props.text}
        value={this.state.value}
        validData={this.state.isValidatorValid}
        valid={this.state.allValidatorValid}
        specialCharacters={this.state.specialCharacters}
        minCharacters={this.props.minCharacters}
        requireCapitals={this.props.requireCapitals}
        requireLowercase={this.props.requireLowercase}
        requireNumbers={this.props.requireNumbers}/>
      : '')
  }

  render() {
    const {
      emptyMessage,
      errorMessage,
      validate,
      requireNumbers,
      requireCapitals,
      requireLowercase,
      minCharacters,
      specialCharacters,
      ...inputProps
    } = this.props;
    return (
    <div className='form-group'>
      <label className="control-label" htmlFor={this.props.text}>
        {this.props.text}
      </label>
      <div className="input-group input-cutomized">
        <input {...inputProps}
          className="form-control"
          placeholder={this.props.placeholder}
          id={this.props.text}
          defaultValue={this.props.defaultValue}
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus} onBlur={this.handleBlur}
          autoComplete="off"/>
        <InputError visible={this.state.errorVisible} errorMessage={this.state.errorMessage}/>
        <div className="validationIcons">
          <i className="glyphicon glyphicon-eye-close form-control-feedback" >
          </i>
        </div>
      </div>
      {this.validatorContainer()}
    </div>)
  }
}

export default Input
