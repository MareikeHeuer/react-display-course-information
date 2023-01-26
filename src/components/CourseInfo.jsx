import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CourseInfo() {
  const [courseInfoData, setCourseInfoData] = useState(null);
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    fetch(`https://private-e05942-courses22.apiary-mock.com/courses/${slug}`)
      .then((res) => res.json())
      .then((apiData) => {
        setCourseInfoData(apiData);
        console.log(apiData);
      });
  }, [slug]);

  return (
    courseInfoData && (
      <div>
        <h1>{courseInfoData.description}</h1>
        <h2>{courseInfoData.start_dates[0]}</h2>
        <p>{`Following start dates: ${courseInfoData.start_dates[1]} | ${courseInfoData.start_dates[2]}`}</p>
      </div>
    )
  );
}

export default CourseInfo;
