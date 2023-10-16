import React, { useState, useEffect, useContext } from "react";
import Cars from "../components/Cars";
import "../css/ViewCars.css";
import { MyContext } from "../components/ContextProvider";
import staticAPI from "../services/staticAPI";
import { Link } from "react-router-dom";
import getPartsData from "../utilities/getPartsData";

const ViewCars = () => {
  const { getStates, updateStates } = useContext(MyContext);
  const globalStates = {
    cars: getStates("carState"),
    interiors: getStates("interiorState"),
    exteriors: getStates("exteriorState"),
    wheels: getStates("wheelState"),
    roofs: getStates("roofState"),
  };

  const [parts, setParts] = useState({
    interiorColor: null,
    exteriorColor: null,
    wheelColor: null,
    roofColor: null,
  });

  const updateParts = (key, array, value) => {
    setParts((prevParts) => ({
      ...prevParts,
      [key]: getPartsData(array, value)?.color,
    }));
  };

  useEffect(() => {
    (async () => {
      const carsResponse = await staticAPI.getAllCars();
      const interiorsResponse = await staticAPI.getAllInteriors();
      const exteriorsResponse = await staticAPI.getAllExteriors();
      const wheelsResponse = await staticAPI.getAllWheels();
      const roofsResponse = await staticAPI.getAllRoofs();

      //update context provider state
      updateStates("carState", carsResponse);
      updateStates("interiorState", interiorsResponse);
      updateStates("exteriorState", exteriorsResponse);
      updateStates("wheelState", wheelsResponse);
      updateStates("roofState", roofsResponse);
    })();
  }, []);

  return (
    <main className="view-cars">
      {globalStates.cars && globalStates.cars.length > 0 ? (
        <p>YOUR CARS COLLECTION</p>
      ) : (
        <></>
      )}
      {globalStates.cars && globalStates.cars.length > 0 ? (
        globalStates.cars.map((carInfo) => (
          <Cars
            key={carInfo.id}
            id={carInfo.id}
            name={carInfo.name}
            interior={carInfo.interior}
            exterior={carInfo.exterior}
            wheel={carInfo.wheel}
            roof={carInfo.roof}
            price={carInfo.price}
            updateParts={updateParts}
            globalStates={globalStates}
            parts={parts}
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
