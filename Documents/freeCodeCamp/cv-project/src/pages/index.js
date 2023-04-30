import React, { Component } from "react";
import Education from "./components/education";
import General from "./components/general";
import Render from "./components/render";
import Work from "./components/work";
import Add from "./components/add";

export default class Home extends Component {
  constructor(props) {
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
        date: "",
      },
      educationList: [],
      work: {
        position: "",
        jobDesc: "",
        company: "",
        dateJob: "",
      },
      educationCount: 1,
    };
  }

  handleInfoChange = (name, value) => {
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  handleEducationChange = (name, value) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  };

  handleWorkChange = (name, value) => {
    this.setState((prevState) => ({
      work: {
        ...prevState.work,
        [name]: value,
      },
    }));
  };

  handleAddEducation = () => {
    const newList = [...this.state.educationList, this.state.education];
    this.setState((prevState) => ({
      educationCount: prevState.educationCount + 1,
      educationList: newList,
    }));
  };

  handleDelete = (id) => {
    const newList = this.state.educationList.filter((elem, index) => index !== id);
    this.setState({
      educationList: newList,
    });
  };
  

  render() {
    const educationComponents = [];

    for (let i = 0; i < this.state.educationCount; i++) {
      educationComponents.push(
        <Education
          key={i}
          education={this.state.education}
          handleChange={this.handleEducationChange}
          handleDelete={this.handleDelete}
        />
      );
    }

    return (
      <div className="container mx-auto mt-10 gap-14 w-9/12 h-auto flex flex-col lg:flex-row border-2">
        <div className="w-10/12 h-auto border">
          <h3 className="text-2xl">Personal Details</h3>
          <General
            personal={this.state.personal}
            handleChange={this.handleInfoChange}
          ></General>
          <h3>Work Experience</h3>
          <Work
            work={this.state.work}
            handleChange={this.handleWorkChange}
          ></Work>
          <h3>Education</h3>
          {educationComponents}
          <Add handleClick={this.handleAddEducation}></Add>
        </div>
        <Render
          personal={this.state.personal}
          education={this.state.education}
          work={this.state.work}
        ></Render>
      </div>
    );
  }
}
