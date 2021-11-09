import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow py-0 pt-0 pb-0 mt-0`}
        id="nav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  {props.contact}
                </a>
              </li>
              
              <li class="nav-item dropdown">
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Theme
                </a>
              
            
                <ul class="dropdown-menu border-dark rounded-3 " aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" >
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Primary
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Success
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Energetic
                        </label>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" >
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Default
                        </label>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex mx-1">
              <input
                className={`form-control me-2 bg-${props.mode === "light" ? "dark" : "light"
                  }text-${props.mode === "light" ? "dark" : "light"}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"
                  }`}
                type="submit"
              >
                Search
              </button>
            </form>
            <div
              className="form-check form-switch mb-3 mr-4 my-3 py-2"
              onClick={props.toggleMode}
            >
              <label
                className={`form-check-label text-${props.mode === "light" ? "dark" : "light"
                  }`}
                htmlFor="flexSwitchCheckChecked"
              >
                <strong>
                  Enable {props.mode === "light" ? "Dark" : "Light"} Mode
                </strong>
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string,
  contact: PropTypes.string,
};

// Default props
Navbar.defaultProps = {
  title: "Set title here",
  home: "Home link",
  about: "about link",
  contact: "contact link",
};
