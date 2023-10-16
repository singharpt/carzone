import { Link } from "react-router-dom";
import "../css/Cars.css";
import { Button } from "@mui/material";

const Cars = (carInfo) => {
  const detailURL = `/viewcars/${carInfo.id}`;
  return (
    <article className="cars-information">
      <div className="cars-name">{carInfo.name}</div>
      <div className="cars-details">
        <div className="cars-parts">
          {" "}
          <div>💺 Interior: {carInfo.interior}</div>
          <div>🛴 Wheels: {carInfo.wheel}</div>
          <div>😎 Roof: {carInfo.roof !== -1 ? carInfo.roof : ""}</div>
          <div>🖌️ Exterior: {carInfo.exterior}</div>
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
