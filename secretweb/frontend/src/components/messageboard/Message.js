import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessage, deleteMessage } from '../../actions/messages';

export class Message extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    getMessage: PropTypes.func.isRequired,
    deleteMessage: PropTypes.func.isRequired
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
            {this.props.messages.map(message => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                <td>
                  <button onClick={this.props.deleteMessage.bind(this, message.id)} className="btn btn-danger btn-sm">
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages // first message: message reducer, second: message
})

export default connect(
  mapStateToProps,
  { getMessage, deleteMessage }
)(Message);