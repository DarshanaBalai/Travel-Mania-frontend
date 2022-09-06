import React from "react";
import { NavLink } from "react-router-dom";
import "./Createpage.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { BsSave } from "react-icons/bs";

function Createpage() {
  const activeStyle = {
    color: "red",
  };

  const [activeText, setActiveText] = useState(false);
  const [userInput, setUserInput] = useState(false);
  const [booking, setBooking] = useState(false);

  return (
    <div>
      <div className="backgroundCover">
        <h2>Create your Memories</h2>
        <div className="row">
          <div class="container text-center">
            <div class="row">
              <div class="col"></div>

              <div class="col-6 d-flex">
                {/* <div class="container text-center">
                <div class="row"> */}
                <div>
                  <div className="cards">
                    <ul>
                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Add To Do List</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setActiveText(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setActiveText(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Add Bookings</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Tourist Attractions</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Add Links</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <form>
                    {activeText && (
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="form-label"
                        >
                          Example textarea
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    )}
                  </form>
                  <form>
                    {booking && (
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile02"
                        />
                        <label class="input-group-text" for="inputGroupFile02">
                          Add
                        </label>
                      </div>
                    )}
                  </form>
                </div>
                <div>
                  <div className="cards">
                    <ul>
                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Notes</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Reminders</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Things To Buy</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Others</h5>
                            <div className="buttons">
                              <div className="buttonPlus">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(true);
                                  }}
                                >
                                  <BsPlusSquareFill className="icon" />
                                </button>
                              </div>
                              <div className="buttonSave">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  onClick={() => {
                                    setBooking(false);
                                  }}
                                >
                                  <BsSave className="icon" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div class="col"></div>
              {/* <div className="cards"></div> */}
            </div>
          </div>
        </div>

        <button className="back">
          <NavLink
            to="/Userpage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <MdOutlineArrowBackIosNew className="icon" />
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Createpage;
