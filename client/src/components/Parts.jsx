import React, { useEffect, useContext, useState } from "react";
import { MyContext } from "../components/ContextProvider";
import "../css/Parts.css";

function Parts(props) {
  const { getStates, updateStates } = useContext(MyContext);
  const dataToShow = getStates(props.stateKey);

  const saveItem = (id) => {
    props.hideDisplay();
    props.saveChanges(props.stateKey, id);
  };

  return (
    <div className="parts-main">
      <div className="parts-container">
        {dataToShow &&
          dataToShow.length > 0 &&
          dataToShow.map((item) => {
            return item.isconvertible === undefined ||
              props.parts.converState === item.isconvertible ? (
              <div
                key={item.id}
                className="parts-item"
                onClick={() => saveItem(item.id)}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="part-info">
                  <p>{item.color}</p>
                  <p style={{ fontWeight: "700" }}>💵 ${item.price}</p>
                  <p>
                    {item.isconvertible === undefined
                      ? ""
                      : item.isconvertible
                      ? "For Convertables Only"
                      : "For Non-Convertables"}
                  </p>
                </div>
              </div>
            ) : (
              <div key={item.id}></div>
            );
          })}
      </div>
    </div>
  );
}

export default Parts;
