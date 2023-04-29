import React, { Component } from "react";

export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };
  render() {
    const { position, jobDesc, company, dateJob } = this.props.work;

    return (
      <div className="w-10/12 border p-10">
        <h3 className="text-2xl">Personal Details</h3>
        <form>
          <input
            type="text"
            name="position"
            value={position}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
          ></input>
          <input
            type="text"
            name="jobDesc"
            value={jobDesc}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            border-gray-600
          ></input>
          <input
            type="text"
            name="company"
            value={company}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            border-gray-600
          ></input>
          <input
            type="text"
            name="dateJob"
            value={dateJob}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
          ></input>
        </form>
      </div>
    );
  }
}
