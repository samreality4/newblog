import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static" style={{ background: "linear-gradient(48deg, rgba(63,180,251,1) 18%, rgba(164,122,21,1) 87%)" }}>
      <Toolbar className=" navbar ml-auto">
        <Link to="/" className="nav-link">
          <Button style={{ color: "#ffffff"}}>Home</Button>
        </Link>
        <Link to="/About" className="nav-link">
          <Button style={{ color: "#ffffff"}}>About</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
