import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/task1"}>Task1</Link>
        </li>
        <li>
          <Link to={"/task2"}>Task2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
