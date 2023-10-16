import React, { useState, useEffect, useContext } from "react";
import Cars from "../components/Cars";
import "../css/ViewCars.css";
import { MyContext } from "../components/ContextProvider";
import staticAPI from "../services/staticAPI";
import { Link } from "react-router-dom";

const ViewCars = () => {
  const { getStates, updateStates } = useContext(MyContext);
  const cars = getStates("carState");
  useEffect(() => {
    (async () => {
      const carsResponse = await staticAPI.getAllCars();
      updateStates("carState", carsResponse);
    })();
  }, []);

  return (
    <main className="view-cars">
      {cars && cars.length > 0 ? <p>YOUR CARS COLLECTION</p> : <></>}
      {cars && cars.length > 0 ? (
        cars.map((carInfo) => (
          <Cars
            key={carInfo.id}
            id={carInfo.id}
            name={carInfo.name}
            interior={carInfo.interior}
            exterior={carInfo.exterior}
            wheel={carInfo.wheel}
            roof={carInfo.roof}
            price={carInfo.price}
          />
        ))
      ) : (
        <span>
          <h3 style={{ display: "inline" }}>ADD SOME CARS TO YOUR </h3>
          <Link
            to="/createcars"
            style={{ display: "inline", textDecoration: "none" }}
          >
            <h3
              style={{
                display: "inline",
                textDecoration: "None",
                borderStyle: "dashed",
              }}
            >
              COLLECTION
            </h3>
          </Link>
        </span>
      )}
    </main>
  );
};

export default ViewCars;
