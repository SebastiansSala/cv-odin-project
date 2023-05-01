import React, { Component } from "react";
import DeleteButton from "./delete";

export default class Education extends Component {
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
    const { descripcion, places, date } = this.props.education;

    return (
      <div className="w-10/12 border p-10">
        <h3 className="text-3xl mb-4">Education Experience</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Descripcion"
          ></input>
          <input
            type="text"
            id='places'
            name="places"
            value={places}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Place"
          ></input>
          <input
            type="text"
            id='date'
            name="date"
            value={date}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
            placeholder="Date"
          ></input>
          <button className="bg-indigo-500 hover:bg-indigo-200 transition mr-8 rounded px-4 py-1">Add</button>
          <DeleteButton handleDelete={this.props.handleDelete} id={this.props.id}></DeleteButton>
        </form>
      </div>
    );
  }
}
