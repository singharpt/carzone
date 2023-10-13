import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import "../css/Header.css";

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar>
        <Link to="/">
          <IconButton
            aria-label="home"
            className="icon-button"
            style={{ color: "white" }}
          >
            <HomeIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
