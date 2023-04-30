import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, tel, email, place, desc } = this.props.personal;

    return (
      <div className="w-10/12 border p-10">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
          ></input>
          <input
            type="text"
            name="tel"
            value={tel}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
          ></input>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
          ></input>
          <input
            type="text"
            name="place"
            value={place}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6 rounded"
          ></input>
          <input
            type="text"
            name="desc"
            value={desc}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 px-6 rounded"
          ></input>
        </form>
      </div>
    );
  }
}
