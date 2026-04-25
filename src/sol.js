import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle  Dark Mode
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#020334";
      showAlert(`Dark mode has been enabled`, "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert(`Light mode has been enabled`, "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

Navbar.js

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* Enable Dark Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              DarkMode
            </label>
          </div>

          {/* Search Button */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

