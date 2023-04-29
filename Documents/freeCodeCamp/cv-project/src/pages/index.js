import React, { Component } from "react";
import Education from "./components/education";
import General from "./components/general";
import Render from "./components/render";
import Work from "./components/work";

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      personal: {
        name: "",
        tel: "",
        email: "",
        place: "",
        desc: "",
      },
      education: {
        descripcion: "",
        places: "",
        date: ""
      },
      work: {
        position: "",
        jobDesc: "",
        company: "",
        dateJob: "",
      }
    };
  }

  handleInfoChange = (name, value) => {
    this.setState(prevState => ({
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  }

  handleEducationChange = (name, value) => {
    this.setState(prevState => ({
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  }

  handleWorkChange = (name, value) => {
    this.setState(prevState => ({
      work: {
        ...prevState.work,
        [name]: value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container mx-auto mt-10 gap-14 w-9/12 h-auto flex flex-col lg:flex-row border-2">
        <div className="w-10/12 h-auto border">
          <General personal={this.state.personal} handleChange={this.handleInfoChange}></General>
          <Education education={this.state.education} handleChange={this.handleEducationChange}></Education>
          <Work work={this.state.work} handleChange={this.handleWorkChange}></Work>
        </div>
        <Render personal={this.state.personal} education={this.state.education} work={this.state.work}></Render>
      </div>
    );
  }
}
