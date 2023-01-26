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
    <div>
      <h1>This is the course info component</h1>
    </div>
  );
}

export default CourseInfo;
