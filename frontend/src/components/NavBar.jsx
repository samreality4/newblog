import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function NavBar() {
 

  return (
    <AppBar position="static" style={{ backgroundColor: "#1eb2a6" }}>
      <Toolbar className=" navbar ml-auto">
        <Button style={{ color: "#ffffff" }}>
          Home
        </Button>
        <Button style={{ color: "#ffffff" }}>
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;