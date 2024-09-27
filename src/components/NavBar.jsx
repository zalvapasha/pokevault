import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/pokevault.png";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border border-t-0 border-l-0 border-r-0 border-b-4 border-black">
      <nav className="max-w-[1024px] w-full mx-auto  sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center px-2 justify-between">
          <div className="flex gap-2">
            <img src={logo} className="w-10 h-10 " />
            <a
              className="flex-none text-3xl font-bold focus:outline-none focus:opacity-80 cursor-default"
              aria-label="Brand"
            >
              PokeVault
            </a>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block px-4"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NavLink
              className="text-lg font-medium  text-gray-800 hover:text-gray-400 focus:outline-none"
              href="#"
              to="/"
              aria-current="page"
            >
              Menu
            </NavLink>
            <NavLink
              className="text-lg font-medium text-gray-800 hover:text-gray-400 focus:outline-none"
              to="/favorites"
            >
              Favorites
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
