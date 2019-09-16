import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar= (props) =>{
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Booking GRID {}
          </Typography>
          <Link to="/">
            <Button color="primary" onClick={props.handleLogout}>
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
