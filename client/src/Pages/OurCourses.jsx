import React from "react";
import { GiSecretBook } from "react-icons/gi";
import Course from "../Components/Course";

const OurCourses = () => {
  const data = [
    { _id: 1, title: "SSC", icon: <GiSecretBook />, route: "/ssc" },
    { _id: 2, title: "HSC", icon: <GiSecretBook />, route: "/hsc" },
    { _id: 3, title: "ADMISSION", icon: <GiSecretBook />, route: "/admission" },
  ];
  return (
    <div className="mx-20 my-20">
      <h2 className="text-4xl font-bold">Our Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        {data.map((d) => (
          <Course key={d._id} d={d} />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
