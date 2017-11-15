import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';

export default class InputError extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    visible: PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.state = {
      message: 'Input is invalid'
    }
  }

  render() {
    let errorClass = classNames({
      'error_container': true,
      'visible': this.props.visible,
      'invisible': !this.props.visible
    });
    return (<div className={errorClass}>
      <i className='glyphicon glyphicon-exclamation-sign error_msg'>
        <span>{this.props.errorMessage}</span>
      </i>
    </div>)
  }
}
