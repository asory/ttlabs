import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar = ({ params }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
             Booking GRID {}
          </Typography>
          <Link to="/">
            <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
