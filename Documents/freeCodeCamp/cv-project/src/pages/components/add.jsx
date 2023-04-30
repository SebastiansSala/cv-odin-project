import React, { Component } from "react";

export default class Add extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.handleClick();
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} className="bg-indigo-500 hover:bg-indigo-200 transition hover:translate-y-1 rounded px-4 py-1">Add</button>
      </>
    );
  }
}
