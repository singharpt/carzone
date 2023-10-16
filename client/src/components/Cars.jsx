import { Link } from "react-router-dom";
import "../css/Cars.css";
import { Button } from "@mui/material";
import { useState } from "react";

const Cars = (carInfo) => {
  const detailURL = `/viewcars/${carInfo.id}`;

  //update parts color state
  const update = () => {
    carInfo.updateParts(
      "interiorColor",
      carInfo.globalStates.interiors,
      carInfo.interior
    );
    carInfo.updateParts(
      "exteriorColor",
      carInfo.globalStates.exteriors,
      carInfo.exterior
    );
    carInfo.updateParts(
      "wheelColor",
      carInfo.globalStates.wheels,
      carInfo.wheel
    );
    carInfo.updateParts("roofColor", carInfo.globalStates.roofs, carInfo.roof);
  };

  console.log(carInfo.parts);

  useState(() => {
    update();
  }, []);

  return (
    <article className="cars-information">
      <div className="cars-name">{carInfo.name}</div>
      <div className="cars-details">
        <div className="cars-parts">
          {" "}
          <div className="truncate-text">
            <span>💺 Interior: </span>
            <span>
              {carInfo.parts.interiorColor === null
                ? carInfo.interior
                : carInfo.parts.interiorColor}
            </span>
          </div>
          <div className="truncate-text">
            🛴 Wheels:{" "}
            {carInfo.parts.wheelColor === null
              ? carInfo.wheel
              : carInfo.parts.wheelColor}
          </div>
          <div className="truncate-text">
            😎 Roof:{" "}
            {carInfo.parts.roofColor !== -1 ? carInfo.parts.roofColor : ""}
          </div>
          <div className="truncate-text">
            🖌️ Exterior:{" "}
            {carInfo.parts.exteriorColor === null
              ? carInfo.exterior
              : carInfo.parts.exteriorColor}
          </div>
        </div>
        <div className="cars-price">
          💰 ${carInfo.price}
          <Link to={detailURL}>
            <Button
              className="cars-price-details"
              style={{
                backgroundColor: "red",
                color: "white",
                fontSize: "25px",
                padding: "10px",
                width: "200px",
              }}
            >
              DETAILS
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cars;
