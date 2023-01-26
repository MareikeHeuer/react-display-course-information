import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CourseInfo() {
  const [ip, setIp] = useState(null);
  const [locationData, setLocationData] = useState("");
  const [courseInfoData, setCourseInfoData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((iPData) => {
        setIp(iPData);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://api.ipstack.com/${ip}?access_key=2364592fb90c827cd52868cc323d5c90`
    )
      .then((res) => res.json())
      .then((locationData) => {
        setLocationData(locationData);
      });
  }, [ip]);

  useEffect(() => {
    fetch(`https://private-e05942-courses22.apiary-mock.com/courses/${slug}`)
      .then((res) => res.json())
      .then((apiData) => {
        setCourseInfoData(apiData);
      });
  }, [slug]);

  return (
    courseInfoData && (
      <div className="course-info--container">
        <h1>{courseInfoData.description}</h1>
        <div className="img-wrapper">
          <img
            src="https://images.careerfoundry.com/public/frontpages/pp-feature/full-stack-web-development-course-header-418-204.jpg"
            alt="Headshot of smiling woman"
          />
        </div>
        <h2>{`Start date: ${moment(courseInfoData.start_dates[0]).format(
          "dddd, MMMM Do, YYYY"
        )}`}</h2>
        <p>{`Following start dates: ${moment(
          courseInfoData.start_dates[1]
        ).format("dddd, MMMM Do, YYYY")} | ${moment(
          courseInfoData.start_dates[2]
        ).format("dddd, MMMM Do, YYYY")}`}</p>

        {locationData && (
          <p className="course-info--price">
            Price:{" "}
            {locationData.continent_code === "EU"
              ? `€${courseInfoData.prices[1].amount}`
              : `$${courseInfoData.prices[0].amount}`}
          </p>
        )}
        <Link to="/">
          <button className="course-card--button">Back to courselist </button>
        </Link>
      </div>
    )
  );
}

export default CourseInfo;
