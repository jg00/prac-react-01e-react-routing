import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";

import Courses from "../Courses/Courses";
// import Course from "../Course/Course";
import Users from "../Users/Users";
import NoMatch from "../../components/NoMatch/NoMatch";

class Manage extends Component {
  render() {
    return (
      <Aux>
        <Switch>
          {/* <Route path="/course/:id/title/:title" component={Course} /> */}
          {/* <Route path="/courses/:courseid/:title" component={Course} /> */}
          {/* <Route path="/courses/course" component={Course} /> */}
          {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="courses" />
          <Route component={NoMatch} />
        </Switch>
      </Aux>
    );
  }
}

export default Manage;
