import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    err_msg: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, alert, err_msg } = this.props;
    if (error != prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (err_msg != prevProps.err_msg) {
      if (err_msg.deleteMessage) alert.success(err_msg.deleteMessage);
      if (err_msg.addMessage) alert.success(err_msg.addMessage);
      if (err_msg.passwordNotMatch) alert.error(err_msg.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  err_msg: state.err_msgs
});

export default connect(mapStateToProps)(withAlert()(Alerts));
