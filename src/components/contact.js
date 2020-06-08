import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../actions/contactActions";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    this.props.createContact(this.state.name);
  }

  render() {
    console.log(this.props);
    let name;
    return (
      <div>
        <h1>Contacts app</h1>
        <hr />
        <ul>{console.log(this.props.contact)}</ul>
        <div>
          <h3>Add Contact </h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
        {this.props.contact
          ? this.props.contact.map((contact, i) => (
              <li key={i}>{contact.name}</li>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactReducer.contact,
});
export default connect(mapStateToProps, {
  createContact,
})(Contact);
