import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import "../css/Header.css";

function Header() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        opacity: "0.8",
        maxWidth: "20px",
      }}
    >
      <Toolbar>
        <Link to="/">
          <IconButton
            aria-label="home"
            className="icon-button"
            style={{ color: "white", opacity: "1" }}
          >
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
