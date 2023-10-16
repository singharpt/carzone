import React from "react";
import "../App.css";
import Car from "../components/Car";

const CreateCar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-100px",
      }}
    >
      <Car />
    </div>
  );
};

export default CreateCar;
