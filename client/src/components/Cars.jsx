import { Link } from "react-router-dom";
import "../css/Cars.css";
import { Button } from "@mui/material";

const Cars = (carInfo) => {
  const detailURL = `/viewcars/${carInfo.id}`;
  return (
    <article className="car-information">
      <div className="car-name">{carInfo.name}</div>
      <div className="car-details">
        <div className="car-parts">
          {" "}
          <div>💺 Interior: {carInfo.interior}</div>
          <div>🛴 Wheels: {carInfo.wheel}</div>
          <div>😎 Roof: {carInfo.roof}</div>
          <div>🖌️ Exterior: {carInfo.exterior}</div>
        </div>
        <div className="car-price">
          💰 ${carInfo.price}
          <Link to={detailURL}>
            <Button
              className="car-price-details"
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
