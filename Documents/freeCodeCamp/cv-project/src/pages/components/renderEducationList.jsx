import React, { Component } from "react";
import Remove from "./deleteList";
import Update from "./update";

export default class RenderEducationList extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = (id) => {
    this.props.handleDelete(id);
  };

  render() {
    const { descripcion, places, date } = this.props.education || {};

    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Education List
                </h3>
                <div className="mt-2">
                  {this.props.educationList.map((elem, index) => {
                    return (
                      <form key={index} onSubmit={(e) => e.preventDefault()}>
                        <input
                          type="text"
                          name="descripcion"
                          placeholder={elem.descripcion}
                          onChange={(e) => this.props.handleChange(e)}
                          className="w-full border-2 border-gray-600 mb-2 px-6"
                        ></input>
                        <input
                          type="text"
                          name="places"
                          placeholder={elem.places}
                          onChange={(e) => this.props.handleChange(e)}
                          className="w-full border-2 border-gray-600 mb-2 px-6"
                        ></input>
                        <input
                          type="text"
                          name="date"
                          placeholder={elem.date}
                          onChange={(e) => this.props.handleChange(e)}
                          className="w-full border-2 border-gray-600 mb-2 px-6"
                        ></input>
                        <Update
                          onClick={(e) => this.props.handleUpdate(index, e)}
                        ></Update>
                        <Remove
                          onClick={(e) => this.props.handleDelete(index, e)}
                        ></Remove>
                      </form>
                    );
                  })}
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={this.props.handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
