import React, { useState, useContext, useEffect } from "react";
import interior from "../assets/interior.png";
import wheel from "../assets/wheel.png";
import roof from "../assets/roof.png";
import exterior from "../assets/exterior.png";
import { Button } from "@mui/material";
import "../css/Car.css";
import TextField from "@mui/material/TextField";
import Parts from "./Parts";
import staticAPI from "../services/staticAPI";
import { MyContext } from "../components/ContextProvider";

function Car(carInfo) {
  console.log(carInfo);
  if (!carInfo.id) {
    const { getStates, updateStates } = useContext(MyContext);
    useEffect(() => {
      (async () => {
        try {
          const interiorsResponse = await staticAPI.getAllInteriors();
          const exteriorsResponse = await staticAPI.getAllExteriors();
          const wheelsResponse = await staticAPI.getAllWheels();
          const roofsResponse = await staticAPI.getAllRoofs();
          const carsResponse = await staticAPI.getAllCars();
          updateStates("interiorState", interiorsResponse);
          updateStates("exteriorState", exteriorsResponse);
          updateStates("wheelState", wheelsResponse);
          updateStates("roofState", roofsResponse);
          updateStates("carState", carsResponse);
        } catch (error) {
          throw error;
        }
      })();
    }, []);
  }

  const [options, setOptions] = useState(false);
  const [key, setKey] = useState(null);

  const showPartsOption = (key) => {
    setOptions(true);
    setKey(key);
  };

  const hidePartsOption = () => {
    setOptions(false);
  };

  return (
    <div className="car-main">
      {options ? (
        <Parts stateKey={key} display={hidePartsOption} />
      ) : (
        <>
          <div className="car-details">
            <div className="car-info">
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Your Car Name"
              />
              <div>Price</div>
            </div>
            <div className="car-actions">
              {carInfo.id ? (
                <div>
                  <Button>Save</Button>
                  <Button>Delete</Button>
                </div>
              ) : (
                <div>
                  <Button>Create Car</Button>
                  <Button>Reset</Button>
                </div>
              )}
            </div>
          </div>
          <div className="car-parts">
            <img
              src={carInfo.id ? carInfo.exterior : exterior}
              onClick={() => showPartsOption("exteriorState")}
            ></img>
            <img
              src={carInfo.id ? carInfo.interior : interior}
              onClick={() => showPartsOption("interiorState")}
            ></img>
            <img
              src={carInfo.id ? carInfo.wheel : wheel}
              onClick={() => showPartsOption("wheelState")}
            ></img>
            <img
              src={carInfo.id ? carInfo.roof : roof}
              onClick={() => showPartsOption("roofState")}
            ></img>
          </div>
        </>
      )}
    </div>
  );
}

export default Car;
