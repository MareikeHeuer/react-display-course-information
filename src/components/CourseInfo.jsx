import React from "react";
import moment from "moment";
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
      <div>
        <h1>{courseInfoData.description}</h1>
        <h2>{`Start date: ${moment(courseInfoData.start_dates[0]).format(
          "dddd, MMMM Do, YYYY"
        )}`}</h2>
        <p>{`Following start dates: ${moment(
          courseInfoData.start_dates[1]
        ).format("dddd, MMMM Do, YYYY")} | ${moment(
          courseInfoData.start_dates[2]
        ).format("dddd, MMMM Do, YYYY")}`}</p>

        {locationData && (
          <p>
            Price:{" "}
            {locationData.continent_code === "EU"
              ? `€${courseInfoData.prices[1].amount}`
              : `$${courseInfoData.prices[0].amount}`}
          </p>
        )}
      </div>
    )
  );
}

export default CourseInfo;
