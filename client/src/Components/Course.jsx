// GiSecretBook
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ d }) => {
  return (
    <Link to={d.route}>
      <div
        className="border p-10 flex flex-col justify-center items-center"
        style={{ color: "#1D1C51" }}
      >
        <span className="text-6xl">{d.icon}</span>
        <h3 className="font-bold text-3xl">{d.title}</h3>
      </div>
    </Link>
  );
};

export default Course;
