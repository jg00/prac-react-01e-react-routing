import React, { Component } from "react";
import { Route } from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";

import Courses from "../Courses/Courses";
import Users from "../Users/Users";

class Manage extends Component {
  render() {
    return (
      <Aux>
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
      </Aux>
    );
  }
}

export default Manage;
