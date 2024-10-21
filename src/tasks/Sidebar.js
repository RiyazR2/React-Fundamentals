import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section className="bg-[#764ba2] h-fit text-white font-semibold ">
        <h3 className="p-4 font-bold text-orange-200">Problems</h3>
        <ul className="p-4">
          <li className="py-2 border-b-2">
            <Link to={"/task1"}>Task1</Link>
          </li>
          <li className="py-2 border-b-2">
            <Link to={"/task2"}>Task2</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
