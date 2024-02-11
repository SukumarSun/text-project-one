import React from "react";
import {Link} from "react-router-dom"


export default function Navbar(props) {
   
   const navbg=props.mode==="dark"?"light":"dark"
  
  return (
    <nav
      className="navbar  navbar-expand-lg bg-body-tertiary"
      data-bs-theme={navbg}
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/">
          Navbar
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
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                TextUtils
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <div className=" mx-2 my-auto form-check form-switch">
              <input
                onClick={props.changeRed}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="redswithc"
              />
             
            </div>
            <label className={`my-auto text-${props.mode==="light"?"light":"dark"} form-check-label`} htmlFor="flexSwitchCheckDefault">
                Red theme
              </label>
            <div className=" mx-2 my-auto form-check form-switch">
              <input
                onClick={props.toggle}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
             
            </div>
            <label className={`my-auto text-${props.mode==="light"?"light":"dark"} form-check-label`} htmlFor="flexSwitchCheckDefault">
                Theme
              </label>
          </form>
        </div>
      </div>
    </nav>
  );
}
