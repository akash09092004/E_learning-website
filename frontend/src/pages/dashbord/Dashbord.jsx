import React from "react";
import "./dashbord.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Dashbord = () => {
  const { mycourse, courses } = CourseData();

  const displayCourses = mycourse && mycourse.length > 0 ? mycourse : courses;

  return (
    <div className="student-dashboard">
      <h2>All Enrolled Courses</h2>
      <div className="dashboard-content">
        {displayCourses && displayCourses.length > 0 ? (
          displayCourses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No course Enrolled Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashbord;
