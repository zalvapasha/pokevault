import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/pokevault.png";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border border-t-0 border-l-0 border-r-0 border-b-4 border-black">
      <nav className="max-w-[1024px] w-full mx-auto  sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center px-2 justify-between">
          <div className="flex gap-2">
            <img src={logo} className="w-10 h-10 " />
            <a
              className="flex-none text-black text-3xl font-bold focus:outline-none cursor-default"
              aria-label="Brand"
            >
              PokeVault
            </a>
          </div>
          <div className="dropdown dropdown-end sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-outline m-1">
              <IoMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 border-black border-2 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className="text-lg font-medium  text-gray-800 hover:text-gray-400 focus:outline-none"
                  href="#"
                  to="/"
                  aria-current="page"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-lg font-medium text-gray-800 hover:text-gray-400 focus:outline-none"
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
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
