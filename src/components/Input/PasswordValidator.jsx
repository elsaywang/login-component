import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

export default class PasswordValidator extends React.Component {
	static propTypes = {};

	constructor(props) {
		super(props);
    static propTypes = {
      value:PropTypes.string,
      name: PropTypes.string,
  		minCharacters: PropTypes.number,
  		requireCapitals: PropTypes.number,
  		requireNumbers: PropTypes.number,
  		specialCharacters: PropTypes.bool,
  		errorMessage: PropTypes.string
  	}
	}
}
