import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const navigation = props => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navigation;
