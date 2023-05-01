import React, { Component } from "react";
import DeleteButton from "./delete";
export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.handleChange(name, value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit()
  }
  render() {
    const { position, jobDesc, company, dateJob } = this.props.work;

    return (
      <div className="w-10/12 p-10">
        <h3 className="text-3xl mb-4">Work Experience</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="position"
            value={position}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Job Position"
          ></input>
          <input
            type="text"
            name="jobDesc"
            value={jobDesc}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Job Description"
          ></input>
          <input
            type="text"
            name="company"
            value={company}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Company Name"
          ></input>
          <input
            type="text"
            name="dateJob"
            value={dateJob}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Date"
          ></input>
          <button className="bg-indigo-500 hover:bg-indigo-200 transition mr-8 rounded px-4 py-1">Add</button>
          <DeleteButton handleDelete={this.props.handleDelete} id={this.props.id} work={this.props.work}></DeleteButton>
        </form>
      </div>
    );
  }
}
