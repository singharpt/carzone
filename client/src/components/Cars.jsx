import { Link } from "react-router-dom";
import "../css/Cars.css";
import { Button } from "@mui/material";
import { useState } from "react";

const Cars = (carInfo) => {
  const detailURL = `/viewcars/${carInfo.id}`;

  return (
    <article className="cars-information">
      <div className="cars-name">{carInfo.name}</div>
      <div className="cars-details">
        <div className="cars-parts">
          {" "}
          <div className="truncate-text">
            <span>💺 Interior: </span>
            <span>{carInfo.interior === -1 ? "" : carInfo.interior}</span>
          </div>
          <div className="truncate-text">
            🛴 Wheels: {carInfo.wheel === -1 ? "" : carInfo.wheel}
          </div>
          <div className="truncate-text">
            😎 Roof: {carInfo.roof === -1 ? "" : carInfo.roof}
          </div>
          <div className="truncate-text">
            🖌️ Exterior: {carInfo.exterior === -1 ? "" : carInfo.exterior}
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
