import React from "react";
import logo from "../img/download.jpeg";

function Nav() {
  return (
    <>
      <div className="navbar bg-base-100 sticky z-40 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>About</a>
              </li>

              <li>
                <a>Works</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" className="w-[70px]" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex pl-96">
          <ul className="menu menu-horizontal px-1 font-mono">
            <li>
              <a>About</a>
            </li>

            <li>
              <a>Works</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
