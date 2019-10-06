import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessage } from '../../actions/message'
import messageboard from '../../reducers/messageboard';

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
          <tbody>
            {this.props.message.map(messageboard => (
              <tr key={messageboard.id}>
                <td>{messageboard.id}</td>
                <td>{messageboard.name}</td>
                <td>{messageboard.email}</td>
                <td>{messageboard.message}</td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message.message // first message: message reducer, second: message
})

export default connect(mapStateToProps, { getMessage })(Message);