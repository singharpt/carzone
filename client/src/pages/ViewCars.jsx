import React, { useState, useEffect, useContext } from "react";
import Cars from "../components/Cars";
import "../css/ViewCars.css";
import { MyContext } from "../components/ContextProvider";
import staticAPI from "../services/staticAPI";

const ViewCars = () => {
  const { getStates, updateStates } = useContext(MyContext);
  const cars = getStates("carState");
  if (cars.length === 0) {
    useEffect(() => {
      (async () => {
        const carsResponse = await staticAPI.getAllCars();
        updateStates("carState", carsResponse);
      })();
    }, []);
  }
  return (
    <div className="location-events">
      <main>
        <h1 style={{ textAlign: "center" }}>WELCOME TO YOUR GARAGE</h1>
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
          <h2>{"No cars to display yet!"}</h2>
        )}
      </main>
    </div>
  );
};

export default ViewCars;
