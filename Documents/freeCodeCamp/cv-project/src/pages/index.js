import React, { Component } from "react";
import Education from "./components/education";
import General from "./components/general";
import Render from "./components/render";
import Work from "./components/work";

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
        jobTitle: ""
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
      workList: []
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

  handleDelete = (id) => {
    const newList = this.state.educationList.filter(
      (elem, index) => index !== id
    );
    this.setState({
      educationList: newList,
    });
  };

  handleSubmitEducation = () => {
    const newList = [...this.state.educationList, this.state.education];
    this.setState({
      education: {
        descripcion: "",
        places: "",
        date: "",
      },
      educationList: newList,
    });
  };
  handleSubmitWork = () => {
    const newList = [...this.state.workList, this.state.work];
    this.setState({
      work: {
        position: "",
        jobDesc: "",
        company: "",
        dateJob: ""
      },
      workList: newList,
    });
  };

  render() {
    return (
      <div className="container mx-auto mt-10 gap-14 w-9/12 h-auto flex flex-col lg:flex-row border-2">
        <div className="w-10/12 h-auto border">
          <General
            personal={this.state.personal}
            handleChange={this.handleInfoChange}
          ></General>
          <Work
            work={this.state.work}
            handleSubmit={this.handleSubmitWork}
            handleChange={this.handleWorkChange}
          ></Work>
          <Education
            education={this.state.education}
            handleChange={this.handleEducationChange}
            handleSubmit={this.handleSubmitEducation}
          ></Education>
        </div>
        <Render
          educationList={this.state.educationList}
          personal={this.state.personal}
          workList={this.state.workList}
          education={this.state.education}
          work={this.state.work}
        ></Render>
      </div>
    );
  }
}
