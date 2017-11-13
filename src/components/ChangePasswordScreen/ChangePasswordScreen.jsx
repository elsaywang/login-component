import React from 'react';
import PropTypes from 'prop-types';
import SignInPrompt from '../SignInPrompt/SignInPrompt';

class ChangePasswordScreen extends React.Component {
  static propTypes = {
      store: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  validateForm() {
  }

  render() {
    return (
      <div className="screen">
        <SignInPrompt />
      </div>
    )
  }
}

export default ChangePasswordScreen;
