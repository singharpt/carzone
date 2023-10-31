import React, { useState, useContext, useEffect } from "react";
import interior from "../assets/interior.png";
import wheel from "../assets/wheel.png";
import roof from "../assets/roof.png";
import exterior from "../assets/exterior.png";
import { Button } from "@mui/material";
import "../css/CarForm.css";
import Parts from "./Parts";
import staticAPI from "../services/staticAPI";
import crudAPI from "../services/crudAPI";
import { MyContext } from "./ContextProvider";
import getPartsData from "../utilities/getPartsData";
import { useNavigate, useParams } from "react-router-dom";

function CarForm() {
  const navigate = useNavigate();
  const { getStates, updateStates } = useContext(MyContext);
  const carId = useParams();

  const updateParts = (key, value) => {
    setParts((prevState) => ({ ...prevState, [key]: value }));
    updatePrice();
  };

  const updateCheckBox = (key, value) => {
    updateParts(key, value);
    updateParts("roofState", -1);
  };

  const [parts, setParts] = useState({
    idState: -1,
    nameState: "",
    priceState: -1,
    interiorState: -1,
    exteriorState: -1,
    wheelState: -1,
    roofState: -1,
    converState: false,
  });

  useEffect(() => {
    async function fetchData() {
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

        let carInfo = null;
        if (JSON.stringify(carId) !== "{}") {
          carInfo = getPartsData(carsResponse, carId.id);
        }

        setParts((prevState) => ({
          idState: carInfo?.id === undefined ? -1 : carInfo.id,
          nameState: carInfo?.name === undefined ? "" : carInfo.name,
          priceState: carInfo?.price === undefined ? 60000 : carInfo.price,
          interiorState:
            carInfo?.interior === undefined ? -1 : carInfo.interior,
          exteriorState:
            carInfo?.exterior === undefined ? -1 : carInfo.exterior,
          wheelState: carInfo?.wheel === undefined ? -1 : carInfo.wheel,
          roofState: carInfo?.roof === undefined ? -1 : carInfo.roof,
          converState:
            carInfo?.isconvertible === undefined
              ? false
              : carInfo.isconvertible,
        }));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const [options, setOptions] = useState(false);
  const [key, setKey] = useState(null);

  const showPartsOption = (key) => {
    setOptions(true);
    setKey(key);
  };

  const updatePrice = () => {
    setParts((prevParts) => {
      const exteriorPrice =
        prevParts.exteriorState === -1
          ? 0
          : getPartsData(getStates("exteriorState"), prevParts.exteriorState)
              ?.price;
      const interiorPrice =
        prevParts.interiorState === -1
          ? 0
          : getPartsData(getStates("interiorState"), prevParts.interiorState)
              ?.price;
      const wheelPrice =
        prevParts.wheelState === -1
          ? 0
          : getPartsData(getStates("wheelState"), prevParts.wheelState)?.price;
      const roofPrice =
        prevParts.roofState === -1
          ? 0
          : getPartsData(getStates("roofState"), prevParts.roofState)?.price;
      const convertiblePrice = prevParts.converState ? 20000 : 0;

      const totalPrice =
        60000 +
        exteriorPrice +
        interiorPrice +
        wheelPrice +
        roofPrice +
        convertiblePrice;

      return {
        ...prevParts,
        priceState: totalPrice,
      };
    });
  };

  const hidePartsOption = () => {
    setOptions(false);
  };

  const createCar = async () => {
    const carInfo = {
      name: parts.nameState,
      exterior: parts.exteriorState,
      interior: parts.interiorState,
      roof: parts.roofState,
      wheel: parts.wheelState,
      price: parts.priceState,
      isconvertible: parts.converState,
    };
    const res = await crudAPI.createCars(carInfo);
    if (res.status === 200) {
      navigate("/viewcars", { replace: true });
    }
  };

  const saveData = async () => {
    const carInfo = {
      id: parts.idState,
      name: parts.nameState,
      exterior: parts.exteriorState,
      interior: parts.interiorState,
      roof: parts.roofState,
      wheel: parts.wheelState,
      price: parts.priceState,
      isconvertible: parts.converState,
    };
    const res = await crudAPI.updateCars(carInfo);
    if (res.status === 200) {
      navigate("/viewcars", { replace: true });
    }
  };

  const deleteData = async () => {
    const carInfo = { carId: parts.idState };
    console.log(carInfo);
    const res = await crudAPI.deleteCars(carInfo);
    if (res.status === 200) {
      navigate("/viewcars", { replace: true });
    }
  };

  return (
    <div className="car-main">
      {console.log(parts)}
      {options ? (
        <Parts
          stateKey={key}
          hideDisplay={hidePartsOption}
          saveChanges={updateParts}
          parts={parts}
        />
      ) : (
        <>
          <div className="car-details">
            <div className="car-info">
              <label className="car-label">
                YOUR CAR NAME
                <input
                  className="car-name"
                  name="carname"
                  type="text"
                  value={parts.nameState}
                  onChange={(e) => {
                    updateParts("nameState", e.target.value);
                  }}
                />
                <label className="car-covertible">
                  <input
                    type="checkbox"
                    checked={parts.converState}
                    onChange={() =>
                      updateCheckBox("converState", !parts.converState)
                    }
                  />
                  : CONVERTIBLE
                </label>
              </label>

              <p> PRICE : 💰 ${parts.priceState}</p>
            </div>
            <div className="car-actions">
              {JSON.stringify(carId) !== "{}" ? (
                <div>
                  <Button
                    onClick={saveData}
                    style={{ backgroundColor: "darkred", color: "white" }}
                  >
                    Save
                  </Button>
                  <Button
                    onClick={deleteData}
                    style={{ backgroundColor: "darkred", color: "white" }}
                  >
                    Delete
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    onClick={createCar}
                    style={{ backgroundColor: "darkred", color: "white" }}
                  >
                    Create Car
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="car-parts">
            <div className="image-container">
              <img
                src={
                  parts.exteriorState === -1
                    ? exterior
                    : getPartsData(
                        getStates("exteriorState"),
                        parts.exteriorState
                      )?.image
                }
                onClick={() => showPartsOption("exteriorState")}
              />
              <div className="tooltip">EXTERIOR</div>
            </div>

            <div className="image-container">
              <img
                src={
                  parts.interiorState === -1
                    ? interior
                    : getPartsData(
                        getStates("interiorState"),
                        parts.interiorState
                      )?.image
                }
                onClick={() => showPartsOption("interiorState")}
              />
              <div className="tooltip">INTERIOR</div>
            </div>

            <div className="image-container">
              <img
                src={
                  parts.wheelState === -1
                    ? wheel
                    : getPartsData(getStates("wheelState"), parts.wheelState)
                        ?.image
                }
                onClick={() => showPartsOption("wheelState")}
              />
              <div className="tooltip">WHEEL</div>
            </div>

            <div className="image-container">
              <img
                src={
                  parts.roofState === -1
                    ? roof
                    : getPartsData(getStates("roofState"), parts.roofState)
                        ?.image
                }
                onClick={() => showPartsOption("roofState")}
              />
              <div className="tooltip">ROOF</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CarForm;
