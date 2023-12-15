import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = false;
  return (
    <div className="px-3 max-w-6xl mx-auto bg-white border-b shadow-lg sticky top-0 z-50">
      <header className="flex justify-between items-center">
        <div className="">
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt=""
            className=" h-5 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <ul className="flex space-x-10 ">
          <NavLink to={"/"}>
            <li
              className={`text-gray-700 text-sm font-semibold cursor-pointer hover:opacity-70 my-3 ${
                location.pathname === "/" && "border-b-[3px] border-b-red-500"
              }`}
            >
              Home
            </li>
          </NavLink>

          <NavLink to={"/offers"}>
            <li
              className={`text-gray-700 text-sm font-semibold cursor-pointer hover:opacity-70 my-3 ${
                location.pathname === "/offers" &&
                "border-b-[3px] border-b-red-500"
              }`}
            >
              Offers
            </li>
          </NavLink>
          <NavLink to={"/profile"}>
            {currentUser ? (
              <li
                className={`text-gray-700 text-sm font-semibold cursor-pointer hover:opacity-70 my-3 ${
                  location.pathname === "/profile" &&
                  "border-b-[3px] border-b-red-500"
                }`}
              >
                Profile
              </li>
            ) : (
              <li
                className={`text-gray-700 text-sm font-semibold cursor-pointer hover:opacity-70 my-3 ${
                  location.pathname === "/signin" &&
                  "border-b-[3px] border-b-red-500"
                }`}
              >
                Sign in
              </li>
            )}
          </NavLink>
        </ul>
      </header>
    </div>
  );
};

export default Header;
