import React, { Component } from "react";
import Remove from "./deleteList";
import Update from "./update";

export default class RenderEducationList extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = (id) => {
    this.props.handleDelete(id);
  }

  render() {
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
                      <div className="flex justify-between mt-4">
                        <p className="max-w-auto">{elem.descripcion}</p>
                        <div className="flex">
                          <p className="pr-2 border-r-2 border-black">
                            {elem.places}
                          </p>
                          <p className="pl-2 mr-2">{elem.date}</p>
                          <Update></Update>
                          <Remove onClick={() => this.props.handleDelete(index)}></Remove>
                        </div>
                      </div>
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
