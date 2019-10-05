import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessage } from '../../actions/message'

export class Message extends Component {
  static propTypes = {
    message: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    return (
      <Fragment>
        <h2>Message</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message.message // first message: message reducer, second: message
})

export default connect(mapStateToProps, { getMessage })(Message);