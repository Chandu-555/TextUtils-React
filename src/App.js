import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// for routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  // created function to set new setAlert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    // for making stay alert for 3 sec
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  // function for changing the mode(light/dark)
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title='TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "About TextUtils" /> */}
      {/* <Navbar  /> */}
      
        {/* Routing setup */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          {/* /users ---> component 1 */}
          {/* /users/home ---> component 2 */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm
              showAlert={showAlert}
              heading="Use TextUtils - Word Counter, Character Counter, Remove extra spaces, Capitalize the text"
              mode={mode}
            />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
