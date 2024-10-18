import React from "react";
import { Link, Outlet } from "react-router-dom";
import { TOGGLE_ICON } from "../utils/constants";
import Sidebar from "../tasks/Sidebar";

const Header = () => {
  return (
    <>
      <div>
        <div className="">
          <div>
            <img
              className="w-12 absolute mt-3 ml-4 rounded-lg cursor-pointer"
              src={TOGGLE_ICON}
              alt="ToggleProblem"
            />
          </div>
          <ul className=" p-6 flex justify-end text-white font-bold font-serif bg-[#000046] w-full">
            <li className="mx-6">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mx-6">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mx-6">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-12">
          <div className=" col-span-2">
            <Sidebar />
          </div>

          <div className={false ? " col-span-10" : " col-span-12"}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
