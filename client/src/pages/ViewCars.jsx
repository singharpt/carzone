import React, { useState, useEffect } from "react";
import Cars from "../components/Cars";
import "../css/ViewCars.css";
import staticAPI from "../services/staticAPI";

const ViewCars = () => {
  const [interiors, setInteriors] = useState([]);
  const [exteriors, setExteriors] = useState([]);
  const [wheels, setWheels] = useState([]);
  const [roofs, setRoofs] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const interiorsResponse = await staticAPI.getAllInteriors();
        const exteriorsResponse = await staticAPI.getAllExteriors();
        const wheelsResponse = await staticAPI.getAllWheels();
        const roofsResponse = await staticAPI.getAllRoofs();
        const carsResponse = await staticAPI.getAllCars();
        setInteriors(interiorsResponse?.data);
        setExteriors(exteriorsResponse?.data);
        setWheels(wheelsResponse?.data);
        setRoofs(roofsResponse?.data);
        setCars(carsResponse?.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <div className="location-events">
      <main>
        {cars && cars.length > 0 ? (
          cars.map((carInfo) => (
            <Cars
              key={carInfo.id}
              name={carInfo.name}
              interior={carInfo.interior}
              exterior={carInfo.exterior}
              wheel={carInfo.wheel}
              roof={carInfo.roof}
              price={carInfo.price}
            />
          ))
        ) : (
          <h2>{"No carsto display yet!"}</h2>
        )}
      </main>
    </div>
  );
};

export default ViewCars;
