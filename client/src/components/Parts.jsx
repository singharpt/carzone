import React, { useEffect, useContext, useState } from "react";
import { MyContext } from "../components/ContextProvider";
import "../css/Parts.css";
import { Button } from "@mui/material";

function Parts(props) {
  const { getStates, updateStates } = useContext(MyContext);
  const dataToShow = getStates(props.stateKey);

  const highlightItem = (id) => {
    props.display();
    props.parts(props.stateKey, id);
    props.price();
    console.log(id);
  };

  return (
    <div className="parts-main">
      <div className="parts-container">
        {dataToShow &&
          dataToShow.length > 0 &&
          dataToShow.map((item) => {
            return (
              <div
                key={item.id}
                className="parts-item"
                onClick={() => highlightItem(item.id)}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="part-info">
                  <p>{item.color}</p>
                  <p style={{ fontWeight: "700" }}>💵 ${item.price}</p>
                  <p>{item?.isconvertible}</p>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div className="parts-buttons">
        <Button
          onClick={props.display}
          style={{
            color: "white",
            width: "120px",
            height: "50px",
            padding: "15px",
            borderRadius: "10px",
            borderColor: "grey",
          }}
        >
          SAVE
        </Button>
        <Button
          onClick={props.display}
          style={{
            color: "white",
            width: "120px",
            height: "50px",
            padding: "15px",
            borderRadius: "10px",
            borderColor: "grey",
          }}
        >
          CANCEL
        </Button>
      </div> */}
    </div>
  );
}

export default Parts;
