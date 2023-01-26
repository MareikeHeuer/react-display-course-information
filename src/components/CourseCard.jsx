import React from "react";
import { useState, useEffect } from "react";

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
          <div>
            <h2>{apiData.title}</h2>
            <p>{apiData.next_start_formatted}</p>
          </div>
        ))}
    </div>
  );
}

export default CourseCard;
