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
        console.log(apiData);
      });
  }, []);

  return (
    <div>
      {courseCardData &&
        courseCardData.map((apiData) => (
          <div key={uuidv4()}>
            <h2>{apiData.title}</h2>
            <p>{apiData.next_start_formatted}</p>
            <Link to={`/courses/${apiData.slug}`}>
              <button>View program &#8594;</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default CourseCard;
