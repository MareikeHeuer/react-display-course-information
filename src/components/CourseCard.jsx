import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

function CourseCard() {
  const [courseCardData, setCourseCardData] = useState(null);

  useEffect(() => {
    fetch(`https://private-e05942-courses22.apiary-mock.com/courses`)
      .then((res) => res.json())
      .then((apiData) => {
        setCourseCardData(apiData);
      });
  }, []);

  return (
    <div className="container">
      {courseCardData &&
        courseCardData.map((apiData) => (
          <div key={uuidv4()} className="course-card">
            <div className="course-card--top">
              <h2>{apiData.title}</h2>
            </div>
            <div className="course-card--middle">
              <h3>Start Date:</h3>
              <p>{apiData.next_start_formatted}</p>
            </div>
            <Link to={`/courses/${apiData.slug}`}>
              <button className="course-card--button">
                View program &#8594;
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default CourseCard;
