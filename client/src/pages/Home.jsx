import React, { useEffect, useContext } from "react";
import "../App.css";
import "../css/Navigation.css";
import staticAPI from "../services/staticAPI";
import { MyContext } from "../components/ContextProvider";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "View Cars",
      "Add Cars",
      "Edit Cars",
      "Delete Cars",
      "Your Cars Portfolio",
    ],
  });

  return (
    <main className="app">
      <div className="lander">
        <div className="lander-heading">
          <h1 className="lander-heading-h1">
            CARZONE <br />
            <span className="lander-heading-h1-span">
              {"<"}
              {text}
              {" />"}
            </span>
          </h1>
        </div>
        <div className="lander-button">
          <Link to="/createcars">
            <Button variant="outlined">Add New Cars</Button>
          </Link>
          <Link to="/viewcars">
            <Button variant="outlined">View All Cars</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
