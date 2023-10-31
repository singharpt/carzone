import React from "react";
import "../App.css";
import CarForm from "../components/CarForm";

const EditCar = () => {
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
      <CarForm />
    </div>
  );
};

export default EditCar;
