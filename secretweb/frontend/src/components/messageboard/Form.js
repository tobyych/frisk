import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addMessage } from '../../actions/messages';


export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  onChange = e => this.setState({
    [e.target.name]: e.target.value
  })

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const message_ = { name, email, message };
    this.props.addMessage(message_);
    this.setState({
      name: "",
      email: "",
      message: ""
    })
  }

  static propTypes = {
    addMessage: PropTypes.func.isRequired,
  }

  render() {
    const { name, email, message } = this.state;
    return (

      <div className="card card-body mt-4 mb-4">
        <h2>Add Message</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
                    </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addMessage })(Form);
