import React, { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import Alert from "./components/Alert";
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [Mode, SetMode] = useState("light");
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };
  const toggleMode = () => {
    if (Mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "#042743";
      //showAlert("Dark mode has been enabled", "success");
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="Textutils"
        aboutText="About"
        Mode={Mode}
        toggleMode={toggleMode}
      />

      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              exact
              path="/"
              element={ */}
        <TextForm heading="Enter the text to analyze below" Mode={Mode} />
        {/* }
            />
          </Routes> */}
        {/* <TextForm heading="Enter the text to analyze below" Mode={Mode} />
          <About /> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
