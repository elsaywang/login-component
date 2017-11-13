import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

class InputError extends React.Component {
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
			<span>{this.props.errorMessage}</span>
		</div>)
	}
}
