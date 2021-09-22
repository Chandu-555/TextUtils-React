import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
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
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* Color palets */}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px'}} onClick></div>
          </div> */}

          {/* switch */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
            <input
              className="form-check-input"
              onClick ={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {`${props.mode === 'light' ? 'Enable Dark Mode': 'Disable Dark Mode'}`}
            </label>
          </div>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

// this is the types of props(string,array,number,object)
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// if you wanna set default props or you haven't pass any values through component
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
