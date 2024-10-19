import React from "react";
import { Link, Outlet } from "react-router-dom";
import { TOGGLE_ICON } from "../utils/constants";
import Sidebar from "../tasks/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuButton } from "../redux/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    console.log("Clicked");
    dispatch(toggleMenuButton());
  };

  const toggleMenu = useSelector((store) => store.toggleMenu.isToggleMenu);
  return (
    <>
      <div>
        <div>
          <div>
            <img
              className="w-12 absolute mt-3 ml-4 rounded-lg cursor-pointer"
              src={TOGGLE_ICON}
              alt="ToggleProblem"
              onClick={handleToggle}
            />
          </div>
          <ul className=" p-6 flex justify-end text-white font-bold font-serif bg-[#000046] ">
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
          <div className={toggleMenu ? " col-span-2" : "hidden"}>
            <Sidebar />
          </div>

          <div className={toggleMenu ? " col-span-10" : " col-span-12"}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
