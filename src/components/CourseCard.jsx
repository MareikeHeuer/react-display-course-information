import React from "react";

function CourseCard() {
  const courseCardData = [
    {
      slug: "voice-user-interface-design-with-amazon-alexa",
      title: "Voice User Interface Design",
      url: "https://careerfoundry.com/en/courses/voice-user-interface-design-with-amazon-alexa/",
      next_start: "2022-10-10",
      next_start_formatted: "Monday, October 10th, 2022",
    },
    {
      slug: "full-stack-immersion",
      title: "Full-Stack Immersion",
      url: "https://careerfoundry.com/en/courses/become-a-web-developer/",
      next_start: "2022-10-17",
      next_start_formatted: "Monday, October 17th, 2022",
    },
  ];

  return (
    <div>
      {courseCardData.map((data) => (
        <div>
          <h2>{data.title}</h2>
          <p>{data.next_start_formatted}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseCard;
