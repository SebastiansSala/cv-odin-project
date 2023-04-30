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

  render() {
    const { descripcion, places, date } = this.props.education;

    return (
      <div className="w-10/12 border p-10">
        <h3 className="text-2xl">Personal Details</h3>
        <form>
          <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
          ></input>
          <input
            type="text"
            name="places"
            value={places}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
          ></input>
          <input
            type="text"
            name="date"
            value={date}
            onChange={this.handleChange}
            className="w-full border-2 border-gray-600 mb-2 px-6"
          ></input>
          <DeleteButton handleDelete={this.props.handleDelete} key={this.props.key}></DeleteButton>
        </form>
      </div>
    );
  }
}
