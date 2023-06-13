import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link className="navbar-brand" href="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/product'>
                Product
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to='/blog'>
                Blog
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
