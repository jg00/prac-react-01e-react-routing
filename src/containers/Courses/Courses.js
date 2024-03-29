import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./Courses.css";
import Course from "../Course/Course";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Routing Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <Link
                key={course.id}
                // to={"/course/" + course.id + "/title/" + course.title}
                // to="/courses/course"
                // to={this.props.match.url + "/course"}
                // to={this.props.match.url + "/" + course.id}

                to={{
                  pathname: this.props.match.url + "/" + course.id,
                  search: "?title=" + course.title
                }}
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
        </section>

        {/* /courses/:courseId" */}
        <Route path={this.props.match.url + "/:courseId"} component={Course} />
      </div>
    );
  }
}

export default Courses;
