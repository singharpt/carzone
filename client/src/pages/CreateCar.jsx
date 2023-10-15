import React from "react";
import "../App.css";
import Car from "../components/Car";

const CreateCar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center" /* Horizontally center content */,
        alignItems: "center" /* Vertically center content */,
        height: "100vh" /* 100% of the viewport height */,
      }}
    >
      <Car />
    </div>
  );
};

export default CreateCar;
