import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import InputError from '../InputError/InputError';

class Input extends from React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		ref: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    validator: PropTypes.bool,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    minCharacters: PropsType.number,
    requireCapitals: PropsType.number,
    requireNumbers: PropsType.number,
    forbiddenWords: PropTypes.string,
    emptyMessage: PropTypes.string,
    errorMessage: PropTypes.string
	}
  
	constructor(props) {
		super(props);
	}

	render() {}
}
